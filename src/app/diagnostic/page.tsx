import { Metadata } from 'next';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { AthleteDiagnostic } from '@/components/diagnostic/AthleteDiagnostic';

export const metadata: Metadata = {
  title: 'Pitcher Recruiting Diagnostic | 108 Performance',
  description: 'Find your best-fit college softball program as a pitcher. Get matched with D1, D2, D3, NAIA, or JUCO schools based on your velocity, spin rate, and pitch arsenal.',
  keywords: [
    'softball pitcher recruiting',
    'college softball pitching',
    'pitching velocity benchmarks',
    'softball spin rate',
    'D1 softball pitcher',
    'D2 softball pitcher',
    'softball recruiting standards',
    'college softball pitching benchmarks',
    'fastball velocity',
    'changeup differential',
  ],
  openGraph: {
    title: 'Pitcher Recruiting Diagnostic | 108 Performance',
    description: 'Find your best-fit college softball program based on your pitching metrics.',
    type: 'website',
  },
};

export default function DiagnosticPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-24 pb-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Pitcher Diagnostic
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                Find your level.
              </h1>
              <p className="text-lg text-white/60 mb-8">
                Input your pitching metrics. Get matched with D1, D2, D3, NAIA, or JUCO programs
                based on velocity, pitch arsenal, and spin rate.
              </p>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wider text-white/50">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Assessment
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  NCAA Benchmarks
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pitchers Only
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Form Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AthleteDiagnostic />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-black/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-black text-black mb-6">
                About This Diagnostic
              </h2>
              <div className="space-y-4 text-black/60">
                <p>
                  This pitcher diagnostic uses recruiting benchmarks compiled from leading sources including
                  NCSA Sports, Go Big Recruiting, Rapsodo, Big Time Softball, and D1Softball to help you
                  understand where your pitching metrics stack up against college recruiting standards.
                </p>
                <p>
                  We focus on transferable metrics that matter at every level: fastball velocity,
                  changeup differential, pitch arsenal depth, and spin rate—broken down by division
                  level (D1 Power 5, D1 Mid-Major, D2, D3, NAIA, JUCO). Game statistics like ERA
                  are intentionally excluded since they don&apos;t translate across competition levels.
                </p>
                <p>
                  Remember: metrics are just one piece of the puzzle. College coaches also evaluate
                  intangibles like work ethic, coachability, leadership, and academic fit. Use this
                  as a starting point, not the final word on your recruiting journey.
                </p>
              </div>

              {/* Benchmark Sources */}
              <div className="mt-8 pt-8 border-t border-black/10">
                <h3 className="text-xs uppercase tracking-wider text-black/40 mb-4">
                  Data Sources
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    'NCSA Sports',
                    'Go Big Recruiting',
                    'Rapsodo',
                    'Big Time Softball',
                    'D1Softball',
                    'NCAA.com',
                  ].map(source => (
                    <span key={source} className="px-3 py-1 bg-black/5 text-xs text-black/60">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
