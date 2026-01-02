import Link from "next/link";
import styles from "../home.module.css";

export default function Experience108() {
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
                    <p className={styles.heroModifier}>Start Here</p>
                    <h1 className={styles.heroTitle}>
                        Where it begins.
                    </h1>
                    <p className={styles.heroSubhead}>
                        2–5 days | Your system | Starting at $2,000
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/apply" className={styles.btnPrimary}>Book Your Experience</Link>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.truthContent}>
                        <h2 className={styles.sectionTitleWhite}>
                            This isn't an evaluation.
                        </h2>
                        <div className={styles.truthBody}>
                            <p>
                                We're not here to grade you. We're here to understand you—how you think,
                                how you learn, how you move, how you already coach yourself.
                            </p>
                            <p className={styles.truthHighlight}>
                                That understanding becomes the foundation for everything.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Method Section */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Human. Athlete. Player.</h2>
                    </div>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard}>
                            <span className={styles.methodNumber}>01</span>
                            <h3 className={styles.methodTitle}>The Human</h3>
                            <p className={styles.methodBody}>
                                First, we learn you. How do you process information? What cues already work?
                                What's the voice in your head? We start here.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <span className={styles.methodNumber}>02</span>
                            <h3 className={styles.methodTitle}>The Athlete</h3>
                            <p className={styles.methodBody}>
                                Then, we study how you move. Your body is unique. We learn your natural patterns.
                                We apply universal principles to YOUR movement.
                            </p>
                        </div>
                        <div className={styles.methodCard}>
                            <span className={styles.methodNumber}>03</span>
                            <h3 className={styles.methodTitle}>The Player</h3>
                            <p className={styles.methodBody}>
                                Finally, we connect the dots. Pitching. Hitting. Throwing. The skills that
                                show up on game day—built on the layers beneath.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Leave With */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.stayingContent}>
                        <h2 className={styles.sectionTitleWhite}>Your system.</h2>
                        <p className={styles.textGray}>
                            Personal cues. Prompts that work for YOU. Movement patterns you can find
                            again—under pressure, on game day.
                        </p>
                        <p className={styles.highlightText}>
                            Not our system. Yours.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.footerCTA}>
                <div className={styles.container}>
                    <h2 className={styles.footerTitle}>This is the beginning.</h2>
                    <p className={styles.footerTagline}>Everything else builds from here.</p>
                    <Link href="/apply" className={styles.btnPrimary}>Book Your Experience</Link>
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
