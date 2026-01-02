"use client";

import Link from "next/link";
import styles from "./home.module.css";
import WeeklyDoseCarousel, { DoseItem } from "@/components/WeeklyDoseCarousel";

// Seed data: 7 items with hotlinked thumbnails
const carouselItems: DoseItem[] = [
  {
    id: '1',
    title: 'The Science of Spin Rate',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508344928928-7165b0a59b46?w=640&q=80',
    href: '/videos/spin-rate',
    subtitle: '8:24',
    featured: true,
  },
  {
    id: '2',
    title: 'Pitching Mechanics Breakdown',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578432014316-48b448d79d57?w=640&q=80',
    href: '/videos/pitching-mechanics',
    subtitle: '12:15',
  },
  {
    id: '3',
    title: 'Weekly Velocity Update',
    thumbnailUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=640&q=80',
    href: '/videos/velocity-update',
    subtitle: '5:42',
  },
  {
    id: '4',
    title: 'Movement Training Deep Dive',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461896836934-e83a2b8d?w=640&q=80',
    href: '/videos/movement-training',
    subtitle: '15:30',
  },
  {
    id: '5',
    title: 'Athlete Spotlight: Road to the Show',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=640&q=80',
    href: '/videos/athlete-spotlight',
    subtitle: '10:08',
    featured: true,
  },
  {
    id: '6',
    title: 'Data-Driven Training Results',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=640&q=80',
    href: '/videos/data-driven',
    subtitle: '7:55',
  },
  {
    id: '7',
    title: 'Recovery & Performance',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&q=80',
    href: '/videos/recovery',
    subtitle: '9:12',
  },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Navigation */}
      <header className={styles.header}>
        <div className={styles.containerNav}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandName}>108</span>
          </Link>
          <nav className={styles.navLinks}>
            <Link href="/108-experience">For Athletes</Link>
            <Link href="/coaches-experience">For Coaches</Link>
            <Link href="/the-method">The Method</Link>
            <Link href="/shop">Shop</Link>
          </nav>
          <Link href="/apply" className={styles.ctaButtonNav}>Experience 108</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            When You Feel It, You&apos;ll Know.
          </h1>
          <p className={styles.heroSubhead}>
            We build athletes differently. Combining data-driven biomechanics with elite coaching to unlock raw power.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/apply" className={styles.btnPrimary}>Experience 108</Link>
            <Link href="/the-method" className={styles.btnSecondary}>
              Watch Film <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Narrative Carousel: Living content under hero, above services */}
      <WeeklyDoseCarousel
        items={carouselItems}
        onSelect={(item) => { window.location.href = item.href; }}
        onViewAll={() => { window.location.href = '/videos'; }}
      />

      {/* Section: The Truth */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.truthContent}>
            <h2 className={styles.sectionTitleWhite}>
              Lab Tested. Coach Approved.
            </h2>
            <div className={styles.truthBody}>
              <p>
                We don&apos;t guess. We measure. Our methodology combines cutting-edge
                biomechanical analysis with battle-tested coaching strategies.
              </p>
              <p className={styles.truthHighlight}>
                Precision is not an accident.
              </p>
            </div>
            <Link href="/the-method" className={styles.textLink}>
              Learn the Method →
            </Link>
          </div>
        </div>
      </section>

      {/* Section: The Method */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The 108 Methodology</span>
            <h2 className={styles.sectionTitle}>Understanding before instruction.</h2>
            <p className={styles.sectionDesc}>
              We learn how you think before we look at how you move.
              The best adjustment is the one you can make on your own.
            </p>
          </div>

          <div className={styles.methodGrid}>
            <div className={styles.methodCard}>
              <span className={styles.methodNumber}>01</span>
              <h3 className={styles.methodTitle}>Dramatic Results. Fast.</h3>
              <p className={styles.methodBody}>
                Accelerate your development cycle. Our proprietary methods strip away inefficiencies to get you game-ready sooner.
              </p>
            </div>
            <div className={styles.methodCard}>
              <span className={styles.methodNumber}>02</span>
              <h3 className={styles.methodTitle}>Play Without Pain.</h3>
              <p className={styles.methodBody}>
                Longevity is the ultimate performance metric. We optimize your biomechanics to keep you healthy and dominating.
              </p>
            </div>
            <div className={styles.methodCard}>
              <span className={styles.methodNumber}>03</span>
              <h3 className={styles.methodTitle}>Data-Driven Approach.</h3>
              <p className={styles.methodBody}>
                Every movement measured, every metric optimized. We turn data into actionable insights for your specific physiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Unlock */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div className={styles.splitContent}>
              <h2 className={styles.sectionTitleWhite}>
                Your system. Your cues.
              </h2>
              <p className={styles.textGray}>
                Personalized prompts that help you find the right pattern when it matters most.
              </p>
              <p className={styles.textGray}>
                Cues that work on game day.
              </p>
            </div>
            <div className={styles.splitVisual}>
              <div className={styles.quoteBox}>
                <p>"The closest thing biomechanically to elite big leaguers? Kids under 11. All the problems are man-made."</p>
                <span>— Eugene Bleecker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Results */}
      <section className={styles.sectionBlack}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitleWhite}>It works.</h2>
            <p className={styles.textGray} style={{ maxWidth: '600px', margin: '0 auto' }}>
              The velocity comes. The exit velo jumps. The performance unlocks. Not because
              you trained harder—because you're finally moving right.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Athletes Trained</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>47</span>
              <span className={styles.statLabel}>Draft Picks</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+4 MPH</span>
              <span className={styles.statLabel}>Average Velo Gain</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12 → MLB</span>
              <span className={styles.statLabel}>The Range</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Staying */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.stayingContent}>
            <h2 className={styles.sectionTitleWhite}>They come back.</h2>
            <p className={styles.textGray}>
              Athletes train for hours. Then they stay for hours more—watching film,
              talking, figuring things out. They don't have to be here. They choose to stay.
            </p>
            <p className={styles.highlightText}>
              That's not a feature. That's proof it works.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Your Path */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Find Your Path</span>
            <h2 className={styles.sectionTitle}>Everyone starts somewhere.</h2>
            <p className={styles.sectionDesc}>
              The 108 Experience is where it begins. Everything builds from there.
            </p>
          </div>
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <h3 className={styles.pathTitle}>Train with 108</h3>
              <p className={styles.pathBody}>
                In Knoxville. On tour. Remotely. Wherever you are.
              </p>
              <Link href="/108-experience" className={styles.programLink}>
                Find Your Program →
              </Link>
            </div>
            <div className={styles.pathCard}>
              <h3 className={styles.pathTitle}>Learn the method</h3>
              <p className={styles.pathBody}>
                Shadow us. Join the mentorship. Partner with us.
              </p>
              <Link href="/coaches-experience" className={styles.programLink}>
                For Coaches →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCTA}>
        <div className={styles.container}>
          <h2 className={styles.footerTitle}>Unlock Your Potential</h2>
          <p className={styles.footerTagline}>Join the elite athletes redefining their limits at 108 Performance. The future of your game starts now.</p>
          <Link href="/apply" className={styles.btnPrimary}>Experience 108</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <span className={styles.brandName}>108</span>
              <p className={styles.footerText}>Results you have to feel to believe.</p>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerHeading}>Training</h4>
              <div className={styles.footerLinks}>
                <Link href="/108-experience">Programs</Link>
                <Link href="/virtual-experience">Remote</Link>
                <Link href="/coaches-experience">For Coaches</Link>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerHeading}>Company</h4>
              <div className={styles.footerLinks}>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerHeading}>Connect</h4>
              <div className={styles.footerLinks}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="mailto:info@108performanceacademy.com">Email</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>© 2025 108 Performance</p>
            <div className={styles.legalLinks}>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
