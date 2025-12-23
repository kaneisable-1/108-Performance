export function LabTestedSection() {
  return (
    <section className="relative py-32 bg-paper overflow-hidden">
      {/* Ghost Text Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span
          className="text-[15vw] leading-none text-ink uppercase"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Performance
        </span>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-[10px] bg-navy text-offwhite shadow-deep">
          <span className="material-symbols-outlined text-3xl">verified</span>
        </div>

        {/* Headline */}
        <h2
          className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Lab Tested.
          <br />
          <span className="text-ink/40">Coach Approved.</span>
        </h2>

        {/* Body */}
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-ink/60 font-medium leading-relaxed measure">
          We don't guess. We measure. Our methodology combines cutting-edge
          biomechanical analysis with battle-tested coaching strategies.
        </p>
      </div>
    </section>
  );
}
