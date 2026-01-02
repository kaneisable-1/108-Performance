// Types for the Athlete Diagnostic Survey

import type { Division, Position } from '@/data/softball-benchmarks';

export interface AthleteProfile {
  // Basic Info
  firstName: string;
  lastName: string;
  email: string;
  graduationYear: number;
  state: string;

  // Physical
  heightFeet: number;
  heightInches: number;
  weight: number;

  // Position
  primaryPosition: Position;
  secondaryPosition?: Position;
  isPitcher: boolean;
  isSlapper: boolean;

  // Academics
  gpa: number;
  satScore?: number;
  actScore?: number;

  // Travel Ball
  travelTeam?: string;
  travelOrganization?: string;
  yearsPlayed: number;

  // Division Preferences
  preferredDivisions: Division[];
  preferredRegion?: string;
  willingToTravel: boolean;
}

export interface PitcherMetrics {
  fastballVelocity: number;
  changeupVelocity?: number;
  primaryMovementPitch: string;
  secondaryMovementPitch?: string;
  tertiaryMovementPitch?: string;
  spinRate?: number; // RPM
  era?: number;
  strikeoutsPerGame?: number;
  walksPerGame?: number;
}

export interface PositionPlayerMetrics {
  homeToFirstTime: number; // seconds
  throwVelocity: number; // MPH
  exitVelocity: number; // MPH
  battingAverage?: number;
  onBasePercentage?: number;
  homeRuns?: number;
  rbis?: number;
  stolenBases?: number;
  fieldingPercentage?: number;
}

export interface CatcherMetrics extends PositionPlayerMetrics {
  popTime: number; // seconds
  caughtStealingPercentage?: number;
}

export interface SlapperMetrics {
  homeToFirstSoftSlap: number;
  homeToFirstPowerSlap: number;
  battingAverage?: number;
  onBasePercentage?: number;
  stolenBases?: number;
}

export interface DiagnosticFormData {
  profile: AthleteProfile;
  pitcherMetrics?: PitcherMetrics;
  positionMetrics?: PositionPlayerMetrics;
  catcherMetrics?: CatcherMetrics;
  slapperMetrics?: SlapperMetrics;
}

export interface MetricScore {
  metric: string;
  athleteValue: number | string;
  benchmarkValue: number | string;
  score: number; // 0-100
  rating: 'below' | 'meets' | 'exceeds' | 'elite';
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

export interface DiagnosticResult {
  athleteProfile: AthleteProfile;
  timestamp: Date;
  divisionMatches: DivisionMatch[];
  bestFitDivision: Division;
  reachDivisions: Division[];
  targetDivisions: Division[];
  safetyDivisions: Division[];
  overallAssessment: string;
  recruitingRecommendations: string[];
}

export type FormStep =
  | 'basic-info'
  | 'physical'
  | 'position'
  | 'academics'
  | 'travel-ball'
  | 'pitcher-metrics'
  | 'position-metrics'
  | 'catcher-metrics'
  | 'slapper-metrics'
  | 'preferences'
  | 'review';

export interface StepConfig {
  id: FormStep;
  title: string;
  description: string;
  isRequired: boolean;
  condition?: (data: Partial<DiagnosticFormData>) => boolean;
}
