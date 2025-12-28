import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/services';

export function Footer() {
  return (
    <footer className="bg-white text-black py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.png"
              alt="108 Performance"
              width={180}
              height={40}
              className="h-8 w-auto mb-3"
            />
            <p className="text-xs text-gray-500">
              Knoxville, TN
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/programs" className="hover:text-black transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/athletes" className="hover:text-black transition-colors">
                  Athletes
                </Link>
              </li>
              <li>
                <Link href="/nil" className="hover:text-black transition-colors">
                  NIL
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/#method" className="hover:text-black transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-black transition-colors">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href={BRAND.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={BRAND.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href={BRAND.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.location.email}`} className="hover:text-black transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} 108 Performance. The door is open.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="#privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
