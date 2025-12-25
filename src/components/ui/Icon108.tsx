'use client';

import { cn } from '@/lib/utils';

export type Icon108Name =
  | 'spiral'
  | 'kinetic-chain'
  | 'golden-grid'
  | 'motion-arc'
  | 'diamond'
  | 'phi-circles'
  | 'rotation'
  | 'power-vector'
  | 'sequence-bars'
  | 'target'
  | 'wave'
  | 'mark-108';

interface Icon108Props {
  name: Icon108Name;
  className?: string;
  size?: number;
}

export function Icon108({ name, className, size = 24 }: Icon108Props) {
  const icons: Record<Icon108Name, React.ReactNode> = {
    // Spiral - represents journey, discovery, iterative growth
    'spiral': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 12c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3c-2.5 0-4.5-2-4.5-4.5S13 6 16 6s5 2.5 5 5.5-2.5 6.5-6.5 6.5S7 14.5 7 10.5 10 3 15 3" />
      </svg>
    ),

    // Kinetic Chain - connected dots showing movement/connection
    'kinetic-chain': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="19" cy="12" r="3" />
        <path d="M7 12h3M14.5 12h2" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    ),

    // Golden Grid - structured framework
    'golden-grid': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="14.5" x2="21" y2="14.5" />
        <line x1="14.5" y1="3" x2="14.5" y2="21" />
      </svg>
    ),

    // Motion Arc - movement, trajectory
    'motion-arc': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 18c0-7.732 6.268-14 14-14" />
        <path d="M18 4l-2 2 2 2" strokeLinejoin="round" />
      </svg>
    ),

    // Diamond - premium, value, core
    'diamond': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L22 12L12 22L2 12L12 2Z" />
      </svg>
    ),

    // Phi Circles - balance, golden ratio relationship
    'phi-circles': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="4" />
      </svg>
    ),

    // Rotation - transformation, change
    'rotation': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="12" x2="16" y2="12" />
        <line x1="4" y1="16" x2="20" y2="16" />
        <path d="M18 5l2 3-2 3" strokeLinejoin="round" />
      </svg>
    ),

    // Power Vector - direction, force, intent
    'power-vector': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="19" x2="19" y2="5" />
        <polyline points="19 12 19 5 12 5" />
      </svg>
    ),

    // Sequence Bars - progress, steps, levels
    'sequence-bars': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="14" width="4" height="6" />
        <rect x="10" y="10" width="4" height="10" />
        <rect x="16" y="4" width="4" height="16" />
      </svg>
    ),

    // Target - precision, goals, focus
    'target': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),

    // Wave - flow, rhythm, consistency
    'wave': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0" />
      </svg>
    ),

    // 108 Mark - brand identifier
    'mark-108': (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="system-ui">108</text>
      </svg>
    ),
  };

  return (
    <span
      className={cn('inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      {icons[name]}
    </span>
  );
}

// Icon with label for use in UI
interface Icon108WithLabelProps extends Icon108Props {
  label: string;
  labelPosition?: 'bottom' | 'right';
}

export function Icon108WithLabel({
  name,
  label,
  labelPosition = 'bottom',
  className,
  size = 24
}: Icon108WithLabelProps) {
  return (
    <div className={cn(
      'flex items-center',
      labelPosition === 'bottom' ? 'flex-col gap-2' : 'flex-row gap-3',
      className
    )}>
      <Icon108 name={name} size={size} />
      <span className="text-xs uppercase tracking-wider text-white/50">{label}</span>
    </div>
  );
}
