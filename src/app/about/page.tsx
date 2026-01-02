import Link from "next/link";
import styles from "../home.module.css";

export default function About() {
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
                        The people behind it.
                    </h1>
                    <p className={styles.heroSubhead}>
                        The best in the business.
                    </p>
                </div>
            </section>

            {/* Why We Exist */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.truthContent}>
                        <h2 className={styles.sectionTitleWhite}>
                            We built this because nothing else worked.
                        </h2>
                        <div className={styles.truthBody}>
                            <p>
                                108 exists because traditional training missed something. The drills. The
                                reps. The instruction. None of it mattered if it didn't stick when it counted.
                            </p>
                            <p>
                                So we built something different. A system built around universal principles
                                of human movement—applied individually. Training built around you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Team */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>The Team</h2>
                    </div>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Eugene Bleecker</h3>
                            <p className={styles.methodBody}>
                                <strong>Founder & CEO</strong><br />
                                The architect of the 108 methodology. Decades studying movement, developing
                                players, and building a system that produces results no one else can replicate.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Will Marshall</h3>
                            <p className={styles.methodBody}>
                                <strong>COO & Throwing Director</strong><br />
                                Oversees throwing development and facility operations. His approach to arm
                                health and velocity has helped pitchers at every level.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Nate Headley</h3>
                            <p className={styles.methodBody}>
                                <strong>Hitting Coordinator</strong><br />
                                Leads the hitting program. Teaches coaches and athletes how to see swing
                                flaws and make in-game changes.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Ryan McMillan (Mac)</h3>
                            <p className={styles.methodBody}>
                                <strong>Program Designer</strong><br />
                                Builds the training programs that power 108 athletes. From daily sessions
                                to long-term periodization.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Tyler Shorter</h3>
                            <p className={styles.methodBody}>
                                <strong>Director of Performance</strong><br />
                                Oversees strength, conditioning, and recovery. The bridge between the weight
                                room and the field.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Jamie Bleecker</h3>
                            <p className={styles.methodBody}>
                                <strong>Softball Director</strong><br />
                                Team USA. D1 Pac-12 All-American. 4-time All-American pitcher at Fresno State.
                                Elite-level expertise for softball.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.footerCTA}>
                <div className={styles.container}>
                    <h2 className={styles.footerTitle}>Ready to work with us?</h2>
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
