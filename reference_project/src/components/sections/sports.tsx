import Link from "next/link";

export function SportsSection() {
  return (
    <>
      {/* Baseball Section */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-6xl md:text-8xl uppercase text-ink mb-6 leading-[0.85]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Baseball
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                Pitching. Hitting. Movement.
              </p>
              <Link
                href="/baseball"
                className="inline-flex items-center gap-2 bg-navy hover:bg-ink text-offwhite text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-[10px] transition-all duration-300"
              >
                Explore Baseball{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div
                className="absolute inset-0 bg-cover bg-center img-warm-bw"
                style={{
                  backgroundImage: "url('/baseball-bg.jpg')",
                  opacity: 0.5,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-0 film-grain" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="material-symbols-outlined text-offwhite text-5xl">
                  sports_baseball
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Softball Section */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div
                className="absolute inset-0 bg-cover bg-center img-warm-bw"
                style={{
                  backgroundImage: "url('/softball-bg.jpg')",
                  opacity: 0.5,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-0 film-grain" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="material-symbols-outlined text-offwhite text-5xl">
                  sports_softball
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-6xl md:text-8xl uppercase text-ink mb-6 leading-[0.85]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Softball
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                Training built for how women move.
              </p>
              <Link
                href="/softball"
                className="inline-flex items-center gap-2 bg-navy hover:bg-ink text-offwhite text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-[10px] transition-all duration-300"
              >
                Explore Softball{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[50vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/levels-bg.jpg')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 film-grain" />
        <h3
          className="relative z-10 text-4xl md:text-6xl text-white uppercase text-center px-6"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Youth leagues to big leagues.
        </h3>
      </section>
    </>
  );
}
