'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { PitcherDiagnosticResult, DivisionMatch, MetricScore } from '@/lib/diagnostic/matcher';
import { getDivisionInfo } from '@/data/softball-benchmarks';

interface DiagnosticResultsProps {
  result: PitcherDiagnosticResult;
  onStartOver: () => void;
}

function ScoreRing({ score, size = 120 }: { score: number; size?: number }) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = () => {
    if (score >= 80) return '#22c55e'; // green
    if (score >= 60) return '#3b82f6'; // blue
    if (score >= 40) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-black/10"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-black text-black"
        >
          {score}%
        </motion.span>
      </div>
    </div>
  );
}

function MatchStrengthBadge({ strength }: { strength: string }) {
  const config = {
    reach: { bg: 'bg-red-500/10', text: 'text-red-600', label: 'Reach' },
    target: { bg: 'bg-amber-500/10', text: 'text-amber-600', label: 'Target' },
    safety: { bg: 'bg-green-500/10', text: 'text-green-600', label: 'Safety' },
    likely: { bg: 'bg-blue-500/10', text: 'text-blue-600', label: 'Likely' },
  }[strength] || { bg: 'bg-black/5', text: 'text-black/60', label: strength };

  return (
    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}

function ImportanceBadge({ importance }: { importance: string }) {
  const config = {
    critical: { bg: 'bg-red-500', text: 'text-white' },
    high: { bg: 'bg-amber-500', text: 'text-white' },
    medium: { bg: 'bg-blue-500', text: 'text-white' },
    low: { bg: 'bg-gray-400', text: 'text-white' },
  }[importance] || { bg: 'bg-black/20', text: 'text-black' };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${config.bg} ${config.text}`}>
      {importance}
    </span>
  );
}

function MetricScoreRow({ metric }: { metric: MetricScore }) {
  const ratingConfig = {
    elite: { color: 'bg-green-500', label: 'Elite' },
    exceeds: { color: 'bg-blue-500', label: 'Exceeds' },
    meets: { color: 'bg-amber-500', label: 'Meets' },
    below: { color: 'bg-red-500', label: 'Below' },
  };

  const config = ratingConfig[metric.rating];

  return (
    <div className="flex items-center justify-between py-3 border-b border-black/5 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-semibold text-black">{metric.metric}</p>
          <ImportanceBadge importance={metric.importance} />
        </div>
        <p className="text-xs text-black/50">
          You: <span className="font-medium text-black/70">{metric.athleteValue}</span> | Benchmark: {metric.benchmarkValue}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-20 h-2 bg-black/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${config.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${metric.score}%` }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <span className={`text-xs font-bold uppercase w-16 text-right ${
          metric.rating === 'elite' ? 'text-green-600' :
          metric.rating === 'exceeds' ? 'text-blue-600' :
          metric.rating === 'meets' ? 'text-amber-600' :
          'text-red-600'
        }`}>
          {config.label}
        </span>
      </div>
    </div>
  );
}

