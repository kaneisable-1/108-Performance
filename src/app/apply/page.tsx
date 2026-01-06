import Link from "next/link";
import styles from "../home.module.css";

export default function Apply() {
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
            <section className={styles.hero} style={{ minHeight: '50vh' }}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Tell us where you are.
                    </h1>
                    <p className={styles.heroSubhead}>
                        We'll help you figure out what's next.
                    </p>
                </div>
            </section>

            {/* Application Form Placeholder */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Start Your Application</h2>
                        <iframe src="https://api.leadconnectorhq.com/widget/survey/MM8Rx7Ss2BbFJvY82zca" style="border:none;width:100%;" scrolling="no" id="MM8Rx7Ss2BbFJvY82zca" title="survey"></iframe>
                        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                    </div>

                    <div className={styles.pathGrid} style={{ marginTop: '3rem' }}>
                        <div className={styles.pathCard}>
                            <h3 className={styles.pathTitle}>Athletes</h3>
                            <p className={styles.pathBody}>
                                Looking to train? Start with the 108 Experience—our 2-5 day immersion
                                where we learn your system.
                            </p>
                            <Link href="/108-experience" className={styles.programLink}>
                                Learn about the 108 Experience →
                            </Link>
                        </div>
                        <div className={styles.pathCard}>
                            <h3 className={styles.pathTitle}>Coaches</h3>
                            <p className={styles.pathBody}>
                                Want to learn the method? Start with the Coaches Experience—shadow
                                our team for 2-5 days.
                            </p>
                            <Link href="/coaches-experience" className={styles.programLink}>
                                Learn about the Coaches Experience →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Happens Next */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.stayingContent}>
                        <h2 className={styles.sectionTitleWhite}>We'll reach out within 48 hours.</h2>
                        <p className={styles.textGray}>
                            No pressure. Just a conversation.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <a href="mailto:info@108performanceacademy.com" className={styles.btnPrimary}>
                                Email Us to Get Started
                            </a>
                        </div>
                    </div>
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
