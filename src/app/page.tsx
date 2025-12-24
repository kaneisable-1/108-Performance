import Link from "next/link";
import styles from "./home.module.css";

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
            <Link href="#">The Method</Link>
            <Link href="#">Programs</Link>
            <Link href="#">Results</Link>
          </nav>
          <button className={styles.ctaButtonNav}>Experience 108</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Results you have to feel to believe.
          </h1>
          <p className={styles.heroSubhead}>
            Built for how you move.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>Experience 108</button>
            <button className={styles.btnSecondary}>
              Watch the Method <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section: The Method */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Method</span>
            <h2 className={styles.sectionTitle}>Training that transfers.</h2>
            <p className={styles.sectionDesc}>
              If it doesn't work at 7pm, it doesn't matter. We build athletes for the game, not the cage.
            </p>
          </div>

          <div className={styles.methodGrid}>
            <div className={styles.methodCard}>
              <span className={styles.methodNumber}>01</span>
              <h3 className={styles.methodTitle}>Movement First</h3>
              <p className={styles.methodBody}>
                We don't fit you into a system. We study how you move, then build from there.
              </p>
            </div>
            <div className={styles.methodCard}>
              <span className={styles.methodNumber}>02</span>
              <h3 className={styles.methodTitle}>Transfer at 7</h3>
              <p className={styles.methodBody}>
                Training is pointless if it doesn't show up in the game. Everything we do is designed for performance when it counts.
              </p>
            </div>
            <div className={styles.methodCard}>
              <span className={styles.methodNumber}>03</span>
              <h3 className={styles.methodTitle}>Data Serves You</h3>
              <p className={styles.methodBody}>
                Movement creates data—not the other way around. We measure to understand, not to dictate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Feel */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div className={styles.splitContent}>
              <span className={styles.eyebrowLight}>The Feel</span>
              <h2 className={styles.sectionTitleWhite}>
                Know your heartbeat before we know your swing.
              </h2>
              <p className={styles.textGray}>
                World-class training starts with understanding you—the human, not just the athlete.
                That's what makes the results stick. That's what makes you want to come back.
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

      {/* Section: The Proof */}
      <section className={styles.sectionBlack}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrowLight}>The Proof</span>
            <h2 className={styles.sectionTitleWhite}>It works.</h2>
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
              <span className={styles.statLabel}>Avg Velo Gain</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>To the Show</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Programs */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Programs</span>
            <h2 className={styles.sectionTitle}>Train your way.</h2>
            <p className={styles.sectionDesc}>
              In-person at the lab. Remote from anywhere. Same coaching. Same results.
            </p>
          </div>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>108 Experience</h3>
              <p className={styles.programBody}>Full immersion at the lab. Assessment, training, and ongoing development.</p>
              <Link href="#" className={styles.programLink}>Learn more →</Link>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Virtual Training</h3>
              <p className={styles.programBody}>Remote coaching with video analysis. World-class methods, wherever you are.</p>
              <Link href="#" className={styles.programLink}>Learn more →</Link>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>The Lab Tour</h3>
              <p className={styles.programBody}>See the facility. Meet the coaches. Experience 108 before you commit.</p>
              <Link href="#" className={styles.programLink}>Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCTA}>
        <div className={styles.container}>
          <h2 className={styles.footerTitle}>Ready to feel the difference?</h2>
          <button className={styles.btnPrimary}>Start The Pursuit</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <span className={styles.brandName}>108</span>
              <p className={styles.footerText}>The search for truth.</p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="#">The Method</Link>
              <Link href="#">Programs</Link>
              <Link href="#">Results</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
          <p className={styles.copyright}>© 2025 108 Performance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
