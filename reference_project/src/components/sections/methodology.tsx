import Link from "next/link";

export function MethodologySection() {
  return (
    <>
      {/* Understanding Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Understanding before instruction.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-ink/60 font-medium leading-relaxed measure">
            We learn how you think before we look at how you move. The best
            adjustment is the one you can make on your own.
          </p>
        </div>
      </section>

      {/* Human Athlete Player Section */}
      <section className="py-24 bg-paper border-t border-b border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Human.
                <br />
                Athlete.
                <br />
                Player.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                First your mind. Then your body. Finally your skills. Each layer
                informs the next.
              </p>
              <Link
                href="/the-method"
                className="inline-flex items-center gap-2 text-ink font-semibold uppercase tracking-widest text-sm hover:text-navy transition-colors"
              >
                Learn The Method{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="relative">
              {/* Stacked layers visualization */}
              <div className="space-y-4">
                <div className="bg-black text-white p-8 rounded-[10px] shadow-deep">
                  <span className="text-xs font-semibold uppercase tracking-widest text-offwhite/50">
                    Layer 1
                  </span>
                  <h4
                    className="text-2xl uppercase mt-2"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    The Human
                  </h4>
                  <p className="text-offwhite/50 text-sm mt-2">
                    How you process information. What cues resonate.
                  </p>
                </div>
                <div className="bg-line text-white p-8 rounded-[10px] ml-4 shadow-soft">
                  <span className="text-xs font-semibold uppercase tracking-widest text-offwhite/50">
                    Layer 2
                  </span>
                  <h4
                    className="text-2xl uppercase mt-2"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    The Athlete
                  </h4>
                  <p className="text-offwhite/50 text-sm mt-2">
                    Your natural movement patterns. Your physiology.
                  </p>
                </div>
                <div className="bg-navy text-white p-8 rounded-[10px] ml-8 shadow-soft">
                  <span className="text-xs font-semibold uppercase tracking-widest text-offwhite/60">
                    Layer 3
                  </span>
                  <h4
                    className="text-2xl uppercase mt-2"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    The Player
                  </h4>
                  <p className="text-offwhite/70 text-sm mt-2">
                    The skills that show up on game day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[50vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/cues-bg.jpg')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 film-grain" />
        <h3
          className="relative z-10 text-4xl md:text-6xl text-white uppercase text-center px-6"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Cues that work on game day.
        </h3>
      </section>

      {/* Your System Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Your system. Your cues.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-ink/60 font-medium leading-relaxed mb-8 measure">
            Personalized prompts that help you find the right pattern when it
            matters most.
          </p>
          <Link
            href="/108-experience"
            className="inline-flex items-center gap-2 text-ink font-semibold uppercase tracking-widest text-sm hover:text-navy transition-colors"
          >
            Explore Training{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
