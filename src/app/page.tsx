import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Navigation */}
      <header className={styles.header}>
        <div className={styles.containerNav}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>⚡</span>
            <span className={styles.brandName}>108 Performance</span>
          </div>
          <nav className={styles.navLinks}>
            <Link href="#">The Method</Link>
            <Link href="#">The Work</Link>
            <Link href="#">The Proof</Link>
          </nav>
          <button className={styles.ctaButtonNav}>Experience 108</button>
        </div>
      </header>

      {/* Hero Section: Option A (The Full Stack) */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroTextContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              <p>The 108 Difference</p>
            </div>
            <h1 className={styles.heroTitle}>
              Training that<br />
              <span className={styles.heroHighlight}>feels different.</span>
            </h1>
            <p className={styles.heroSubtitleBig}>
              Human first. Results always.
            </p>
            <p className={styles.heroDescription}>
              We understand you first. Then we push you further than anyone else will.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimarySkew}>
                <div className={styles.unskew}>Experience 108</div>
              </button>
              <button className={styles.btnSecondary}>
                View Programs <span className={styles.arrowIcon}>→</span>
              </button>
            </div>
          </div>
          {/* Visual: Abstract "Human/Athlete" composition */}
          <div className={styles.heroVisual}>
            <div className={styles.bgText}>108</div>
            <div className={styles.imageCardTop}>
              {/* Visual Placeholder */}
              <span className={styles.bigBolt}>⚡</span>
            </div>
            <div className={styles.imageCardBottom}>
              <span className={styles.bigNum}>47</span>
              <span className={styles.labLabel}>Draft Picks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Method (Philosophy) */}
      <section className={styles.sectionWhite}>
        <div className={styles.containerCenter}>
          <h2 className={styles.sectionTitleDark}>
            Human. Athlete.<br />
            <span className={styles.textBlue}>Player.</span>
          </h2>
          <p className={styles.sectionDesc}>
            We start with who you are. The warmth without the results is just a nice place to hang out. The results are what earn the right to be warm.
          </p>
        </div>
      </section>

      {/* Section 3: The Work (The Edge) */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div className={styles.splitContent}>
              <h2 className={styles.sectionTitleWhite}>
                The work is <span className={styles.textRed}>real.</span>
              </h2>
              <p className={styles.textGrayLight}>
                We're not here to make you comfortable. We're here to make you better. Faster. Stronger. More explosive. The methodology is human-first—the training is relentless.
                <br /><br />
                PRs don't come from nice conversations. They come from the work.
              </p>
              <button className={styles.btnWhiteSkew}>
                <div className={styles.unskew}>See the Results</div>
              </button>
            </div>
            {/* Optional Visual for 'Edge' */}
            <div className={styles.splitVisual}>
              <div className={styles.edgeBox}>
                <span>LOG</span>
                <span>WORK</span>
                <span>WIN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Proof (Results) */}
      <section className={styles.sectionGrey}>
        <div className={styles.containerCenter}>
          <div className={styles.iconCircle}>
            <span>✓</span>
          </div>
          <h2 className={styles.sectionTitleDark}>It Works.</h2>
          <p className={styles.sectionDesc}>
            Velocity gains. Exit velo jumps. Draft picks. D1 commits. The results aren't accidental—they're the product of a system that actually works.
          </p>

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
              <span className={styles.statNumber}>+4</span>
              <span className={styles.statLabel}>MPH Avg Gain</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>To MLB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA: Ready to feel it? */}
      <section className={styles.sectionDarkCenter}>
        <h2 className={styles.footerTitle}>
          Ready to <span className={styles.textBlue}>feel it?</span>
        </h2>
        <button className={styles.btnBlueRound}>Start The Pursuit</button>
      </section>
    </div>
  );
}
