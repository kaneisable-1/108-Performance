'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Division } from '@/data/softball-benchmarks';
import { divisions } from '@/data/softball-benchmarks';
import { calculatePitcherMatch } from '@/lib/diagnostic/matcher';
import { DiagnosticResults } from './DiagnosticResults';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const GRAD_YEARS = [2025, 2026, 2027, 2028, 2029, 2030];

const MOVEMENT_PITCHES = [
  { value: 'riseball', label: 'Rise Ball' },
  { value: 'dropball', label: 'Drop Ball' },
  { value: 'curveball', label: 'Curveball' },
  { value: 'screwball', label: 'Screwball' },
  { value: 'dropcurve', label: 'Drop Curve' },
];

export interface PitcherProfile {
  firstName: string;
  lastName: string;
  email: string;
  graduationYear: number;
  state: string;
  heightFeet: number;
  heightInches: number;
  weight: number;
  gpa: number;
  travelTeam?: string;
  travelOrganization?: string;
  throwingHand: 'right' | 'left';
}

export interface PitcherMetrics {
  fastballVelocity: number;
  changeupVelocity?: number;
  movementPitches: string[];
  spinRate?: number;
  era?: number;
  strikeoutsPerGame?: number;
  walksPerGame?: number;
  inningsPitched?: number;
}

export interface PitcherDiagnosticData {
  profile: PitcherProfile;
  metrics: PitcherMetrics;
  preferredDivisions: Division[];
}

interface StepProps {
  data: Partial<PitcherDiagnosticData>;
  updateProfile: (updates: Partial<PitcherProfile>) => void;
  updateMetrics: (updates: Partial<PitcherMetrics>) => void;
  updatePreferences: (divisions: Division[]) => void;
}

