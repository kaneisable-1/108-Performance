import Link from "next/link";
import styles from "../home.module.css";

export default function VirtualExperience() {
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
                    <p className={styles.heroModifier}>Remote Training</p>
                    <h1 className={styles.heroTitle}>
                        Your coach. Anywhere.
                    </h1>
                    <p className={styles.heroSubhead}>
                        Remote | $550/month
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
                            The method travels.
                        </h2>
                        <div className={styles.truthBody}>
                            <p>
                                Same programming. Same cues. Same system. We coach you in your voice—whether
                                you're in Knoxville or across the country.
                            </p>
                            <p className={styles.truthHighlight}>
                                Distance changes nothing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Full coaching. Remote delivery.</h2>
                    </div>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Daily Programming</h3>
                            <p className={styles.methodBody}>Training built specifically for you.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Video Review</h3>
                            <p className={styles.methodBody}>Film breakdown and detailed feedback.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Direct Coach Access</h3>
                            <p className={styles.methodBody}>Your questions answered, fast.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Your Cues Reinforced</h3>
                            <p className={styles.methodBody}>The voice you learned—maintained.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Progress Tracked</h3>
                            <p className={styles.methodBody}>Data and development over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.footerCTA}>
                <div className={styles.container}>
                    <h2 className={styles.footerTitle}>Starts with the 108 Experience.</h2>
                    <p className={styles.footerTagline}>
                        We learn your system first. Then we coach it from anywhere.
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
