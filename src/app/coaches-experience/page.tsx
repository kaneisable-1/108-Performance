import Link from "next/link";
import styles from "../home.module.css";

export default function CoachesExperience() {
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
                    <p className={styles.heroModifier}>Step 1 — The Collective</p>
                    <h1 className={styles.heroTitle}>
                        Shadow the method.
                    </h1>
                    <p className={styles.heroSubhead}>
                        2–5 days | $500/day
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/apply" className={styles.btnPrimary}>Apply Now</Link>
                    </div>
                </div>
            </section>

            {/* Full Immersion */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.truthContent}>
                        <h2 className={styles.sectionTitleWhite}>
                            Open to close. All access.
                        </h2>
                        <div className={styles.truthBody}>
                            <p>
                                Watch. Ask. Learn. See how we develop players firsthand. This isn't a
                                seminar. It's full immersion in how 108 works.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before You Arrive */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>32 questions first.</h2>
                        <p className={styles.sectionDesc}>
                            We want to know how you think before you get here. The application is part
                            of the experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Pathway */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitleWhite}>This is Step 1.</h2>
                    </div>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard} style={{ background: '#111', border: '1px solid #222' }}>
                            <span className={styles.methodNumber}>01</span>
                            <h3 className={styles.methodTitle} style={{ color: '#fff' }}>Coaches Experience</h3>
                            <p className={styles.methodBody} style={{ color: '#999' }}>
                                Shadow the method
                            </p>
                        </div>
                        <div className={styles.methodCard} style={{ background: '#111', border: '1px solid #222' }}>
                            <span className={styles.methodNumber}>02</span>
                            <h3 className={styles.methodTitle} style={{ color: '#fff' }}>Host a Tour</h3>
                            <p className={styles.methodBody} style={{ color: '#999' }}>
                                Bring 108 to your facility
                            </p>
                        </div>
                        <div className={styles.methodCard} style={{ background: '#111', border: '1px solid #222' }}>
                            <span className={styles.methodNumber}>03</span>
                            <h3 className={styles.methodTitle} style={{ color: '#fff' }}>Coaches Mentorship</h3>
                            <p className={styles.methodBody} style={{ color: '#999' }}>
                                Ongoing access
                            </p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link href="/powered-by-108" className={styles.textLink}>
                            Powered by 108 → Full partnership
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.footerCTA}>
                <div className={styles.container}>
                    <h2 className={styles.footerTitle}>It starts here.</h2>
                    <Link href="/apply" className={styles.btnPrimary}>Apply Now</Link>
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
