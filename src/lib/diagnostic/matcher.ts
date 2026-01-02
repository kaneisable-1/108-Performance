// Pitcher-only matching algorithm

import {
  Division,
  divisions,
  pitchingBenchmarks,
  academicRequirements,
  conferencesByTier,
  getPitchingBenchmark,
  getDivisionInfo,
} from '@/data/softball-benchmarks';

import type { PitcherDiagnosticData, PitcherProfile, PitcherMetrics } from '@/components/diagnostic/AthleteDiagnostic';

export interface MetricScore {
  metric: string;
  athleteValue: number | string;
  benchmarkValue: number | string;
  score: number; // 0-100
  rating: 'below' | 'meets' | 'exceeds' | 'elite';
  importance: 'critical' | 'high' | 'medium' | 'low';
}

export interface DivisionMatch {
  division: Division;
  overallScore: number; // 0-100
  matchStrength: 'reach' | 'target' | 'safety' | 'likely';
  metricScores: MetricScore[];
  strengths: string[];
  areasToImprove: string[];
  recommendedConferences: string[];
}

export interface PitcherDiagnosticResult {
  profile: PitcherProfile;
  metrics: PitcherMetrics;
  timestamp: Date;
  divisionMatches: DivisionMatch[];
  bestFitDivision: Division;
  reachDivisions: Division[];
  targetDivisions: Division[];
  safetyDivisions: Division[];
  overallAssessment: string;
  recruitingRecommendations: string[];
}

// Score a single metric (0-100 scale)
function scoreMetric(
  athleteValue: number,
  benchmarkValue: number,
  isLowerBetter: boolean = false,
  tolerance: number = 0.10
): { score: number; rating: 'below' | 'meets' | 'exceeds' | 'elite' } {
  const ratio = isLowerBetter
    ? benchmarkValue / athleteValue
    : athleteValue / benchmarkValue;

  let score: number;
  let rating: 'below' | 'meets' | 'exceeds' | 'elite';

  if (ratio >= 1.10) {
    score = Math.min(100, 85 + (ratio - 1.10) * 150);
    rating = 'elite';
  } else if (ratio >= 1.0) {
    score = 70 + (ratio - 1.0) * 150;
    rating = 'exceeds';
  } else if (ratio >= 1.0 - tolerance) {
    score = 50 + ((ratio - (1.0 - tolerance)) / tolerance) * 20;
    rating = 'meets';
  } else {
    score = Math.max(0, ratio * 50);
    rating = 'below';
  }

  return { score: Math.round(score), rating };
}

