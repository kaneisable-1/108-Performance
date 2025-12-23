import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-8xl uppercase text-offwhite mb-6 leading-[0.85]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Get in touch.
          </h1>
          <p className="text-xl text-offwhite/60 font-medium max-w-xl mx-auto">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2
                className="text-3xl uppercase text-ink mb-8"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-2xl text-gold">
                    location_on
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Address</h3>
                    <p className="text-ink/60 font-medium">
                      108 Tri Star
                      <br />
                      6616 Deane Hill Drive
                      <br />
                      Knoxville, TN 37919
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-2xl text-gold">
                    phone
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Phone</h3>
                    <a
                      href="tel:865-253-5060"
                      className="text-ink/60 font-medium hover:text-ink transition-colors"
                    >
                      865-253-5060
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-2xl text-gold">
                    alternate_email
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email</h3>
                    <a
                      href="mailto:info@108performanceacademy.com"
                      className="text-ink/60 font-medium hover:text-ink transition-colors"
                    >
                      info@108performanceacademy.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-2xl text-gold">
                    schedule
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Hours</h3>
                    <p className="text-ink/60 font-medium">
                      Monday-Thursday: 3:30 PM - 9:00 PM
                      <br />
                      Friday-Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-ink mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/108performance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-[6px] bg-white flex items-center justify-center text-ink hover:bg-navy hover:text-offwhite transition-all duration-300 shadow-soft"
                  >
                    <span className="material-symbols-outlined">
                      photo_camera
                    </span>
                  </a>
                  <a
                    href="https://youtube.com/@108performance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-[6px] bg-white flex items-center justify-center text-ink hover:bg-navy hover:text-offwhite transition-all duration-300 shadow-soft"
                  >
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[10px] border border-line/10 shadow-soft">
              <h2
                className="text-3xl uppercase text-ink mb-8"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Send a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-widest text-ink/60 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-[6px] border border-line/20 bg-paper focus:outline-none focus:border-navy transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-widest text-ink/60 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-[6px] border border-line/20 bg-paper focus:outline-none focus:border-navy transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-widest text-ink/60 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-[6px] border border-line/20 bg-paper focus:outline-none focus:border-navy transition-colors"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-widest text-ink/60 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-[6px] border border-line/20 bg-paper focus:outline-none focus:border-navy transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ink hover:bg-navy text-offwhite text-sm font-semibold uppercase tracking-widest py-4 px-6 rounded-[10px] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative h-[400px] bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-offwhite/20 mb-4 block">
              map
            </span>
            <p className="text-offwhite/40 font-medium uppercase tracking-widest text-sm">
              Knoxville, TN
            </p>
          </div>
        </div>
        <div className="absolute inset-0 film-grain" />
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-paper border-t border-line/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-ink/60 font-medium mb-6">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/108-experience"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-[6px] text-ink font-semibold text-sm hover:shadow-soft transition-all duration-300"
            >
              Book Training
              <span className="material-symbols-outlined text-lg">
                arrow_right_alt
              </span>
            </Link>
            <Link
              href="/internship"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-[6px] text-ink font-semibold text-sm hover:shadow-soft transition-all duration-300"
            >
              Careers
              <span className="material-symbols-outlined text-lg">
                arrow_right_alt
              </span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-[6px] text-ink font-semibold text-sm hover:shadow-soft transition-all duration-300"
            >
              Meet the Team
              <span className="material-symbols-outlined text-lg">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
