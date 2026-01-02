import Link from "next/link";
import styles from "../home.module.css";

export default function Contact() {
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
                        Let's talk.
                    </h1>
                    <p className={styles.heroSubhead}>
                        We'll point you in the right direction.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.pathGrid}>
                        <div className={styles.pathCard}>
                            <h3 className={styles.pathTitle}>Location</h3>
                            <p className={styles.pathBody}>
                                <strong>108 Tri Star</strong><br />
                                6616 Deane Hill Drive<br />
                                Knoxville, TN 37919
                            </p>
                        </div>
                        <div className={styles.pathCard}>
                            <h3 className={styles.pathTitle}>Contact</h3>
                            <p className={styles.pathBody}>
                                <strong>Phone:</strong> 865-253-5060<br />
                                <strong>Email:</strong> info@108performanceacademy.com
                            </p>
                        </div>
                        <div className={styles.pathCard}>
                            <h3 className={styles.pathTitle}>Hours</h3>
                            <p className={styles.pathBody}>
                                Monday–Thursday: 3:30 PM – 9:00 PM<br />
                                Friday–Sunday: By appointment
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Placeholder */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.stayingContent}>
                        <h2 className={styles.sectionTitleWhite}>Send us a message</h2>
                        <p className={styles.textGray}>
                            Contact form coming soon. For now, reach out via email or phone.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <a href="mailto:info@108performanceacademy.com" className={styles.btnPrimary}>
                                Email Us
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