// Step 1: Basic Info
function BasicInfoStep({ data, updateProfile }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={data.profile?.firstName || ''}
            onChange={(e) => updateProfile({ firstName: e.target.value })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={data.profile?.lastName || ''}
            onChange={(e) => updateProfile({ lastName: e.target.value })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
            placeholder="Enter last name"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Email *
        </label>
        <input
          type="email"
          value={data.profile?.email || ''}
          onChange={(e) => updateProfile({ email: e.target.value })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="your@email.com"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
            Graduation Year *
          </label>
          <select
            value={data.profile?.graduationYear || ''}
            onChange={(e) => updateProfile({ graduationYear: parseInt(e.target.value) })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          >
            <option value="">Select year</option>
            {GRAD_YEARS.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
            State *
          </label>
          <select
            value={data.profile?.state || ''}
            onChange={(e) => updateProfile({ state: e.target.value })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          >
            <option value="">Select state</option>
            {US_STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Throwing Hand *
        </label>
        <div className="flex gap-4">
          <label className={`flex-1 p-4 cursor-pointer transition-all text-center ${
            data.profile?.throwingHand === 'right'
              ? 'bg-black text-white'
              : 'bg-black/5 text-black hover:bg-black/10'
          }`}>
            <input
              type="radio"
              name="throwingHand"
              value="right"
              checked={data.profile?.throwingHand === 'right'}
              onChange={() => updateProfile({ throwingHand: 'right' })}
              className="sr-only"
            />
            <span className="font-semibold">Right-Handed</span>
          </label>
          <label className={`flex-1 p-4 cursor-pointer transition-all text-center ${
            data.profile?.throwingHand === 'left'
              ? 'bg-black text-white'
              : 'bg-black/5 text-black hover:bg-black/10'
          }`}>
            <input
              type="radio"
              name="throwingHand"
              value="left"
              checked={data.profile?.throwingHand === 'left'}
              onChange={() => updateProfile({ throwingHand: 'left' })}
              className="sr-only"
            />
            <span className="font-semibold">Left-Handed</span>
          </label>
        </div>
      </div>
    </div>
  );
}

// Step 2: Physical & Academics
function PhysicalAcademicsStep({ data, updateProfile }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Height *
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              min="4"
              max="7"
              value={data.profile?.heightFeet || ''}
              onChange={(e) => updateProfile({ heightFeet: parseInt(e.target.value) })}
              className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
              placeholder="Feet"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40">ft</span>
          </div>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="11"
              value={data.profile?.heightInches || ''}
              onChange={(e) => updateProfile({ heightInches: parseInt(e.target.value) })}
              className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
              placeholder="Inches"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40">in</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Weight (lbs) *
        </label>
        <div className="relative">
          <input
            type="number"
            min="80"
            max="300"
            value={data.profile?.weight || ''}
            onChange={(e) => updateProfile({ weight: parseInt(e.target.value) })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
            placeholder="Enter weight"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40">lbs</span>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Current GPA *
        </label>
        <input
          type="number"
          min="0"
          max="4.0"
          step="0.01"
          value={data.profile?.gpa || ''}
          onChange={(e) => updateProfile({ gpa: parseFloat(e.target.value) })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="e.g., 3.50"
        />
        <p className="text-xs text-black/40 mt-1">
          NCAA D1 requires minimum 2.3 GPA; 3.0+ preferred for most programs
        </p>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Travel Team (optional)
        </label>
        <input
          type="text"
          value={data.profile?.travelTeam || ''}
          onChange={(e) => updateProfile({ travelTeam: e.target.value })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="e.g., Carolina Elite 18U"
        />
      </div>
    </div>
  );
}

// Step 3: Velocity
function VelocityStep({ data, updateMetrics }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-black/[0.02] p-6 mb-6">
        <h3 className="font-bold text-black mb-2">Velocity is the #1 Metric</h3>
        <p className="text-sm text-black/60">
          College coaches look at fastball velocity first. Enter your <strong>verified</strong> speeds
          from a radar gun at a showcase, camp, or game.
        </p>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Fastball Velocity (MPH) *
        </label>
        <input
          type="number"
          min="40"
          max="80"
          value={data.metrics?.fastballVelocity || ''}
          onChange={(e) => updateMetrics({ fastballVelocity: parseInt(e.target.value) })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black text-lg"
          placeholder="e.g., 62"
        />
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
          <div className="bg-black/5 p-3">
            <p className="font-bold text-black">D1 Power 5</p>
            <p className="text-black/50">63+ MPH</p>
          </div>
          <div className="bg-black/5 p-3">
            <p className="font-bold text-black">D1 Mid-Major</p>
            <p className="text-black/50">60+ MPH</p>
          </div>
          <div className="bg-black/5 p-3">
            <p className="font-bold text-black">D2</p>
            <p className="text-black/50">58+ MPH</p>
          </div>
          <div className="bg-black/5 p-3">
            <p className="font-bold text-black">D3</p>
            <p className="text-black/50">55+ MPH</p>
          </div>
          <div className="bg-black/5 p-3">
            <p className="font-bold text-black">NAIA</p>
            <p className="text-black/50">55+ MPH</p>
          </div>
          <div className="bg-black/5 p-3">
            <p className="font-bold text-black">JUCO</p>
            <p className="text-black/50">54+ MPH</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Changeup Velocity (MPH)
        </label>
        <input
          type="number"
          min="30"
          max="70"
          value={data.metrics?.changeupVelocity || ''}
          onChange={(e) => updateMetrics({ changeupVelocity: parseInt(e.target.value) || undefined })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="e.g., 48"
        />
        <p className="text-xs text-black/40 mt-1">
          Ideal changeup is 10-20 MPH slower than fastball
        </p>
      </div>
    </div>
  );
}

// Step 4: Pitch Arsenal
function PitchArsenalStep({ data, updateMetrics }: StepProps) {
  const selectedPitches = data.metrics?.movementPitches || [];

  const togglePitch = (pitch: string) => {
    const current = selectedPitches;
    const updated = current.includes(pitch)
      ? current.filter(p => p !== pitch)
      : [...current, pitch];
    updateMetrics({ movementPitches: updated });
  };

  return (
    <div className="space-y-6">
      <div className="bg-black/[0.02] p-6 mb-6">
        <h3 className="font-bold text-black mb-2">Movement Pitches Matter</h3>
        <p className="text-sm text-black/60">
          D1 coaches want pitchers with 4+ pitches (fastball, changeup, and 2+ movement pitches).
          Select all movement pitches you can throw for strikes.
        </p>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-3">
          Select Your Movement Pitches *
        </label>
        <div className="space-y-2">
          {MOVEMENT_PITCHES.map(pitch => (
            <label
              key={pitch.value}
              className={`flex items-center justify-between p-4 cursor-pointer transition-all ${
                selectedPitches.includes(pitch.value)
                  ? 'bg-black text-white'
                  : 'bg-black/5 text-black hover:bg-black/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedPitches.includes(pitch.value)}
                  onChange={() => togglePitch(pitch.value)}
                  className="sr-only"
                />
                <span className="font-semibold">{pitch.label}</span>
              </div>
              {selectedPitches.includes(pitch.value) && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </label>
          ))}
        </div>
        <p className="text-xs text-black/40 mt-3">
          Selected: {selectedPitches.length} movement pitch{selectedPitches.length !== 1 ? 'es' : ''} + fastball + changeup = {selectedPitches.length + 2} total pitches
        </p>
      </div>

      <div className="bg-black/5 p-4 mt-6">
        <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Pitch Arsenal Requirements</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-black">D1 Power 5</p>
            <p className="text-black/50">4+ pitches required</p>
          </div>
          <div>
            <p className="font-semibold text-black">D1 Mid-Major</p>
            <p className="text-black/50">4+ pitches preferred</p>
          </div>
          <div>
            <p className="font-semibold text-black">D2 / D3</p>
            <p className="text-black/50">3 pitches minimum</p>
          </div>
          <div>
            <p className="font-semibold text-black">JUCO</p>
            <p className="text-black/50">2 pitches developing 3rd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 5: Advanced Metrics (Optional)
function AdvancedMetricsStep({ data, updateMetrics }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-black/[0.02] p-6 mb-6">
        <h3 className="font-bold text-black mb-2">Advanced Metrics (Optional)</h3>
        <p className="text-sm text-black/60">
          If you have Rapsodo data or game statistics, enter them here for a more accurate assessment.
          Skip any fields you don't know.
        </p>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Spin Rate (RPM)
        </label>
        <input
          type="number"
          min="500"
          max="2000"
          value={data.metrics?.spinRate || ''}
          onChange={(e) => updateMetrics({ spinRate: parseInt(e.target.value) || undefined })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="From Rapsodo (if known)"
        />
        <p className="text-xs text-black/40 mt-1">
          College average: 1000-1200 RPM | Elite: 1300+ RPM
        </p>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          ERA (Earned Run Average)
        </label>
        <input
          type="number"
          min="0"
          max="10"
          step="0.01"
          value={data.metrics?.era || ''}
          onChange={(e) => updateMetrics({ era: parseFloat(e.target.value) || undefined })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="e.g., 1.85"
        />
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
          <div className="bg-black/5 p-2 text-center">
            <p className="font-semibold">D1</p>
            <p className="text-black/50">&lt; 2.50</p>
          </div>
          <div className="bg-black/5 p-2 text-center">
            <p className="font-semibold">D2</p>
            <p className="text-black/50">&lt; 3.00</p>
          </div>
          <div className="bg-black/5 p-2 text-center">
            <p className="font-semibold">D3/NAIA</p>
            <p className="text-black/50">&lt; 3.50</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
            Strikeouts/Game
          </label>
          <input
            type="number"
            min="0"
            max="25"
            step="0.1"
            value={data.metrics?.strikeoutsPerGame || ''}
            onChange={(e) => updateMetrics({ strikeoutsPerGame: parseFloat(e.target.value) || undefined })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
            placeholder="e.g., 8.5"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
            Walks/Game
          </label>
          <input
            type="number"
            min="0"
            max="15"
            step="0.1"
            value={data.metrics?.walksPerGame || ''}
            onChange={(e) => updateMetrics({ walksPerGame: parseFloat(e.target.value) || undefined })}
            className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
            placeholder="e.g., 2.0"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-2">
          Innings Pitched (Season)
        </label>
        <input
          type="number"
          min="0"
          max="300"
          value={data.metrics?.inningsPitched || ''}
          onChange={(e) => updateMetrics({ inningsPitched: parseInt(e.target.value) || undefined })}
          className="w-full px-4 py-3 bg-black/5 border-0 focus:ring-2 focus:ring-black/20 text-black"
          placeholder="e.g., 85"
        />
      </div>
    </div>
  );
}

// Step 6: Preferences
function PreferencesStep({ data, updatePreferences }: StepProps) {
  const handleDivisionToggle = (division: Division) => {
    const current = data.preferredDivisions || [];
    const updated = current.includes(division)
      ? current.filter(d => d !== division)
      : [...current, division];
    updatePreferences(updated);
  };

  return (
    <div className="space-y-6">
      <div className="bg-black/[0.02] p-6 mb-6">
        <h3 className="font-bold text-black mb-2">Division Preferences</h3>
        <p className="text-sm text-black/60">
          Select the division levels you're interested in. We'll show you how you stack up against each.
        </p>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-black/50 mb-3">
          Select Divisions (optional)
        </label>
        <div className="grid grid-cols-2 gap-3">
          {divisions.map(div => (
            <label
              key={div.id}
              className={`p-4 cursor-pointer transition-all ${
                data.preferredDivisions?.includes(div.id)
                  ? 'bg-black text-white'
                  : 'bg-black/5 text-black hover:bg-black/10'
              }`}
            >
              <input
                type="checkbox"
                checked={data.preferredDivisions?.includes(div.id) || false}
                onChange={() => handleDivisionToggle(div.id)}
                className="sr-only"
              />
              <div>
                <p className="font-semibold text-sm">{div.shortName}</p>
                <p className={`text-xs mt-1 ${
                  data.preferredDivisions?.includes(div.id)
                    ? 'text-white/60'
                    : 'text-black/50'
                }`}>
                  {div.scholarshipInfo.split(',')[0]}
                </p>
              </div>
            </label>
          ))}
        </div>
        <p className="text-xs text-black/40 mt-3">
          Leave blank to see results for all divisions
        </p>
      </div>
    </div>
  );
}

// Main Component
export function AthleteDiagnostic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Partial<PitcherDiagnosticData>>({
    profile: {
      firstName: '',
      lastName: '',
      email: '',
      graduationYear: 2026,
      state: '',
      heightFeet: 5,
      heightInches: 6,
      weight: 140,
      gpa: 3.5,
      throwingHand: 'right',
    },
    metrics: {
      fastballVelocity: 0,
      movementPitches: [],
    },
    preferredDivisions: [],
  });
  const [result, setResult] = useState<ReturnType<typeof calculatePitcherMatch> | null>(null);

  const steps = [
    { id: 'basic-info', title: 'Basic Info', description: 'Tell us about yourself' },
    { id: 'physical', title: 'Physical & Academics', description: 'Height, weight, and GPA' },
    { id: 'velocity', title: 'Velocity', description: 'Your throwing speed' },
    { id: 'arsenal', title: 'Pitch Arsenal', description: 'Your movement pitches' },
    { id: 'advanced', title: 'Advanced Metrics', description: 'Optional: Spin rate, ERA' },
    { id: 'preferences', title: 'Preferences', description: 'Division goals' },
  ];

  const updateProfile = useCallback((updates: Partial<PitcherProfile>) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updates } as PitcherProfile,
    }));
  }, []);

  const updateMetrics = useCallback((updates: Partial<PitcherMetrics>) => {
    setData(prev => ({
      ...prev,
      metrics: { ...prev.metrics, ...updates } as PitcherMetrics,
    }));
  }, []);

  const updatePreferences = useCallback((divisions: Division[]) => {
    setData(prev => ({
      ...prev,
      preferredDivisions: divisions,
    }));
  }, []);

  const stepProps: StepProps = {
    data,
    updateProfile,
    updateMetrics,
    updatePreferences,
  };

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case 'basic-info':
        return <BasicInfoStep {...stepProps} />;
      case 'physical':
        return <PhysicalAcademicsStep {...stepProps} />;
      case 'velocity':
        return <VelocityStep {...stepProps} />;
      case 'arsenal':
        return <PitchArsenalStep {...stepProps} />;
      case 'advanced':
        return <AdvancedMetricsStep {...stepProps} />;
      case 'preferences':
        return <PreferencesStep {...stepProps} />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate results
      const diagnosticResult = calculatePitcherMatch(data as PitcherDiagnosticData);
      setResult(diagnosticResult);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Show results if available
  if (result) {
    return <DiagnosticResults result={result} onStartOver={() => {
      setResult(null);
      setCurrentStep(0);
      setData({
        profile: {
          firstName: '',
          lastName: '',
          email: '',
          graduationYear: 2026,
          state: '',
          heightFeet: 5,
          heightInches: 6,
          weight: 140,
          gpa: 3.5,
          throwingHand: 'right',
        },
        metrics: {
          fastballVelocity: 0,
          movementPitches: [],
        },
        preferredDivisions: [],
      });
    }} />;
  }

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs uppercase tracking-wider text-black/50">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-xs uppercase tracking-wider text-black/50">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="h-1 bg-black/10 overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-black mb-2">
          {currentStepData.title}
        </h2>
        <p className="text-black/60">
          {currentStepData.description}
        </p>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-10 pt-6 border-t border-black/10">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
            currentStep === 0
              ? 'text-black/30 cursor-not-allowed'
              : 'text-black hover:bg-black/5'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-black text-white text-sm font-semibold uppercase tracking-wider hover:bg-black/80 transition-all"
        >
          {currentStep === steps.length - 1 ? 'Get Results' : 'Next'}
        </button>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentStep
                ? 'bg-black w-6'
                : index < currentStep
                ? 'bg-black/60'
                : 'bg-black/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
