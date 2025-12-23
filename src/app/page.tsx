import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>108.</div>
        <div className={styles.navLinks}>
          <Link href="#">Running Programs</Link>
          <Link href="#">The Lab</Link>
          <Link href="#">Raw Takes</Link>
        </div>
        <Link href="#" className={styles.ctaButtonNav}>
          CONTACT
        </Link>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            THE SEARCH<br />
            <span className={styles.heroHighlight}>FOR TRUTH</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Where old-school wisdom meets modern biomechanics.<br />
            <span className={styles.accentText}>Science meets Soul.</span>
          </p>

          <div className={styles.buttonGroup}>
            <Link href="#" className={styles.btnPrimary}>
              Start the Pursuit
            </Link>
            <Link href="#" className={styles.btnSecondary}>
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section Preview */}
      <section className={styles.methodology}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MOVEMENT</h3>
              <p className={styles.cardText}>
                We don't fit athletes into a system. We use motion capture to understand your unique biomechanical signature.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>TRANSFER</h3>
              <p className={styles.cardText}>
                Cage bombs don't matter. We optimize for game transfer. If it doesn't happen at 7pm, it doesn't count.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>N.E.S.T.</h3>
              <p className={styles.cardText}>
                Nutrition. Exercise. Sleep. Time. The foundations of high performance that most programs ignore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
