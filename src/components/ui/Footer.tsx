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
                <Link href="#inside" className="hover:text-black transition-colors">
                  Inside
                </Link>
              </li>
              <li>
                <Link href="#athletes" className="hover:text-black transition-colors">
                  Athletes
                </Link>
              </li>
              <li>
                <Link href="#coaches" className="hover:text-black transition-colors">
                  Coaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="#method" className="hover:text-black transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-black transition-colors">
                  Contact
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
