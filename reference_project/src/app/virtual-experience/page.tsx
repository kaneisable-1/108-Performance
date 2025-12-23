import Link from "next/link";

export default function VirtualExperiencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-black" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-offwhite/30 mb-6 block">
            smartphone
          </span>
          <h1
            className="text-6xl md:text-8xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Your coach in your pocket.
          </h1>
          <p className="text-xl text-offwhite/60 font-medium mb-8 max-w-xl mx-auto">
            Train from anywhere. $550/month.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-[10px] transition-all duration-300 shadow-deep border border-offwhite/20"
          >
            Start Training
          </Link>
        </div>
      </section>

      {/* Distance Changes Nothing */}
      <section className="py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Distance changes nothing.
          </h2>
          <p className="text-xl text-ink/60 font-medium leading-relaxed max-w-2xl mx-auto">
            Daily programming. Video feedback. Direct coach access. All from
            where you train.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                calendar_month
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Daily Programming
              </h3>
              <p className="text-ink/60 font-medium">
                Customized training plans delivered to you every day. No
                guesswork.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-[10px] shadow-deep">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                videocam
              </span>
              <h3
                className="text-2xl uppercase mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Video Feedback
              </h3>
              <p className="text-offwhite/60 font-medium">
                Submit video, get detailed analysis. Same eyes that work with
                pros.
              </p>
            </div>

            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <span className="material-symbols-outlined text-4xl text-gold mb-6 block">
                chat
              </span>
              <h3
                className="text-2xl uppercase text-ink mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Direct Access
              </h3>
              <p className="text-ink/60 font-medium">
                Message your coach directly. Questions answered. Cues reinforced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Coaching */}
      <section className="py-24 bg-paper border-t border-line/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-5xl md:text-7xl uppercase text-ink mb-8 leading-[0.9]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Real coaching. Remote delivery.
              </h2>
              <p className="text-xl text-ink/60 font-medium leading-relaxed">
                Your cues reinforced. Your patterns refined. Progress tracked.
                This isn&apos;t a generic workout app—it&apos;s your 108
                Experience, continued.
              </p>
            </div>
            <div className="relative h-[400px] bg-black rounded-[10px] overflow-hidden shadow-deep">
              <div className="absolute inset-0 bg-gradient-to-br from-line to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[150px] text-offwhite/10">
                  trending_up
                </span>
              </div>
              <div className="absolute inset-0 film-grain" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl uppercase text-ink mb-12 text-center leading-[0.9]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly */}
            <div className="bg-paper p-8 rounded-[10px] border border-line/10">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4 block">
                Monthly
              </span>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl text-ink"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  $550
                </span>
                <span className="text-ink/40 font-medium">/month</span>
              </div>
              <ul className="space-y-3 text-ink/70 font-medium mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Daily programming
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Video feedback
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Direct coach access
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Cancel anytime
                </li>
              </ul>
              <Link
                href="/apply"
                className="block text-center bg-ink hover:bg-navy text-offwhite text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-[10px] transition-all duration-300"
              >
                Subscribe
              </Link>
            </div>

            {/* Annual */}
            <div className="bg-black text-white p-8 rounded-[10px] shadow-deep relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-[6px]">
                Save $600
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-offwhite/40 mb-4 block">
                Annual
              </span>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  $6,000
                </span>
                <span className="text-offwhite/40 font-medium">/year</span>
              </div>
              <ul className="space-y-3 text-offwhite/70 font-medium mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Everything in monthly
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Priority scheduling
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Quarterly check-ins
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-lg">
                    check_circle
                  </span>
                  Locked-in rate
                </li>
              </ul>
              <Link
                href="/apply"
                className="block text-center bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-[10px] transition-all duration-300"
              >
                Pay Annually
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Requirement */}
      <section className="py-16 bg-paper border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-ink/60 font-medium mb-6">
            Requires The 108 Experience first.
          </p>
          <Link
            href="/108-experience"
            className="inline-flex items-center gap-2 text-ink font-semibold uppercase tracking-widest text-sm hover:text-navy transition-colors"
          >
            Book 108 Experience{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
