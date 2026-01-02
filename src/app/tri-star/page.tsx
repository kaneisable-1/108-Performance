import Link from "next/link";
import styles from "../home.module.css";

export default function TriStar() {
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
                    <p className={styles.heroModifier}>Knoxville Members</p>
                    <h1 className={styles.heroTitle}>
                        Unlimited access.
                    </h1>
                    <p className={styles.heroSubhead}>
                        Knoxville | $499/month
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/apply" className={styles.btnPrimary}>Start Training</Link>
                    </div>
                </div>
            </section>

            {/* The Deal */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.truthContent}>
                        <h2 className={styles.sectionTitleWhite}>
                            Show up. Train. Repeat.
                        </h2>
                        <div className={styles.truthBody}>
                            <p>
                                Monday through Thursday. 3:30 to 8:00 PM. Hitting. Throwing. RFD.
                                No session limits. No excuses.
                            </p>
                            <p className={styles.truthHighlight}>
                                Your system. Reinforced daily.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Everything.</h2>
                    </div>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Unlimited Sessions</h3>
                            <p className={styles.methodBody}>Train as often as you want. No caps.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Hitting Development</h3>
                            <p className={styles.methodBody}>Exit velo, bat path, timing—all of it.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Throwing Programs</h3>
                            <p className={styles.methodBody}>Arm health and velocity development.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>RFD Training</h3>
                            <p className={styles.methodBody}>Rate of force development work.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Coaching Access</h3>
                            <p className={styles.methodBody}>Full staff access during sessions.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>108 Community</h3>
                            <p className={styles.methodBody}>Train alongside serious athletes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.footerCTA}>
                <div className={styles.container}>
                    <h2 className={styles.footerTitle}>Knoxville area only.</h2>
                    <p className={styles.footerTagline}>
                        Requires the 108 Experience first. That's where we learn your system.
                        This is where you reinforce it.
                    </p>
                    <Link href="/108-experience" className={styles.btnPrimary}>Book 108 Experience First →</Link>
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
