// NCAA Women's Fast-Pitch Softball Recruiting Benchmarks
// Data compiled from NCSA, Go Big Recruiting, Rapsodo, Big Time Softball, and D1Softball

export type Division = 'D1_POWER5' | 'D1_MIDMAJOR' | 'D2' | 'D3' | 'NAIA' | 'JUCO';
export type Position =
  | 'PITCHER'
  | 'CATCHER'
  | 'FIRST_BASE'
  | 'THIRD_BASE'
  | 'SHORTSTOP'
  | 'SECOND_BASE'
  | 'CENTER_FIELD'
  | 'LEFT_FIELD'
  | 'RIGHT_FIELD'
  | 'UTILITY'
  | 'SLAPPER';

export interface DivisionInfo {
  id: Division;
  name: string;
  shortName: string;
  description: string;
  scholarshipInfo: string;
  competitiveness: number; // 1-10 scale
}

export interface PitchingBenchmark {
  division: Division;
  velocityMin: number;
  velocityCompetitive: number;
  velocityElite: number;
  eraMax: number;
  strikeoutsPerInning: number;
  pitchesRequired: number;
  changeupDifferential: { min: number; max: number };
}

export interface PitchMovementBenchmark {
  pitchType: string;
  collegeVelocity: { min: number; max: number };
  collegeSpin: { min: number; max: number };
  eliteVelocity: number;
  eliteSpin: number;
  eliteVerticalBreak: number;
}

export interface PositionBenchmark {
  position: Position;
  division: Division;
  height?: { min: number; ideal: number }; // in inches
  weight?: { min: number; ideal: number }; // in pounds
  homeToFirst?: number; // in seconds
  throwVelocity?: number; // in MPH
  popTime?: number; // in seconds (catchers only)
  battingAvg?: number;
  exitVelocity?: number;
  homeRuns?: number;
  rbis?: number;
  stolenBases?: number;
  obp?: number;
  fieldingPct?: number;
  caughtStealing?: number; // percentage (catchers only)
}

export interface SlapperBenchmark {
  level: string;
  homeToFirstSoftSlap: number;
  homeToFirstPowerSlap: number;
}

// Division Information
export const divisions: DivisionInfo[] = [
  {
    id: 'D1_POWER5',
    name: 'Division I - Power 5',
    shortName: 'D1 Power 5',
    description: 'SEC, ACC, Big Ten, Big 12 - The highest level of college softball',
    scholarshipInfo: 'Up to 12 athletic scholarships per team',
    competitiveness: 10,
  },
  {
    id: 'D1_MIDMAJOR',
    name: 'Division I - Mid-Major',
    shortName: 'D1 Mid-Major',
    description: 'Sun Belt, Mountain West, Conference USA, and other D1 conferences',
    scholarshipInfo: 'Up to 12 athletic scholarships per team',
    competitiveness: 8,
  },
  {
    id: 'D2',
    name: 'Division II',
    shortName: 'D2',
    description: 'NCAA Division II programs across the country',
    scholarshipInfo: 'Up to 7.2 athletic scholarships per team (equivalency)',
    competitiveness: 6,
  },
  {
    id: 'D3',
    name: 'Division III',
    shortName: 'D3',
    description: 'NCAA Division III - No athletic scholarships, strong academics',
    scholarshipInfo: 'No athletic scholarships, but academic/need-based aid available',
    competitiveness: 5,
  },
  {
    id: 'NAIA',
    name: 'NAIA',
    shortName: 'NAIA',
    description: 'National Association of Intercollegiate Athletics',
    scholarshipInfo: 'Up to 10 athletic scholarships per team',
    competitiveness: 5,
  },
  {
    id: 'JUCO',
    name: 'Junior College',
    shortName: 'JUCO',
    description: '2-year colleges, often a pathway to 4-year programs',
    scholarshipInfo: 'Varies by school, full scholarships available',
    competitiveness: 4,
  },
];

