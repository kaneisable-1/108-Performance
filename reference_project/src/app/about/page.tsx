import Link from "next/link";

const staff = [
  {
    name: "Eugene Bleecker",
    title: "Founder & CEO",
    bio: "The architect of the 108 methodology. Decades studying movement, developing players, and building a system that produces results no one else can replicate.",
    icon: "architecture",
  },
  {
    name: "Will Marshall",
    title: "COO & Throwing Director",
    bio: "Oversees throwing development and facility operations. His approach to arm health and velocity has helped pitchers at every level add velocity while staying healthy.",
    icon: "sports_baseball",
  },
  {
    name: "Nate Headley",
    title: "Hitting Coordinator",
    bio: "Leads the hitting program. Teaches coaches and athletes how to see swing flaws, communicate adjustments, and build hitters who can make in-game changes.",
    icon: "sports_cricket",
  },
  {
    name: "Ryan McMillan (Mac)",
    title: "Program Designer",
    bio: "Builds the training programs that power 108 athletes. From daily sessions to long-term periodization.",
    icon: "calendar_month",
  },
  {
    name: "Tyler Shorter",
    title: "Director of Performance",
    bio: "Oversees strength, conditioning, and recovery. The bridge between the weight room and the field.",
    icon: "fitness_center",
  },
  {
    name: "Jamie Bleecker",
    title: "Softball Director",
    bio: "Team USA. D1 Pac-12 All-American. 4-time All-American pitcher at Fresno State. Brings elite-level expertise to softball training.",
    icon: "sports_softball",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/levels-bg.jpg')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-8xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            The Team
          </h1>
          <p className="text-xl text-offwhite/60 font-medium max-w-xl mx-auto">
            The coaches behind 108.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-ink/60 font-medium leading-relaxed">
            We&apos;re a team of coaches, former players, and movement
            specialists who believe there&apos;s a better way to develop
            athletes. Every member of our staff has dedicated their career to
            understanding the nuances of performance—and helping athletes unlock
            their potential.
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div
                key={member.name}
                className={`p-8 rounded-[10px] ${
                  index === 0
                    ? "bg-black text-white shadow-deep md:col-span-2 lg:col-span-1"
                    : "bg-paper border border-line/10"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-4xl mb-6 block ${
                    index === 0 ? "text-gold" : "text-ink/30"
                  }`}
                >
                  {member.icon}
                </span>
                <h3
                  className={`text-2xl uppercase mb-2 ${
                    index === 0 ? "text-offwhite" : "text-ink"
                  }`}
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                    index === 0 ? "text-gold" : "text-ink/40"
                  }`}
                >
                  {member.title}
                </p>
                <p
                  className={`font-medium leading-relaxed ${
                    index === 0 ? "text-offwhite/70" : "text-ink/60"
                  }`}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Our Philosophy
          </h2>
          <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
            We believe the best coaches don&apos;t just teach mechanics—they
            understand people. Every athlete processes information differently.
            Every body moves differently. Our job is to find the cues and
            patterns that unlock each individual&apos;s potential.
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
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2
            className="text-5xl md:text-7xl uppercase mb-6 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Train With Us
          </h2>
          <p className="text-xl text-offwhite/60 font-medium mb-10 max-w-2xl mx-auto">
            Ready to experience what makes 108 different?
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
