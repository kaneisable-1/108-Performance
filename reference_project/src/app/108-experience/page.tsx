import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-offwhite/50 text-xs font-semibold uppercase tracking-widest mb-6">
            Master Service Offerings Guide
          </p>
          <h1
            className="text-6xl md:text-8xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Discover before you fix.
          </h1>
          <p className="text-xl text-offwhite/60 font-medium mb-8 max-w-xl mx-auto">
            2-5 days. Your personal system. Starting at $2,000.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Book Your Experience
          </Link>
        </div>
      </section>

      {/* Not An Evaluation */}
      <section className="py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            This isn&apos;t an evaluation.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-ink/60 font-medium leading-relaxed">
            We learn who you are first—how you think, how you learn, how you coach yourself.
          </p>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
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
          Human. Athlete. Player.
        </h3>
      </section>

      {/* The Human */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Layer 1
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-6 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                First, the Human.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                How do you process information? What cues already work for you?
              </p>
            </div>
            <div className="bg-black text-white p-10 rounded-[10px] shadow-deep">
              <span className="material-symbols-outlined text-5xl text-offwhite/30 mb-6 block">
                psychology
              </span>
              <p className="text-offwhite/70 font-medium">
                Your nervous system is the foundation. Before we touch mechanics, we understand how you think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Athlete */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-line text-white p-10 rounded-[10px] shadow-deep">
              <span className="material-symbols-outlined text-5xl text-offwhite/30 mb-6 block">
                directions_run
              </span>
              <p className="text-offwhite/70 font-medium">
                We study your natural movement patterns—not a textbook model. We work with your physiology.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Layer 2
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-6 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Then, the Athlete.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                How does your body move? We study your natural patterns, not a model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Player */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Layer 3
              </span>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-6 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Finally, the Player.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                How do you pitch, swing, throw? Now we connect the dots.
              </p>
            </div>
            <div className="bg-navy text-white p-10 rounded-[10px] shadow-deep">
              <span className="material-symbols-outlined text-5xl text-offwhite/30 mb-6 block">
                sports_baseball
              </span>
              <p className="text-offwhite/70 font-medium">
                The skills that show up on game day are built on the layers beneath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave With A System */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Leave with a system.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-ink/60 font-medium leading-relaxed">
            Personal cues and prompts that help you find the right pattern on your own.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Single Skill */}
            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <h3
                className="text-2xl uppercase text-ink mb-6"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Single Skill
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between text-ink/70 font-medium">
                  <span>2 Days</span>
                  <span>$2,000</span>
                </li>
                <li className="flex justify-between text-ink font-semibold bg-gold/10 -mx-4 px-4 py-2 rounded-[6px]">
                  <span>3 Days <span className="text-gold text-xs">Recommended</span></span>
                  <span>$2,500</span>
                </li>
                <li className="flex justify-between text-ink/70 font-medium">
                  <span>4 Days</span>
                  <span>$3,000</span>
                </li>
                <li className="flex justify-between text-ink/70 font-medium">
                  <span>5 Days</span>
                  <span>$3,500</span>
                </li>
              </ul>
              <Link
                href="/apply"
                className="block text-center bg-ink hover:bg-navy text-offwhite text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-[10px] transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Two Skills */}
            <div className="bg-black text-white p-8 rounded-[10px] shadow-deep">
              <h3
                className="text-2xl uppercase mb-6"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Two Skills
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between text-offwhite/70 font-medium">
                  <span>2 Days</span>
                  <span>$2,500</span>
                </li>
                <li className="flex justify-between text-offwhite font-semibold bg-white/10 -mx-4 px-4 py-2 rounded-[6px]">
                  <span>3 Days <span className="text-gold text-xs">Recommended</span></span>
                  <span>$3,000</span>
                </li>
                <li className="flex justify-between text-offwhite/70 font-medium">
                  <span>4 Days</span>
                  <span>$3,500</span>
                </li>
                <li className="flex justify-between text-offwhite/70 font-medium">
                  <span>5 Days</span>
                  <span>$4,000</span>
                </li>
              </ul>
              <Link
                href="/apply"
                className="block text-center bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-[10px] transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2
            className="text-5xl md:text-7xl uppercase mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            This is the beginning.
          </h2>
          <Link
            href="/apply"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Book Your Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