// Pitching Velocity Benchmarks by Division
export const pitchingBenchmarks: PitchingBenchmark[] = [
  {
    division: 'D1_POWER5',
    velocityMin: 63,
    velocityCompetitive: 66,
    velocityElite: 70,
    eraMax: 2.0,
    strikeoutsPerInning: 1.2,
    pitchesRequired: 4,
    changeupDifferential: { min: 15, max: 20 },
  },
  {
    division: 'D1_MIDMAJOR',
    velocityMin: 60,
    velocityCompetitive: 63,
    velocityElite: 67,
    eraMax: 2.5,
    strikeoutsPerInning: 1.0,
    pitchesRequired: 4,
    changeupDifferential: { min: 12, max: 18 },
  },
  {
    division: 'D2',
    velocityMin: 58,
    velocityCompetitive: 60,
    velocityElite: 64,
    eraMax: 3.0,
    strikeoutsPerInning: 1.0,
    pitchesRequired: 3,
    changeupDifferential: { min: 10, max: 15 },
  },
  {
    division: 'D3',
    velocityMin: 55,
    velocityCompetitive: 58,
    velocityElite: 62,
    eraMax: 3.5,
    strikeoutsPerInning: 0.8,
    pitchesRequired: 3,
    changeupDifferential: { min: 10, max: 15 },
  },
  {
    division: 'NAIA',
    velocityMin: 55,
    velocityCompetitive: 58,
    velocityElite: 62,
    eraMax: 3.5,
    strikeoutsPerInning: 0.8,
    pitchesRequired: 3,
    changeupDifferential: { min: 10, max: 15 },
  },
  {
    division: 'JUCO',
    velocityMin: 54,
    velocityCompetitive: 56,
    velocityElite: 60,
    eraMax: 4.0,
    strikeoutsPerInning: 0.7,
    pitchesRequired: 2,
    changeupDifferential: { min: 8, max: 12 },
  },
];

// Pitch Movement Benchmarks (College vs Elite)
export const pitchMovementBenchmarks: PitchMovementBenchmark[] = [
  {
    pitchType: 'Fastball',
    collegeVelocity: { min: 60, max: 64 },
    collegeSpin: { min: 900, max: 1100 },
    eliteVelocity: 65,
    eliteSpin: 1100,
    eliteVerticalBreak: 6,
  },
  {
    pitchType: 'Drop Ball',
    collegeVelocity: { min: 60, max: 64 },
    collegeSpin: { min: 950, max: 1250 },
    eliteVelocity: 65,
    eliteSpin: 1250,
    eliteVerticalBreak: -8,
  },
  {
    pitchType: 'Rise Ball',
    collegeVelocity: { min: 60, max: 64 },
    collegeSpin: { min: 1200, max: 1450 },
    eliteVelocity: 65,
    eliteSpin: 1500,
    eliteVerticalBreak: 6,
  },
  {
    pitchType: 'Curveball',
    collegeVelocity: { min: 60, max: 64 },
    collegeSpin: { min: 1100, max: 1300 },
    eliteVelocity: 65,
    eliteSpin: 1300,
    eliteVerticalBreak: 2, // horizontal break: 6+
  },
  {
    pitchType: 'Screwball',
    collegeVelocity: { min: 60, max: 64 },
    collegeSpin: { min: 900, max: 1100 },
    eliteVelocity: 65,
    eliteSpin: 1100,
    eliteVerticalBreak: 2,
  },
  {
    pitchType: 'Changeup',
    collegeVelocity: { min: 45, max: 52 },
    collegeSpin: { min: 800, max: 950 },
    eliteVelocity: 50,
    eliteSpin: 950,
    eliteVerticalBreak: 6,
  },
];

