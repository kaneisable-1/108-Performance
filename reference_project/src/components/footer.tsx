import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-paper py-20 border-t border-line/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 text-ink">
              <span className="material-symbols-outlined text-3xl">bolt</span>
              <span
                className="text-2xl uppercase tracking-tighter"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                108 Performance
              </span>
            </div>
            <p className="text-ink/50 mb-6 font-medium">
              Master Service Offerings Guide
              <br />
              December 2025
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-ink mb-6 uppercase tracking-widest text-xs">
              Services
            </h4>
            <ul className="space-y-4 text-ink/50 font-medium">
              <li>
                <Link
                  href="/108-experience"
                  className="hover:text-ink transition-colors"
                >
                  Performance Training
                </Link>
              </li>
              <li>
                <Link
                  href="/the-method"
                  className="hover:text-ink transition-colors"
                >
                  Biomechanics Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/virtual-experience"
                  className="hover:text-ink transition-colors"
                >
                  Remote Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-ink mb-6 uppercase tracking-widest text-xs">
              Company
            </h4>
            <ul className="space-y-4 text-ink/50 font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-ink transition-colors"
                >
                  About 108
                </Link>
              </li>
              <li>
                <Link
                  href="/internship"
                  className="hover:text-ink transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-ink transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-ink mb-6 uppercase tracking-widest text-xs">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/108performance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-[6px] bg-white flex items-center justify-center text-ink hover:bg-navy hover:text-offwhite transition-all duration-300 shadow-soft"
              >
                <span className="material-symbols-outlined text-lg">
                  photo_camera
                </span>
              </a>
              <a
                href="mailto:info@108performanceacademy.com"
                className="w-10 h-10 rounded-[6px] bg-white flex items-center justify-center text-ink hover:bg-navy hover:text-offwhite transition-all duration-300 shadow-soft"
              >
                <span className="material-symbols-outlined text-lg">
                  alternate_email
                </span>
              </a>
              <a
                href="https://youtube.com/@108performance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-[6px] bg-white flex items-center justify-center text-ink hover:bg-navy hover:text-offwhite transition-all duration-300 shadow-soft"
              >
                <span className="material-symbols-outlined text-lg">
                  play_circle
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-line/10 text-xs font-semibold text-ink/40 flex flex-col md:flex-row justify-between uppercase tracking-wider">
          <p>© 2025 108 Performance. All rights reserved.</p>
          <p className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
