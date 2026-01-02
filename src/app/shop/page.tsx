import Link from "next/link";
import styles from "../home.module.css";

export default function Shop() {
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
                        Rep the work.
                    </h1>
                    <p className={styles.heroSubhead}>
                        Training gear and apparel.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Training Gear</h3>
                            <p className={styles.methodBody}>The tools we use.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Apparel</h3>
                            <p className={styles.methodBody}>Wear the brand.</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Book</h3>
                            <p className={styles.methodBody}>Human → Athlete → Player</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>Equipment</h3>
                            <p className={styles.methodBody}>Train like we do.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ color: '#666' }}>Shop coming soon.</p>
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
