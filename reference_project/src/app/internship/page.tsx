import Link from "next/link";

export default function InternshipPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
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
          <span className="material-symbols-outlined text-6xl text-offwhite/30 mb-6 block">
            school
          </span>
          <h1
            className="text-6xl md:text-8xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Learn by doing.
          </h1>
          <p className="text-xl text-offwhite/60 font-medium mb-8 max-w-xl mx-auto">
            3-6 months. Full immersion.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Not An Observation Program */}
      <section className="py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Not an observation program.
          </h2>
          <p className="text-xl text-ink/60 font-medium leading-relaxed max-w-2xl mx-auto">
            You&apos;re in the cage. On the mound. Working with real athletes
            under real pressure.
          </p>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            What You&apos;ll Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                sports_baseball
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Daily Training Support
              </h3>
              <ul className="space-y-3 text-ink/60 font-medium">
                <li>Assist with Tri Star group classes</li>
                <li>Support 108 Experience athletes</li>
                <li>Help run Performance Institute sessions</li>
                <li>Set up and break down equipment</li>
              </ul>
            </div>

            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                videocam
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Video & Analysis
              </h3>
              <ul className="space-y-3 text-ink/60 font-medium">
                <li>Film training sessions and drill work</li>
                <li>Assist with video review and feedback</li>
                <li>Learn our movement analysis framework</li>
                <li>Support content creation</li>
              </ul>
            </div>

            <div className="bg-black text-white p-8 rounded-[10px] shadow-deep">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                groups
              </span>
              <h3
                className="text-2xl uppercase mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Athlete Development
              </h3>
              <ul className="space-y-3 text-offwhite/60 font-medium">
                <li>Work with youth, HS, and college athletes</li>
                <li>Learn Human → Athlete → Player methodology</li>
                <li>Understand individualized programming</li>
                <li>Observe and participate in debriefs</li>
              </ul>
            </div>

            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                home_repair_service
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Facility Operations
              </h3>
              <ul className="space-y-3 text-ink/60 font-medium">
                <li>Maintain training spaces and equipment</li>
                <li>Support scheduling and athlete check-ins</li>
                <li>Assist with camps and Tour Experiences</li>
                <li>Represent 108 professionally</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work With The Best */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Work with the best.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed mb-8">
                Eugene. Will. Nate. Mac. Tyler. Direct mentorship from senior
                staff.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-ink font-semibold uppercase tracking-widest text-sm hover:text-navy transition-colors"
              >
                Meet the Team{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[150px] text-offwhite/10">
                  diversity_3
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
            </div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Expectations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Be Early",
                text: "If you're on time, you're late.",
              },
              {
                title: "Be Coachable",
                text: "Accept feedback, ask questions, check your ego.",
              },
              {
                title: "Be Present",
                text: "No phones during sessions. Full attention on the work.",
              },
              {
                title: "Be Professional",
                text: "How you dress, speak, and treat every person matters.",
              },
              {
                title: "Be Curious",
                text: 'Ask "why" constantly. Study on your own. Seek to understand.',
              },
              {
                title: "Be Humble",
                text: "You don't know everything. Neither do we. Trust the process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-paper rounded-[10px] border border-line/10"
              >
                <span className="material-symbols-outlined text-gold text-2xl">
                  check_circle
                </span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                  <p className="text-ink/60 font-medium text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is this a paid internship?",
                a: "No. This is an unpaid educational experience. Top performers are considered for paid positions.",
              },
              {
                q: "Do you provide housing?",
                a: "No. We recommend local candidates or those willing to relocate.",
              },
              {
                q: "How long is the program?",
                a: "3-6 months. Longer commitments lead to deeper learning.",
              },
              {
                q: "What's the weekly time commitment?",
                a: "20-40 hours per week.",
              },
              {
                q: "When can I start?",
                a: "We accept applications year-round. Start dates are flexible.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-[10px] border border-line/10"
              >
                <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                <p className="text-ink/60 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-offwhite/50 font-medium mb-6">
            52 questions. 30-45 minutes. Tell us how you think.
          </p>
          <h2
            className="text-5xl md:text-7xl uppercase mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Ready to Apply?
          </h2>
          <Link
            href="/apply"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep"
          >
            Start Application
          </Link>
        </div>
      </section>
    </main>
  );
}