function DivisionMatchCard({ match, isExpanded, onToggle }: {
  match: DivisionMatch;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const divisionInfo = getDivisionInfo(match.division);

  return (
    <motion.div
      layout
      className="bg-white border border-black/10 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-black/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <ScoreRing score={match.overallScore} size={60} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-black">{divisionInfo?.name || match.division}</h4>
            <p className="text-sm text-black/50">{divisionInfo?.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MatchStrengthBadge strength={match.matchStrength} />
          <svg
            className={`w-5 h-5 text-black/40 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-6 border-t border-black/10"
        >
          {/* Metric Scores */}
          <div className="mt-4">
            <h5 className="text-xs uppercase tracking-wider text-black/40 mb-3">
              Metric Breakdown
            </h5>
            <div className="bg-black/[0.02] p-4">
              {match.metricScores.map((metric, idx) => (
                <MetricScoreRow key={idx} metric={metric} />
              ))}
            </div>
          </div>

          {/* Strengths & Areas to Improve */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {match.strengths.length > 0 && (
              <div>
                <h5 className="text-xs uppercase tracking-wider text-green-600 mb-2">
                  Strengths
                </h5>
                <ul className="space-y-1">
                  {match.strengths.map((strength, idx) => (
                    <li key={idx} className="text-sm text-black/70 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {match.areasToImprove.length > 0 && (
              <div>
                <h5 className="text-xs uppercase tracking-wider text-amber-600 mb-2">
                  Areas to Develop
                </h5>
                <ul className="space-y-1">
                  {match.areasToImprove.map((area, idx) => (
                    <li key={idx} className="text-sm text-black/70 flex items-center gap-2">
                      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Recommended Conferences */}
          {match.recommendedConferences.length > 0 && (
            <div className="mt-6">
              <h5 className="text-xs uppercase tracking-wider text-black/40 mb-2">
                Top Conferences at This Level
              </h5>
              <div className="flex flex-wrap gap-2">
                {match.recommendedConferences.map((conf, idx) => (
                  <span key={idx} className="px-3 py-1 bg-black/5 text-xs text-black/70">
                    {conf}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export function DiagnosticResults({ result, onStartOver }: DiagnosticResultsProps) {
  const [expandedDivision, setExpandedDivision] = useState<string | null>(result.bestFitDivision);

  const bestMatch = result.divisionMatches.find(m => m.division === result.bestFitDivision);
  const bestDivisionInfo = getDivisionInfo(result.bestFitDivision);

  // Format movement pitches for display
  const pitchLabels: Record<string, string> = {
    riseball: 'Rise Ball',
    dropball: 'Drop Ball',
    curveball: 'Curveball',
    screwball: 'Screwball',
    dropcurve: 'Drop Curve',
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
          Your Pitching Profile
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
          {result.profile.firstName}, here's your match.
        </h1>
        <p className="text-lg text-black/60 max-w-xl mx-auto">
          Based on your {result.metrics.fastballVelocity} MPH fastball and pitching metrics.
        </p>
      </motion.div>

      {/* Best Fit Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-black text-white p-8 md:p-12 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <ScoreRing score={bestMatch?.overallScore || 0} size={140} />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
              Best Fit Division
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              {bestDivisionInfo?.name}
            </h2>
            <p className="text-white/60 mb-4">
              {bestDivisionInfo?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white/10 text-xs font-semibold uppercase tracking-wider">
                {bestMatch?.matchStrength} Match
              </span>
              <span className="px-4 py-2 bg-white/10 text-xs font-semibold uppercase tracking-wider">
                {result.metrics.fastballVelocity} MPH
              </span>
              <span className="px-4 py-2 bg-white/10 text-xs font-semibold uppercase tracking-wider">
                {result.metrics.movementPitches.length + 2} Pitches
              </span>
              {result.profile.throwingHand === 'left' && (
                <span className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-wider">
                  Left-Handed
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pitcher Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="grid md:grid-cols-3 gap-4 mb-8"
      >
        <div className="bg-black/[0.02] p-6">
          <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Fastball</p>
          <p className="text-3xl font-black text-black">{result.metrics.fastballVelocity} <span className="text-lg font-normal text-black/50">MPH</span></p>
        </div>
        <div className="bg-black/[0.02] p-6">
          <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Pitch Arsenal</p>
          <p className="text-3xl font-black text-black">{result.metrics.movementPitches.length + 2} <span className="text-lg font-normal text-black/50">pitches</span></p>
          <p className="text-xs text-black/50 mt-1">
            {result.metrics.movementPitches.map(p => pitchLabels[p] || p).join(', ') || 'No movement pitches'}
          </p>
        </div>
        <div className="bg-black/[0.02] p-6">
          <p className="text-xs uppercase tracking-wider text-black/40 mb-2">Changeup Diff</p>
          {result.metrics.changeupVelocity ? (
            <p className="text-3xl font-black text-black">
              {result.metrics.fastballVelocity - result.metrics.changeupVelocity} <span className="text-lg font-normal text-black/50">MPH</span>
            </p>
          ) : (
            <p className="text-lg text-black/50">Not provided</p>
          )}
        </div>
      </motion.div>

      {/* Overall Assessment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-black/[0.02] p-6 md:p-8 mb-8"
      >
        <h3 className="text-xs uppercase tracking-wider text-black/40 mb-3">
          Overall Assessment
        </h3>
        <p className="text-black/80 leading-relaxed">
          {result.overallAssessment}
        </p>
      </motion.div>

      {/* Division Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-4 mb-8"
      >
        {result.reachDivisions.length > 0 && (
          <div className="bg-red-500/5 p-4">
            <h4 className="text-xs uppercase tracking-wider text-red-600 mb-2">
              Reach Schools
            </h4>
            <ul className="space-y-1">
              {result.reachDivisions.map(div => (
                <li key={div} className="text-sm text-black/70">
                  {getDivisionInfo(div)?.shortName}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.targetDivisions.length > 0 && (
          <div className="bg-amber-500/5 p-4">
            <h4 className="text-xs uppercase tracking-wider text-amber-600 mb-2">
              Target Schools
            </h4>
            <ul className="space-y-1">
              {result.targetDivisions.map(div => (
                <li key={div} className="text-sm text-black/70">
                  {getDivisionInfo(div)?.shortName}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.safetyDivisions.length > 0 && (
          <div className="bg-green-500/5 p-4">
            <h4 className="text-xs uppercase tracking-wider text-green-600 mb-2">
              Safety Schools
            </h4>
            <ul className="space-y-1">
              {result.safetyDivisions.map(div => (
                <li key={div} className="text-sm text-black/70">
                  {getDivisionInfo(div)?.shortName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Division Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-black mb-4">
          Division-by-Division Analysis
        </h3>
        <div className="space-y-3">
          {result.divisionMatches.map(match => (
            <DivisionMatchCard
              key={match.division}
              match={match}
              isExpanded={expandedDivision === match.division}
              onToggle={() => setExpandedDivision(
                expandedDivision === match.division ? null : match.division
              )}
            />
          ))}
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-black/[0.02] p-6 md:p-8 mb-8"
      >
        <h3 className="text-xl font-bold text-black mb-4">
          Next Steps & Recommendations
        </h3>
        <ul className="space-y-3">
          {result.recruitingRecommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-black text-white text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <p className="text-black/70">{rec}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col md:flex-row gap-4 justify-center"
      >
        <button
          onClick={() => window.print()}
          className="px-8 py-4 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
        >
          Print Results
        </button>
        <button
          onClick={onStartOver}
          className="px-8 py-4 border-2 border-black text-black font-bold text-sm uppercase tracking-wider hover:bg-black/5 transition-colors"
        >
          Start Over
        </button>
      </motion.div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-black/40 mt-8">
        This assessment is based on general recruiting benchmarks and should be used as a guide only.
        Actual recruiting decisions depend on many factors including program needs, mechanics, game footage, and timing.
        Data sources: NCSA Sports, Go Big Recruiting, Rapsodo, Big Time Softball.
      </p>
    </div>
  );
}
