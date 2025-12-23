import Link from "next/link";

export function PrecisionStatementSection() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-fixed bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/precision-bg.jpg')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        {/* Film grain overlay */}
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl border-l-4 border-navy pl-8 md:pl-12">
          <h2
            className="text-white text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-8 drop-shadow-lg"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Precision
            <br />
            <span className="text-offwhite/50">Is Not An</span>
            <br />
            Accident
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link
              href="/the-method"
              className="bg-navy text-offwhite hover:bg-offwhite hover:text-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 rounded-[10px] inline-block text-center"
            >
              Explore The Science
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