// Calculate pitcher metrics scores for a division
function scorePitcherMetrics(
  metrics: PitcherMetrics,
  profile: PitcherProfile,
  division: Division
): MetricScore[] {
  const benchmark = getPitchingBenchmark(division);
  if (!benchmark) return [];

  const scores: MetricScore[] = [];

  // 1. FASTBALL VELOCITY (Critical - weighted heavily)
  const velocityResult = scoreMetric(metrics.fastballVelocity, benchmark.velocityMin);
  scores.push({
    metric: 'Fastball Velocity',
    athleteValue: `${metrics.fastballVelocity} MPH`,
    benchmarkValue: `${benchmark.velocityMin}+ MPH`,
    score: velocityResult.score,
    rating: velocityResult.rating,
    importance: 'critical',
  });

  // 2. PITCH ARSENAL (High importance)
  // Count: fastball + changeup + movement pitches
  const pitchCount = 2 + metrics.movementPitches.length; // FB + changeup + movements
  const arsenalScore = Math.min(100, (pitchCount / benchmark.pitchesRequired) * 85);
  scores.push({
    metric: 'Pitch Arsenal',
    athleteValue: `${pitchCount} pitches`,
    benchmarkValue: `${benchmark.pitchesRequired}+ pitches`,
    score: arsenalScore,
    rating: pitchCount >= benchmark.pitchesRequired + 1 ? 'elite' :
            pitchCount >= benchmark.pitchesRequired ? 'exceeds' :
            pitchCount >= benchmark.pitchesRequired - 1 ? 'meets' : 'below',
    importance: 'high',
  });

  // 3. CHANGEUP DIFFERENTIAL (High importance)
  if (metrics.changeupVelocity) {
    const differential = metrics.fastballVelocity - metrics.changeupVelocity;
    const idealMin = benchmark.changeupDifferential.min;
    const idealMax = benchmark.changeupDifferential.max;
    const idealMid = (idealMin + idealMax) / 2;

    let diffScore: number;
    let diffRating: 'below' | 'meets' | 'exceeds' | 'elite';

    if (differential >= idealMin && differential <= idealMax) {
      diffScore = 80;
      diffRating = 'exceeds';
    } else if (differential >= idealMid) {
      diffScore = 90;
      diffRating = 'elite';
    } else if (differential >= idealMin - 3) {
      diffScore = 60;
      diffRating = 'meets';
    } else {
      diffScore = Math.max(20, 40 - (idealMin - differential) * 5);
      diffRating = 'below';
    }

    scores.push({
      metric: 'Changeup Differential',
      athleteValue: `${differential} MPH slower`,
      benchmarkValue: `${idealMin}-${idealMax} MPH`,
      score: diffScore,
      rating: diffRating,
      importance: 'high',
    });
  }

  // 4. SPIN RATE (Medium importance - optional)
  if (metrics.spinRate) {
    const spinBenchmark = division === 'D1_POWER5' ? 1200 :
                          division === 'D1_MIDMAJOR' ? 1100 :
                          division === 'D2' ? 1000 : 900;
    const spinResult = scoreMetric(metrics.spinRate, spinBenchmark);
    scores.push({
      metric: 'Spin Rate',
      athleteValue: `${metrics.spinRate} RPM`,
      benchmarkValue: `${spinBenchmark}+ RPM`,
      score: spinResult.score,
      rating: spinResult.rating,
      importance: 'medium',
    });
  }

  // 5. ACADEMICS (Medium importance)
  const academicReq = academicRequirements.find(r => r.division === division);
  if (academicReq) {
    const gpaResult = scoreMetric(profile.gpa, academicReq.minGPA);
    // Bonus for 3.0+ GPA
    const adjustedScore = profile.gpa >= 3.0 ? Math.min(100, gpaResult.score + 10) : gpaResult.score;
    scores.push({
      metric: 'GPA',
      athleteValue: profile.gpa.toFixed(2),
      benchmarkValue: `${academicReq.minGPA}+ (3.0 preferred)`,
      score: adjustedScore,
      rating: profile.gpa >= 3.5 ? 'elite' :
              profile.gpa >= 3.0 ? 'exceeds' :
              profile.gpa >= academicReq.minGPA ? 'meets' : 'below',
      importance: 'medium',
    });
  }

  // 6. LEFT-HANDED BONUS (informational)
  if (profile.throwingHand === 'left') {
    scores.push({
      metric: 'Left-Handed Pitcher',
      athleteValue: 'Yes',
      benchmarkValue: 'High demand',
      score: 90,
      rating: 'elite',
      importance: 'medium',
    });
  }

  return scores;
}

// Calculate weighted overall score
function calculateOverallScore(metricScores: MetricScore[]): number {
  if (metricScores.length === 0) return 0;

  const weights = {
    critical: 3.0,
    high: 2.0,
    medium: 1.0,
    low: 0.5,
  };

  let totalWeight = 0;
  let weightedSum = 0;

  for (const score of metricScores) {
    const weight = weights[score.importance];
    totalWeight += weight;
    weightedSum += score.score * weight;
  }

  return Math.round(weightedSum / totalWeight);
}

// Determine match strength based on score
function getMatchStrength(score: number): 'reach' | 'target' | 'safety' | 'likely' {
  if (score >= 85) return 'likely';
  if (score >= 70) return 'safety';
  if (score >= 55) return 'target';
  return 'reach';
}

