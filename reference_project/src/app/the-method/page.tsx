import Link from "next/link";

export default function TheMethodPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/cues-bg.jpg')",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-8xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Human. Athlete. Player.
          </h1>
          <p className="text-xl text-offwhite/60 font-medium mb-8 max-w-xl mx-auto">
            The 108 methodology explained.
          </p>
          <Link
            href="#the-human"
            className="inline-flex items-center gap-2 text-offwhite font-semibold uppercase tracking-widest text-sm hover:text-gold transition-colors"
          >
            Explore{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_downward
            </span>
          </Link>
        </div>
      </section>

      {/* The Human */}
      <section id="the-human" className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">
                Layer 1
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                First, the Human.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                Before we touch mechanics, we understand how you think. How you
                process information. What cues resonate. Your nervous system is
                the foundation.
              </p>
            </div>
            <div className="relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-ink to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-offwhite/10">
                  psychology
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-offwhite/50 text-sm font-medium uppercase tracking-widest">
                  Mind First
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break 1 */}
      <section className="relative h-[30vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <p
          className="relative z-10 text-2xl md:text-4xl text-offwhite/30 uppercase text-center px-6 tracking-widest"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          How you think shapes how you move
        </p>
      </section>

      {/* The Athlete */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-line rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-line to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-offwhite/10">
                  directions_run
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-offwhite/50 text-sm font-medium uppercase tracking-widest">
                  Body Second
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">
                Layer 2
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Then, the Athlete.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                Your body is unique. We study your natural movement patterns—not
                a textbook model. We work with your physiology, not against it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break 2 */}
      <section className="relative h-[30vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <p
          className="relative z-10 text-2xl md:text-4xl text-offwhite/30 uppercase text-center px-6 tracking-widest"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Your patterns. Not a model.
        </p>
      </section>

      {/* The Player */}
      <section className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">
                Layer 3
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Finally, the Player.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                Now we connect the dots. Hitting. Pitching. Throwing. The skills
                that show up on game day are built on the layers beneath.
              </p>
            </div>
            <div className="relative h-[400px] bg-navy rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-offwhite/10">
                  sports_baseball
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-offwhite/50 text-sm font-medium uppercase tracking-widest">
                  Skills Last
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Each layer informs the next.
          </h2>
          <p className="text-xl text-ink/60 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            First your mind. Then your body. Finally your skills. This is why
            108 athletes make adjustments that stick—on their own, under
            pressure, when it matters most.
          </p>

          {/* Layer visualization */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-black text-white px-8 py-4 rounded-[10px]">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Human
              </span>
            </div>
            <span className="material-symbols-outlined text-ink/30 rotate-90 md:rotate-0">
              arrow_right_alt
            </span>
            <div className="bg-line text-white px-8 py-4 rounded-[10px]">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Athlete
              </span>
            </div>
            <span className="material-symbols-outlined text-ink/30 rotate-90 md:rotate-0">
              arrow_right_alt
            </span>
            <div className="bg-navy text-white px-8 py-4 rounded-[10px]">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Player
              </span>
            </div>
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
            Ready?
          </h2>
          <p className="text-xl text-offwhite/60 font-medium mb-10 max-w-2xl mx-auto">
            Experience the methodology firsthand. Start with the 108 Experience.
          </p>
          <Link
            href="/108-experience"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Book Your 108 Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