// Position Player Benchmarks
export const positionBenchmarks: PositionBenchmark[] = [
  // CATCHERS
  {
    position: 'CATCHER',
    division: 'D1_POWER5',
    height: { min: 66, ideal: 68 }, // 5'6" - 5'8"
    weight: { min: 150, ideal: 160 },
    homeToFirst: 2.9,
    throwVelocity: 63,
    popTime: 1.8,
    battingAvg: 0.300,
    exitVelocity: 70,
    fieldingPct: 0.990,
    caughtStealing: 40,
  },
  {
    position: 'CATCHER',
    division: 'D1_MIDMAJOR',
    height: { min: 64, ideal: 66 },
    weight: { min: 145, ideal: 155 },
    homeToFirst: 3.0,
    throwVelocity: 60,
    popTime: 1.85,
    battingAvg: 0.285,
    exitVelocity: 68,
    fieldingPct: 0.985,
    caughtStealing: 38,
  },
  {
    position: 'CATCHER',
    division: 'D2',
    height: { min: 64, ideal: 64 },
    weight: { min: 140, ideal: 150 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    popTime: 1.9,
    battingAvg: 0.285,
    exitVelocity: 67,
    fieldingPct: 0.975,
    caughtStealing: 35,
  },
  {
    position: 'CATCHER',
    division: 'D3',
    height: { min: 62, ideal: 64 },
    weight: { min: 135, ideal: 140 },
    homeToFirst: 3.3,
    throwVelocity: 55,
    popTime: 2.0,
    battingAvg: 0.270,
    exitVelocity: 65,
    fieldingPct: 0.970,
    caughtStealing: 30,
  },
  {
    position: 'CATCHER',
    division: 'NAIA',
    height: { min: 62, ideal: 64 },
    weight: { min: 135, ideal: 140 },
    homeToFirst: 3.3,
    throwVelocity: 55,
    popTime: 2.1,
    battingAvg: 0.270,
    exitVelocity: 65,
    fieldingPct: 0.970,
    caughtStealing: 30,
  },
  {
    position: 'CATCHER',
    division: 'JUCO',
    height: { min: 62, ideal: 64 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 3.3,
    throwVelocity: 52,
    popTime: 2.1,
    battingAvg: 0.250,
    exitVelocity: 63,
    fieldingPct: 0.960,
    caughtStealing: 25,
  },

  // MIDDLE INFIELDERS (Shortstop)
  {
    position: 'SHORTSTOP',
    division: 'D1_POWER5',
    height: { min: 64, ideal: 66 },
    weight: { min: 130, ideal: 135 },
    homeToFirst: 2.8,
    throwVelocity: 62,
    battingAvg: 0.300,
    exitVelocity: 70,
    stolenBases: 7,
    fieldingPct: 0.990,
  },
  {
    position: 'SHORTSTOP',
    division: 'D1_MIDMAJOR',
    height: { min: 64, ideal: 65 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.85,
    throwVelocity: 60,
    battingAvg: 0.290,
    exitVelocity: 68,
    stolenBases: 5,
    fieldingPct: 0.985,
  },
  {
    position: 'SHORTSTOP',
    division: 'D2',
    height: { min: 63, ideal: 65 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.9,
    throwVelocity: 60,
    battingAvg: 0.280,
    exitVelocity: 67,
    stolenBases: 4,
    fieldingPct: 0.980,
  },
  {
    position: 'SHORTSTOP',
    division: 'D3',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 125 },
    homeToFirst: 3.0,
    throwVelocity: 58,
    battingAvg: 0.270,
    exitVelocity: 65,
    stolenBases: 3,
    fieldingPct: 0.970,
  },
  {
    position: 'SHORTSTOP',
    division: 'NAIA',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 125 },
    homeToFirst: 3.0,
    throwVelocity: 58,
    battingAvg: 0.270,
    exitVelocity: 65,
    stolenBases: 3,
    fieldingPct: 0.970,
  },
  {
    position: 'SHORTSTOP',
    division: 'JUCO',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 125 },
    homeToFirst: 3.2,
    throwVelocity: 55,
    battingAvg: 0.260,
    exitVelocity: 63,
    stolenBases: 3,
    fieldingPct: 0.960,
  },

  // SECOND BASE
  {
    position: 'SECOND_BASE',
    division: 'D1_POWER5',
    height: { min: 62, ideal: 66 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.8,
    throwVelocity: 60,
    battingAvg: 0.300,
    exitVelocity: 68,
    stolenBases: 7,
    fieldingPct: 0.990,
  },
  {
    position: 'SECOND_BASE',
    division: 'D1_MIDMAJOR',
    height: { min: 62, ideal: 65 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.85,
    throwVelocity: 58,
    battingAvg: 0.290,
    exitVelocity: 67,
    stolenBases: 5,
    fieldingPct: 0.985,
  },
  {
    position: 'SECOND_BASE',
    division: 'D2',
    height: { min: 62, ideal: 65 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.9,
    throwVelocity: 58,
    battingAvg: 0.280,
    exitVelocity: 67,
    stolenBases: 4,
    fieldingPct: 0.980,
  },
  {
    position: 'SECOND_BASE',
    division: 'D3',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 125 },
    homeToFirst: 3.0,
    throwVelocity: 56,
    battingAvg: 0.270,
    exitVelocity: 65,
    stolenBases: 3,
    fieldingPct: 0.970,
  },
  {
    position: 'SECOND_BASE',
    division: 'NAIA',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 125 },
    homeToFirst: 3.0,
    throwVelocity: 56,
    battingAvg: 0.270,
    exitVelocity: 65,
    stolenBases: 3,
    fieldingPct: 0.970,
  },
  {
    position: 'SECOND_BASE',
    division: 'JUCO',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 125 },
    homeToFirst: 3.2,
    throwVelocity: 55,
    battingAvg: 0.260,
    exitVelocity: 63,
    stolenBases: 3,
    fieldingPct: 0.960,
  },

  // FIRST BASE
  {
    position: 'FIRST_BASE',
    division: 'D1_POWER5',
    height: { min: 66, ideal: 69 },
    weight: { min: 145, ideal: 155 },
    homeToFirst: 3.0,
    throwVelocity: 60,
    battingAvg: 0.330,
    exitVelocity: 72,
    homeRuns: 3,
    rbis: 25,
    obp: 0.415,
    fieldingPct: 0.990,
  },
  {
    position: 'FIRST_BASE',
    division: 'D1_MIDMAJOR',
    height: { min: 65, ideal: 67 },
    weight: { min: 140, ideal: 150 },
    homeToFirst: 3.05,
    throwVelocity: 58,
    battingAvg: 0.315,
    exitVelocity: 70,
    homeRuns: 2,
    rbis: 20,
    obp: 0.400,
    fieldingPct: 0.985,
  },
  {
    position: 'FIRST_BASE',
    division: 'D2',
    height: { min: 64, ideal: 66 },
    weight: { min: 135, ideal: 145 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.315,
    exitVelocity: 68,
    homeRuns: 2,
    rbis: 18,
    obp: 0.390,
    fieldingPct: 0.980,
  },
  {
    position: 'FIRST_BASE',
    division: 'D3',
    height: { min: 63, ideal: 65 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 3.1,
    throwVelocity: 55,
    battingAvg: 0.290,
    exitVelocity: 66,
    homeRuns: 1,
    rbis: 15,
    obp: 0.380,
    fieldingPct: 0.970,
  },
  {
    position: 'FIRST_BASE',
    division: 'NAIA',
    height: { min: 63, ideal: 65 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 3.1,
    throwVelocity: 55,
    battingAvg: 0.290,
    exitVelocity: 66,
    homeRuns: 1,
    rbis: 15,
    obp: 0.380,
    fieldingPct: 0.970,
  },
  {
    position: 'FIRST_BASE',
    division: 'JUCO',
    height: { min: 63, ideal: 65 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 3.2,
    throwVelocity: 55,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 12,
    obp: 0.370,
    fieldingPct: 0.970,
  },

  // THIRD BASE
  {
    position: 'THIRD_BASE',
    division: 'D1_POWER5',
    height: { min: 65, ideal: 67 },
    weight: { min: 140, ideal: 150 },
    homeToFirst: 2.9,
    throwVelocity: 62,
    battingAvg: 0.320,
    exitVelocity: 70,
    homeRuns: 2,
    rbis: 20,
    obp: 0.400,
    fieldingPct: 0.980,
  },
  {
    position: 'THIRD_BASE',
    division: 'D1_MIDMAJOR',
    height: { min: 64, ideal: 66 },
    weight: { min: 135, ideal: 145 },
    homeToFirst: 2.95,
    throwVelocity: 60,
    battingAvg: 0.310,
    exitVelocity: 68,
    homeRuns: 2,
    rbis: 18,
    obp: 0.385,
    fieldingPct: 0.975,
  },
  {
    position: 'THIRD_BASE',
    division: 'D2',
    height: { min: 64, ideal: 66 },
    weight: { min: 135, ideal: 140 },
    homeToFirst: 3.0,
    throwVelocity: 58,
    battingAvg: 0.300,
    exitVelocity: 67,
    homeRuns: 1,
    rbis: 15,
    obp: 0.380,
    fieldingPct: 0.970,
  },
  {
    position: 'THIRD_BASE',
    division: 'D3',
    height: { min: 63, ideal: 65 },
    weight: { min: 130, ideal: 135 },
    homeToFirst: 3.1,
    throwVelocity: 55,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 12,
    obp: 0.360,
    fieldingPct: 0.970,
  },
  {
    position: 'THIRD_BASE',
    division: 'NAIA',
    height: { min: 63, ideal: 65 },
    weight: { min: 130, ideal: 135 },
    homeToFirst: 3.1,
    throwVelocity: 55,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 12,
    obp: 0.360,
    fieldingPct: 0.970,
  },
  {
    position: 'THIRD_BASE',
    division: 'JUCO',
    height: { min: 63, ideal: 65 },
    weight: { min: 130, ideal: 135 },
    homeToFirst: 3.2,
    throwVelocity: 55,
    battingAvg: 0.270,
    exitVelocity: 63,
    homeRuns: 1,
    rbis: 10,
    obp: 0.360,
    fieldingPct: 0.960,
  },

  // CENTER FIELD
  {
    position: 'CENTER_FIELD',
    division: 'D1_POWER5',
    height: { min: 64, ideal: 67 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 2.8,
    throwVelocity: 62,
    battingAvg: 0.330,
    exitVelocity: 70,
    homeRuns: 2,
    rbis: 15,
    stolenBases: 7,
    obp: 0.450,
    fieldingPct: 0.990,
  },
  {
    position: 'CENTER_FIELD',
    division: 'D1_MIDMAJOR',
    height: { min: 63, ideal: 66 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.85,
    throwVelocity: 60,
    battingAvg: 0.320,
    exitVelocity: 68,
    homeRuns: 1,
    rbis: 12,
    stolenBases: 5,
    obp: 0.420,
    fieldingPct: 0.985,
  },
  {
    position: 'CENTER_FIELD',
    division: 'D2',
    height: { min: 63, ideal: 65 },
    weight: { min: 125, ideal: 130 },
    homeToFirst: 2.9,
    throwVelocity: 60,
    battingAvg: 0.310,
    exitVelocity: 67,
    homeRuns: 1,
    rbis: 10,
    stolenBases: 5,
    obp: 0.410,
    fieldingPct: 0.980,
  },
  {
    position: 'CENTER_FIELD',
    division: 'D3',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.300,
    exitVelocity: 65,
    homeRuns: 0,
    rbis: 8,
    stolenBases: 3,
    obp: 0.390,
    fieldingPct: 0.970,
  },
  {
    position: 'CENTER_FIELD',
    division: 'NAIA',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.300,
    exitVelocity: 65,
    homeRuns: 0,
    rbis: 8,
    stolenBases: 3,
    obp: 0.390,
    fieldingPct: 0.970,
  },
  {
    position: 'CENTER_FIELD',
    division: 'JUCO',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.2,
    throwVelocity: 58,
    battingAvg: 0.280,
    exitVelocity: 63,
    homeRuns: 0,
    rbis: 8,
    stolenBases: 2,
    obp: 0.375,
    fieldingPct: 0.970,
  },

  // CORNER OUTFIELD (Left/Right Field)
  {
    position: 'LEFT_FIELD',
    division: 'D1_POWER5',
    height: { min: 64, ideal: 67 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 2.9,
    throwVelocity: 62,
    battingAvg: 0.310,
    exitVelocity: 70,
    homeRuns: 2,
    rbis: 18,
    stolenBases: 5,
    obp: 0.400,
    fieldingPct: 0.990,
  },
  {
    position: 'LEFT_FIELD',
    division: 'D1_MIDMAJOR',
    height: { min: 63, ideal: 66 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.95,
    throwVelocity: 60,
    battingAvg: 0.300,
    exitVelocity: 68,
    homeRuns: 1,
    rbis: 15,
    stolenBases: 4,
    obp: 0.380,
    fieldingPct: 0.985,
  },
  {
    position: 'LEFT_FIELD',
    division: 'D2',
    height: { min: 63, ideal: 65 },
    weight: { min: 125, ideal: 130 },
    homeToFirst: 3.0,
    throwVelocity: 60,
    battingAvg: 0.290,
    exitVelocity: 67,
    homeRuns: 1,
    rbis: 15,
    stolenBases: 3,
    obp: 0.370,
    fieldingPct: 0.980,
  },
  {
    position: 'LEFT_FIELD',
    division: 'D3',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 10,
    stolenBases: 2,
    obp: 0.350,
    fieldingPct: 0.970,
  },
  {
    position: 'LEFT_FIELD',
    division: 'NAIA',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 10,
    stolenBases: 2,
    obp: 0.350,
    fieldingPct: 0.970,
  },
  {
    position: 'LEFT_FIELD',
    division: 'JUCO',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.2,
    throwVelocity: 55,
    battingAvg: 0.270,
    exitVelocity: 63,
    homeRuns: 1,
    rbis: 8,
    stolenBases: 2,
    obp: 0.350,
    fieldingPct: 0.970,
  },

  // RIGHT FIELD (same as Left Field for now)
  {
    position: 'RIGHT_FIELD',
    division: 'D1_POWER5',
    height: { min: 64, ideal: 67 },
    weight: { min: 130, ideal: 140 },
    homeToFirst: 2.9,
    throwVelocity: 64,
    battingAvg: 0.310,
    exitVelocity: 70,
    homeRuns: 2,
    rbis: 18,
    stolenBases: 5,
    obp: 0.400,
    fieldingPct: 0.990,
  },
  {
    position: 'RIGHT_FIELD',
    division: 'D1_MIDMAJOR',
    height: { min: 63, ideal: 66 },
    weight: { min: 125, ideal: 135 },
    homeToFirst: 2.95,
    throwVelocity: 62,
    battingAvg: 0.300,
    exitVelocity: 68,
    homeRuns: 1,
    rbis: 15,
    stolenBases: 4,
    obp: 0.380,
    fieldingPct: 0.985,
  },
  {
    position: 'RIGHT_FIELD',
    division: 'D2',
    height: { min: 63, ideal: 65 },
    weight: { min: 125, ideal: 130 },
    homeToFirst: 3.0,
    throwVelocity: 60,
    battingAvg: 0.290,
    exitVelocity: 67,
    homeRuns: 1,
    rbis: 15,
    stolenBases: 3,
    obp: 0.370,
    fieldingPct: 0.980,
  },
  {
    position: 'RIGHT_FIELD',
    division: 'D3',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 10,
    stolenBases: 2,
    obp: 0.350,
    fieldingPct: 0.970,
  },
  {
    position: 'RIGHT_FIELD',
    division: 'NAIA',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.1,
    throwVelocity: 58,
    battingAvg: 0.280,
    exitVelocity: 65,
    homeRuns: 1,
    rbis: 10,
    stolenBases: 2,
    obp: 0.350,
    fieldingPct: 0.970,
  },
  {
    position: 'RIGHT_FIELD',
    division: 'JUCO',
    height: { min: 62, ideal: 64 },
    weight: { min: 120, ideal: 130 },
    homeToFirst: 3.2,
    throwVelocity: 55,
    battingAvg: 0.270,
    exitVelocity: 63,
    homeRuns: 1,
    rbis: 8,
    stolenBases: 2,
    obp: 0.350,
    fieldingPct: 0.970,
  },
];

// Slapper Benchmarks
export const slapperBenchmarks: SlapperBenchmark[] = [
  {
    level: 'Elite D1/Power 5',
    homeToFirstSoftSlap: 2.55,
    homeToFirstPowerSlap: 2.7,
  },
  {
    level: 'D1 Competitive',
    homeToFirstSoftSlap: 2.7,
    homeToFirstPowerSlap: 2.85,
  },
  {
    level: 'D2/High D3',
    homeToFirstSoftSlap: 2.85,
    homeToFirstPowerSlap: 2.95,
  },
  {
    level: 'College Minimum',
    homeToFirstSoftSlap: 2.9,
    homeToFirstPowerSlap: 3.1,
  },
];

// Exit Velocity Benchmarks by Division
export const exitVelocityBenchmarks: { division: Division; min: number; competitive: number; elite: number }[] = [
  { division: 'D1_POWER5', min: 70, competitive: 73, elite: 78 },
  { division: 'D1_MIDMAJOR', min: 68, competitive: 70, elite: 75 },
  { division: 'D2', min: 67, competitive: 69, elite: 72 },
  { division: 'D3', min: 65, competitive: 67, elite: 70 },
  { division: 'NAIA', min: 65, competitive: 67, elite: 70 },
  { division: 'JUCO', min: 63, competitive: 65, elite: 68 },
];

// Academic Requirements
export const academicRequirements: { division: Division; minGPA: number; coreCoursesRequired: number }[] = [
  { division: 'D1_POWER5', minGPA: 2.3, coreCoursesRequired: 16 },
  { division: 'D1_MIDMAJOR', minGPA: 2.3, coreCoursesRequired: 16 },
  { division: 'D2', minGPA: 2.2, coreCoursesRequired: 16 },
  { division: 'D3', minGPA: 2.0, coreCoursesRequired: 0 }, // Set by school
  { division: 'NAIA', minGPA: 2.0, coreCoursesRequired: 0 },
  { division: 'JUCO', minGPA: 2.0, coreCoursesRequired: 0 },
];

// Conference information by tier
export const conferencesByTier: { tier: string; conferences: string[] }[] = [
  {
    tier: 'Power 5',
    conferences: ['SEC', 'Big Ten', 'Big 12', 'ACC', 'Pac-12 (now realigned)'],
  },
  {
    tier: 'High D1',
    conferences: ['American Athletic Conference', 'Mountain West', 'Sun Belt', 'Conference USA'],
  },
  {
    tier: 'Mid D1',
    conferences: ['Colonial Athletic Association', 'Metro Atlantic Athletic Conference', 'Atlantic Sun', 'Big East', 'Patriot League'],
  },
  {
    tier: 'Top D2',
    conferences: ['Great Lakes Valley Conference', 'Lone Star Conference', 'Gulf South Conference', 'Peach Belt Conference', 'Rocky Mountain Athletic Conference'],
  },
  {
    tier: 'Top D3',
    conferences: ['NESCAC', 'UAA', 'SCIAC', 'Centennial Conference', 'NEWMAC'],
  },
  {
    tier: 'NAIA',
    conferences: ['GPAC', 'Heart of America', 'Sooner Athletic Conference', 'KCAC'],
  },
];

// Helper function to get benchmarks for a position and division
export function getBenchmark(position: Position, division: Division): PositionBenchmark | undefined {
  return positionBenchmarks.find(b => b.position === position && b.division === division);
}

// Helper function to get pitching benchmarks for a division
export function getPitchingBenchmark(division: Division): PitchingBenchmark | undefined {
  return pitchingBenchmarks.find(b => b.division === division);
}

// Helper function to get division info
export function getDivisionInfo(division: Division): DivisionInfo | undefined {
  return divisions.find(d => d.id === division);
}

// Position display names
export const positionNames: Record<Position, string> = {
  PITCHER: 'Pitcher',
  CATCHER: 'Catcher',
  FIRST_BASE: 'First Base',
  THIRD_BASE: 'Third Base',
  SHORTSTOP: 'Shortstop',
  SECOND_BASE: 'Second Base',
  CENTER_FIELD: 'Center Field',
  LEFT_FIELD: 'Left Field',
  RIGHT_FIELD: 'Right Field',
  UTILITY: 'Utility',
  SLAPPER: 'Slapper',
};
