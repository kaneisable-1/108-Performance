import Link from "next/link";

export default function BaseballPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/baseball-bg.jpg')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-offwhite/30 mb-6 block">
            sports_baseball
          </span>
          <h1
            className="text-7xl md:text-9xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Baseball
          </h1>
          <p className="text-xl text-offwhite/60 font-medium mb-8 max-w-xl mx-auto">
            Pitching. Hitting. Movement.
          </p>
          <Link
            href="/108-experience"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Start Training
          </Link>
        </div>
      </section>

      {/* Pitching */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">
                Throwing Development
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Pitching
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                Velocity. Command. Health. Our throwing program optimizes your
                delivery for maximum efficiency and longevity. We don&apos;t
                force you into a cookie-cutter model—we build on what your body
                already does well.
              </p>
              <ul className="space-y-3 text-ink/70 font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Biomechanical analysis
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
                  Arm care programming
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Pitch design
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[150px] text-offwhite/10">
                  sports_baseball
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
            </div>
          </div>
        </div>
      </section>

      {/* Hitting */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-ink to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[150px] text-offwhite/10">
                  sports_cricket
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">
                Swing Development
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Hitting
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                Power. Consistency. Adjustability. We build hitters who can make
                in-game adjustments—not just look good in the cage. Your swing
                should work when it matters most.
              </p>
              <ul className="space-y-3 text-ink/70 font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Swing mechanics analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Bat path optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Timing and rhythm work
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Live at-bat training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/levels-bg.jpg')",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 film-grain" />
        <h3
          className="relative z-10 text-4xl md:text-6xl text-white uppercase text-center px-6"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Youth leagues to big leagues.
        </h3>
      </section>

      {/* Programs */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Baseball Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/108-experience"
              className="group bg-white p-8 rounded-[10px] border border-line/10 hover:shadow-soft transition-all duration-300"
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
              href="/tri-star"
              className="group bg-white p-8 rounded-[10px] border border-line/10 hover:shadow-soft transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Local Training
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4 group-hover:text-navy transition-colors"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Tri Star
              </h3>
              <p className="text-ink/60 font-medium mb-4">
                Unlimited training. Knoxville.
              </p>
              <span className="text-ink/40 font-medium">$499/month</span>
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
