import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 bg-black text-white text-center relative overflow-hidden">
      {/* Ghost Text Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] whitespace-nowrap text-white"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          108 PERFORMANCE
        </div>
      </div>

      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain" />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2
          className="text-6xl md:text-8xl uppercase mb-6 leading-none"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Unlock Your
          <br />
          <span className="text-offwhite/50">Potential</span>
        </h2>
        <p className="text-xl text-offwhite/60 mb-12 font-medium max-w-2xl mx-auto measure">
          Join the elite athletes redefining their limits at 108 Performance.
          The future of your game starts now.
        </p>
        <Link
          href="/108-experience"
          className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-lg font-semibold uppercase tracking-widest px-12 py-5 rounded-[10px] transition-all duration-300 shadow-deep"
        >
          Experience 108
        </Link>
      </div>
    </section>
  );
}
