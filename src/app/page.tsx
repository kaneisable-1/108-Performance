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
            <Link href="#">Guide</Link>
            <Link href="#">Services</Link>
            <Link href="#">About</Link>
          </nav>
          <button className={styles.ctaButtonNav}>Experience 108</button>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroTextContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              <p>Master Service Offerings Guide</p>
            </div>
            <h1 className={styles.heroTitle}>
              When you <br />
              <span className={styles.heroHighlight}>Feel It,</span><br />
              You'll Know.
            </h1>
            <p className={styles.heroDescription}>
              We build athletes differently. Combining data-driven biomechanics with elite coaching to unlock raw power.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimarySkew}>
                <div className={styles.unskew}>Experience 108</div>
              </button>
              <button className={styles.btnSecondary}>
                Watch Film <span className={styles.arrowIcon}>→</span>
              </button>
            </div>
          </div>
          {/* Visual Side (Hidden on mobile usually, but we implement for desk) */}
          <div className={styles.heroVisual}>
            <div className={styles.bgText}>108</div>
            <div className={styles.imageCardTop}>
              {/* Placeholder for Athlete Image */}
              <div className={styles.imageOverlay}>Drafted</div>
            </div>
            <div className={styles.imageCardBottom}>
              <span className={styles.bigBolt}>⚡</span>
              <span className={styles.bigNum}>108</span>
              <span className={styles.labLabel}>Lab Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Lab Tested */}
      <section className={styles.sectionWhite}>
        <div className={styles.bgTextBig}>Performance</div>
        <div className={styles.containerCenter}>
          <div className={styles.iconCircle}>
            <span>✓</span>
          </div>
          <h2 className={styles.sectionTitleDark}>
            Lab Tested.<br />
            <span className={styles.gradientText}>Coach Approved.</span>
          </h2>
          <p className={styles.sectionDesc}>
            We don't guess. We measure. Our methodology combines cutting-edge biomechanical analysis with battle-tested coaching strategies.
          </p>
        </div>
      </section>

      {/* Section 3: The 108 Standard (Cards) */}
      <section className={styles.sectionGrey}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <h3 className={styles.sectionSubtitle}>The 108 Standard</h3>
              <p className={styles.sectionSubDesc}>Precision training designed for the elite.</p>
            </div>
            <Link href="#" className={styles.viewAllLink}>
              View All Services →
            </Link>
          </div>

          <div className={styles.cardGrid}>
            {/* Card 1 */}
            <div className={styles.cardWhite}>
              <div className={styles.cardIconBox}>⚡</div>
              <h4 className={styles.cardTitle}>Dramatic<br />Results. Fast.</h4>
              <p className={styles.cardBody}>
                Accelerate your development cycle. Our proprietary methods strip away inefficiencies to get you game-ready sooner.
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.cardIndex}>01</span>
                <button className={styles.cardArrow}>→</button>
              </div>
            </div>

            {/* Card 2 (Dark) */}
            <div className={styles.cardDark}>
              <div className={styles.cardIconBoxDark}>♥</div>
              <h4 className={styles.cardTitleWhite}>Play Without<br />Pain.</h4>
              <p className={styles.cardBodyDark}>
                Longevity is the ultimate performance metric. We optimize your biomechanics to keep you healthy and dominating.
              </p>
              <div className={styles.cardFooterDark}>
                <span className={styles.cardIndexDark}>02</span>
                <button className={styles.cardArrowWhite}>→</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.cardWhite}>
              <div className={styles.cardIconBox}>📊</div>
              <h4 className={styles.cardTitle}>Data-Driven<br />Approach.</h4>
              <p className={styles.cardBody}>
                Every movement measured, every metric optimized. We turn data into actionable insights for your specific physiology.
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.cardIndex}>03</span>
                <button className={styles.cardArrow}>→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Precision */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.precisionBox}>
            <h2 className={styles.precisionTitle}>
              Precision<br />
              <span className={styles.gradientText}>Is Not An</span><br />
              Accident
            </h2>
            <button className={styles.btnWhiteSkew}>
              <div className={styles.unskew}>Explore The Science</div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <section className={styles.sectionDarkCenter}>
        <h2 className={styles.footerTitle}>
          Unlock Your <span className={styles.textBlue}>Potential</span>
        </h2>
        <button className={styles.btnBlueRound}>Experience 108</button>
      </section>
    </div>
  );
}
