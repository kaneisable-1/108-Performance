import { IntentCategory, IntentResult, intentPatterns, intentResponses } from './taxonomy';

interface ClassificationScore {
  category: IntentCategory;
  score: number;
  matchedPatterns: number;
  matchedKeywords: number;
}

const CONFIDENCE_THRESHOLD = 0.3;
const HIGH_CONFIDENCE_THRESHOLD = 0.7;

export function classifyIntent(query: string): IntentResult {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return {
      category: 'UNKNOWN',
      confidence: 0,
      ...intentResponses.UNKNOWN,
    };
  }

  const scores: ClassificationScore[] = [];

  for (const pattern of intentPatterns) {
    let score = 0;
    let matchedPatterns = 0;
    let matchedKeywords = 0;

    // Check regex patterns
    for (const regex of pattern.patterns) {
      if (regex.test(normalizedQuery)) {
        score += 0.4 * pattern.weight;
        matchedPatterns++;
      }
    }

    // Check keywords
    for (const keyword of pattern.keywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += 0.3 * pattern.weight;
        matchedKeywords++;
      }
    }

    // Boost for multiple matches
    if (matchedPatterns > 1 || matchedKeywords > 1) {
      score *= 1.2;
    }

    scores.push({
      category: pattern.category,
      score,
      matchedPatterns,
      matchedKeywords,
    });
  }

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);

  const topScore = scores[0];

  // If no good match, return unknown
  if (!topScore || topScore.score < CONFIDENCE_THRESHOLD) {
    return {
      category: 'UNKNOWN',
      confidence: topScore?.score || 0,
      ...intentResponses.UNKNOWN,
    };
  }

  // Normalize confidence to 0-1 range (cap at 1.0)
  const confidence = Math.min(topScore.score, 1.0);

  return {
    category: topScore.category,
    confidence,
    ...intentResponses[topScore.category],
  };
}

export function isHighConfidence(result: IntentResult): boolean {
  return result.confidence >= HIGH_CONFIDENCE_THRESHOLD;
}

export function needsAIFallback(result: IntentResult): boolean {
  return result.category === 'UNKNOWN' || result.confidence < CONFIDENCE_THRESHOLD;
}

// Quick suggestion chips based on common intents
export const quickSuggestions = [
  { label: 'I want more velocity', intent: 'PERFORMANCE_VELOCITY' },
  { label: 'I\'m a coach', intent: 'COACH_LEARN' },
  { label: 'For my son/daughter', intent: 'STAGE_YOUTH' },
  { label: 'Can\'t travel to Knoxville', intent: 'LOGISTICS_REMOTE' },
  { label: 'College recruiting', intent: 'STAGE_COLLEGE' },
  { label: 'Draft prep', intent: 'STAGE_DRAFT' },
];