// Get recommended conferences based on division
function getRecommendedConferences(division: Division): string[] {
  const tierMap: Record<Division, string> = {
    'D1_POWER5': 'Power 5',
    'D1_MIDMAJOR': 'High D1',
    'D2': 'Top D2',
    'D3': 'Top D3',
    'NAIA': 'NAIA',
    'JUCO': 'NAIA', // No specific JUCO tier
  };

  const tier = tierMap[division];
  const conf = conferencesByTier.find(c => c.tier === tier);
  return conf?.conferences || [];
}

// Identify strengths and areas to improve
function analyzeStrengthsAndWeaknesses(metricScores: MetricScore[]): {
  strengths: string[];
  areasToImprove: string[];
} {
  const strengths: string[] = [];
  const areasToImprove: string[] = [];

  for (const score of metricScores) {
    if (score.rating === 'elite' || score.rating === 'exceeds') {
      strengths.push(score.metric);
    } else if (score.rating === 'below') {
      areasToImprove.push(score.metric);
    }
  }

  return { strengths, areasToImprove };
}

// Generate personalized recommendations
function generateRecommendations(
  matches: DivisionMatch[],
  profile: PitcherProfile,
  metrics: PitcherMetrics
): string[] {
  const recommendations: string[] = [];
  const bestMatch = matches[0];

  // Velocity recommendations
  const velocityScore = bestMatch.metricScores.find(m => m.metric === 'Fastball Velocity');
  if (velocityScore?.rating === 'below') {
    recommendations.push(
      'Focus on velocity development through proper strength training, long toss programs, and mechanics refinement. A 2-3 MPH increase can significantly expand your options.'
    );
  } else if (velocityScore?.rating === 'meets') {
    recommendations.push(
      'Your velocity is competitive - continue developing while maintaining arm health. Focus on adding 1-2 MPH to reach the next level.'
    );
  }

  // Pitch arsenal recommendations
  const arsenalScore = bestMatch.metricScores.find(m => m.metric === 'Pitch Arsenal');
  if (arsenalScore?.rating === 'below' || arsenalScore?.rating === 'meets') {
    const currentCount = 2 + metrics.movementPitches.length;
    if (currentCount < 4) {
      recommendations.push(
        `Develop additional movement pitches. D1 coaches typically want 4+ pitches. Consider adding a ${
          !metrics.movementPitches.includes('riseball') ? 'rise ball' :
          !metrics.movementPitches.includes('dropball') ? 'drop ball' :
          !metrics.movementPitches.includes('curveball') ? 'curveball' : 'screwball'
        } to your arsenal.`
      );
    }
  }

  // Changeup recommendations
  if (metrics.changeupVelocity) {
    const diff = metrics.fastballVelocity - metrics.changeupVelocity;
    if (diff < 10) {
      recommendations.push(
        'Work on increasing your changeup speed differential. Aim for 10-15 MPH slower than your fastball for maximum effectiveness.'
      );
    }
  } else {
    recommendations.push(
      'Develop a reliable changeup with good speed separation from your fastball (10-15 MPH slower is ideal).'
    );
  }

  // Academic recommendations
  if (profile.gpa < 3.0) {
    recommendations.push(
      'Work on improving your GPA to 3.0+ to expand scholarship opportunities and be more attractive to academic-focused programs.'
    );
  }

  // Left-handed advantage
  if (profile.throwingHand === 'left') {
    recommendations.push(
      'As a left-handed pitcher, you have a significant advantage in recruiting. Left-handers are in high demand at every level.'
    );
  }

  // General recruiting recommendations
  recommendations.push(
    'Create a skills video showcasing your pitching from multiple angles. Include velocity readings and show all your pitches.'
  );
  recommendations.push(
    'Attend college camps and showcases for direct exposure to coaches. Camps at your target schools are especially valuable.'
  );
  recommendations.push(
    'Reach out proactively to coaches at your target schools with your video, stats, and academic information.'
  );

  return recommendations.slice(0, 6);
}

