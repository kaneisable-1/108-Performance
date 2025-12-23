import Link from "next/link";

export default function SoftballPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/softball-bg.jpg')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-offwhite/30 mb-6 block">
            sports_softball
          </span>
          <h1
            className="text-7xl md:text-9xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Softball
          </h1>
          <p className="text-xl text-offwhite/60 font-medium mb-8 max-w-xl mx-auto">
            Built for how women move.
          </p>
          <Link
            href="/108-experience"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Find Softball Training
          </Link>
        </div>
      </section>

      {/* We've Been There */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                We&apos;ve been there.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                Team USA. D1 Pac-12. Professional. Our staff played and coached
                at the top. We understand what it takes to compete at the highest
                levels—and how to get you there.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-[6px] text-xs font-semibold uppercase tracking-widest">
                  Team USA
                </span>
                <span className="bg-ink/10 text-ink px-4 py-2 rounded-[6px] text-xs font-semibold uppercase tracking-widest">
                  D1 Pac-12
                </span>
                <span className="bg-ink/10 text-ink px-4 py-2 rounded-[6px] text-xs font-semibold uppercase tracking-widest">
                  4x All-American
                </span>
              </div>
            </div>
            <div className="relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[150px] text-offwhite/10">
                  military_tech
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-offwhite/50 text-sm font-medium">
                  Jamie Bleecker - Softball Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same Philosophy */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Same philosophy. Softball-specific.
          </h2>
          <p className="text-xl text-ink/60 font-medium leading-relaxed max-w-2xl mx-auto">
            The 108 methodology applies to softball training. Human first.
            Athlete second. Player third. We build on your natural movement
            patterns and create cues that work for you.
          </p>
        </div>
      </section>

      {/* Pitching & Hitting */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pitching */}
            <div className="bg-white p-10 rounded-[10px] border border-line/10">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                sports_softball
              </span>
              <h3
                className="text-3xl uppercase text-ink mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Pitching
              </h3>
              <p className="text-ink/60 font-medium leading-relaxed mb-6">
                Speed. Spin. Location. We optimize your delivery for maximum
                power while protecting your arm for the long haul.
              </p>
              <ul className="space-y-3 text-ink/70 font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Windmill mechanics analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Velocity development
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Movement pitch design
                </li>
              </ul>
            </div>

            {/* Hitting */}
            <div className="bg-black text-white p-10 rounded-[10px] shadow-deep">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                sports_cricket
              </span>
              <h3
                className="text-3xl uppercase mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Hitting
              </h3>
              <p className="text-offwhite/60 font-medium leading-relaxed mb-6">
                Power. Contact. Timing. We build hitters who can adjust on the
                fly and deliver when it matters most.
              </p>
              <ul className="space-y-3 text-offwhite/70 font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Slap hitting development
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Power hitting mechanics
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Rise ball timing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Softball Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/108-experience"
              className="group bg-paper p-8 rounded-[10px] border border-line/10 hover:shadow-soft transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Start Here
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4 group-hover:text-navy transition-colors"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                108 Experience
              </h3>
              <p className="text-ink/60 font-medium mb-4">
                2-5 days. Your personal system.
              </p>
              <span className="text-ink/40 font-medium">Starting at $2,000</span>
            </Link>

            <Link
              href="/college-prep"
              className="group bg-paper p-8 rounded-[10px] border border-line/10 hover:shadow-soft transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Recruiting
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4 group-hover:text-navy transition-colors"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                College Prep
              </h3>
              <p className="text-ink/60 font-medium mb-4">
                Training plus recruiting guidance.
              </p>
              <span className="text-ink/40 font-medium">$1,250/month</span>
            </Link>

            <Link
              href="/virtual-experience"
              className="group bg-black text-white p-8 rounded-[10px] shadow-deep hover:bg-navy transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-offwhite/40 mb-4 block">
                Remote
              </span>
              <h3
                className="text-2xl uppercase mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Virtual Experience
              </h3>
              <p className="text-offwhite/60 font-medium mb-4">
                Your coach in your pocket.
              </p>
              <span className="text-offwhite/40 font-medium">$550/month</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2
            className="text-5xl md:text-7xl uppercase mb-6 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Ready to Train?
          </h2>
          <p className="text-xl text-offwhite/60 font-medium mb-10 max-w-2xl mx-auto">
            Start with the 108 Experience. Discover your system.
          </p>
          <Link
            href="/108-experience"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Book Your Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
