import Image from 'next/image';

/**
 * Logo108 - 108 Performance brand logo component
 *
 * @description Renders the 108 Performance logo using Next.js Image optimization.
 * Use this component for consistent branding across the site. The same logo file
 * is used for Open Graph/Twitter social previews.
 *
 * @example
 * // Default usage (centered, 320x160)
 * <Logo108 />
 *
 * @example
 * // Custom size
 * <Logo108 width={200} height={100} />
 *
 * @example
 * // Custom Tailwind classes
 * <Logo108 className="mx-0" />
 *
 * @param {number} [width=320] - Width of the logo in pixels
 * @param {number} [height=160] - Height of the logo in pixels
 * @param {string} [className="mx-auto"] - Tailwind CSS classes for styling
 *
 * @returns {JSX.Element} Next.js Image component rendering the 108 logo
 */

interface Logo108Props {
  /** Width of the logo in pixels */
  width?: number;
  /** Height of the logo in pixels */
  height?: number;
  /** Tailwind CSS classes for styling */
  className?: string;
}

export default function Logo108({
  width = 320,
  height = 160,
  className = 'mx-auto',
}: Logo108Props) {
  return (
    <Image
      src="/og-108-logo.png"
      alt="108 Performance Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