// Generate overall assessment
function generateAssessment(
  matches: DivisionMatch[],
  profile: PitcherProfile,
  metrics: PitcherMetrics,
  bestFit: Division
): string {
  const bestMatch = matches.find(m => m.division === bestFit);
  const divisionInfo = getDivisionInfo(bestFit);

  if (!bestMatch || !divisionInfo) {
    return 'Unable to generate assessment. Please ensure all required metrics are provided.';
  }

  const velocityScore = bestMatch.metricScores.find(m => m.metric === 'Fastball Velocity');
  const arsenalScore = bestMatch.metricScores.find(m => m.metric === 'Pitch Arsenal');

  let assessment = `Based on your ${metrics.fastballVelocity} MPH fastball`;

  if (metrics.movementPitches.length > 0) {
    assessment += ` and ${metrics.movementPitches.length + 2}-pitch arsenal`;
  }

  assessment += `, your best fit appears to be ${divisionInfo.name} programs. `;
  assessment += `Your overall match score of ${bestMatch.overallScore}% indicates you are a ${bestMatch.matchStrength} candidate at this level. `;

  if (velocityScore?.rating === 'elite' || velocityScore?.rating === 'exceeds') {
    assessment += 'Your velocity is a standout attribute. ';
  }

  if (profile.throwingHand === 'left') {
    assessment += 'Being left-handed gives you additional recruiting value. ';
  }

  if (bestMatch.areasToImprove.length > 0) {
    assessment += `Focus on developing: ${bestMatch.areasToImprove.join(', ')}.`;
  }

  return assessment;
}

// Main matching function
export function calculatePitcherMatch(data: PitcherDiagnosticData): PitcherDiagnosticResult {
  const { profile, metrics, preferredDivisions } = data;
  const divisionMatches: DivisionMatch[] = [];

  // Calculate matches for each division
  const divisionOrder: Division[] = ['D1_POWER5', 'D1_MIDMAJOR', 'D2', 'D3', 'NAIA', 'JUCO'];

  for (const division of divisionOrder) {
    const metricScores = scorePitcherMetrics(metrics, profile, division);
    const overallScore = calculateOverallScore(metricScores);
    const { strengths, areasToImprove } = analyzeStrengthsAndWeaknesses(metricScores);

    divisionMatches.push({
      division,
      overallScore,
      matchStrength: getMatchStrength(overallScore),
      metricScores,
      strengths,
      areasToImprove,
      recommendedConferences: getRecommendedConferences(division),
    });
  }

  // Sort by score (highest first) for display
  divisionMatches.sort((a, b) => b.overallScore - a.overallScore);

  // Categorize divisions by match strength
  const reachDivisions = divisionMatches.filter(m => m.matchStrength === 'reach').map(m => m.division);
  const targetDivisions = divisionMatches.filter(m => m.matchStrength === 'target').map(m => m.division);
  const safetyDivisions = divisionMatches.filter(m => m.matchStrength === 'safety' || m.matchStrength === 'likely').map(m => m.division);

  // Determine best fit - prioritize MOST COMPETITIVE division where athlete is competitive
  // Use division prestige order (D1 Power 5 > D1 Mid-Major > D2 > D3 > NAIA > JUCO)
  const findMostCompetitive = (divisions: Division[]): Division | undefined => {
    for (const div of divisionOrder) {
      if (divisions.includes(div)) return div;
    }
    return undefined;
  };

  // Best fit = most competitive target, else most competitive safety, else least reach
  const bestFitDivision = findMostCompetitive(targetDivisions)
    || findMostCompetitive(safetyDivisions)
    || reachDivisions[reachDivisions.length - 1]
    || 'JUCO';

  // Generate recommendations and assessment
  const recommendations = generateRecommendations(divisionMatches, profile, metrics);
  const assessment = generateAssessment(divisionMatches, profile, metrics, bestFitDivision);

  return {
    profile,
    metrics,
    timestamp: new Date(),
    divisionMatches,
    bestFitDivision,
    reachDivisions,
    targetDivisions,
    safetyDivisions,
    overallAssessment: assessment,
    recruitingRecommendations: recommendations,
  };
}
