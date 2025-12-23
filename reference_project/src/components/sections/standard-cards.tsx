import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "speed",
    headline: "Dramatic Results. Fast.",
    body: "Accelerate your development cycle. Our proprietary methods strip away inefficiencies to get you game-ready sooner.",
    variant: "light" as const,
  },
  {
    number: "02",
    icon: "ecg_heart",
    headline: "Play Without Pain.",
    body: "Longevity is the ultimate performance metric. We optimize your biomechanics to keep you healthy and dominating.",
    variant: "dark" as const,
  },
  {
    number: "03",
    icon: "monitoring",
    headline: "Data-Driven Approach.",
    body: "Every movement measured, every metric optimized. We turn data into actionable insights for your specific physiology.",
    variant: "light" as const,
  },
];

function LightCard({
  number,
  icon,
  headline,
  body,
}: {
  number: string;
  icon: string;
  headline: string;
  body: string;
}) {
  return (
    <div className="group bg-white p-10 rounded-[10px] border border-line/10 shadow-soft hover:shadow-deep hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-paper rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 bg-navy/10 flex items-center justify-center rounded-[6px] mb-8 group-hover:bg-navy transition-colors duration-300">
          <span className="material-symbols-outlined text-navy text-3xl group-hover:text-offwhite transition-colors">
            {icon}
          </span>
        </div>

        {/* Content */}
        <h4
          className="text-3xl uppercase text-ink mb-4"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          {headline.split(". ").map((part, i) => (
            <span key={i}>
              {part}
              {i < headline.split(". ").length - 1 && "."}
              <br />
            </span>
          ))}
        </h4>
        <p className="text-ink/50 leading-relaxed font-medium text-sm">
          {body}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-end border-t border-line/10 pt-6">
        <span className="text-xs font-bold text-ink/20 group-hover:text-navy transition-colors">
          {number}
        </span>
        <button className="text-ink group-hover:translate-x-2 transition-transform duration-300">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

function DarkCard({
  number,
  icon,
  headline,
  body,
}: {
  number: string;
  icon: string;
  headline: string;
  body: string;
}) {
  return (
    <div className="group bg-black text-white p-10 rounded-[10px] shadow-deep hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-[6px] mb-8 group-hover:bg-navy transition-colors duration-300">
          <span className="material-symbols-outlined text-offwhite text-3xl">
            {icon}
          </span>
        </div>

        {/* Content */}
        <h4
          className="text-3xl uppercase text-white mb-4"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          {headline.split(". ").map((part, i) => (
            <span key={i}>
              {part}
              {i < headline.split(". ").length - 1 && "."}
              <br />
            </span>
          ))}
        </h4>
        <p className="text-offwhite/50 leading-relaxed font-medium text-sm">
          {body}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-end border-t border-line pt-6">
        <span className="text-xs font-bold text-offwhite/30 group-hover:text-offwhite transition-colors">
          {number}
        </span>
        <button className="text-offwhite group-hover:translate-x-2 transition-transform duration-300">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

export function StandardCardsSection() {
  return (
    <section className="py-24 bg-paper border-t border-line/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3
              className="text-4xl md:text-5xl uppercase text-ink mb-2"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              The 108 Standard
            </h3>
            <p className="text-ink/50 text-lg font-medium tracking-wide">
              Precision training designed for the elite.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-ink font-semibold uppercase tracking-widest text-sm hover:text-navy transition-colors"
          >
            View All Services{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) =>
            card.variant === "dark" ? (
              <DarkCard key={index} {...card} />
            ) : (
              <LightCard key={index} {...card} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
