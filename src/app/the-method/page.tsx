import Link from "next/link";
import styles from "../home.module.css";

export default function TheMethod() {
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
                        Human. Athlete. Player.
                    </h1>
                    <p className={styles.heroSubhead}>
                        In that order. Every time.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/apply" className={styles.btnPrimary}>Experience It</Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.truthContent}>
                        <h2 className={styles.sectionTitleWhite}>
                            We start with you.
                        </h2>
                        <div className={styles.truthBody}>
                            <p>
                                Most programs start with the sport. We start with the person.
                            </p>
                            <p>
                                Before we look at your swing, we learn how you think. Before we change
                                your mechanics, we understand your patterns. Before we coach you, we
                                learn the voice you already use to coach yourself.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Science Section */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Universal principles. Individual application.</h2>
                        <p className={styles.sectionDesc}>
                            Your body is designed to move a certain way. There are universal principles of
                            human movement—how force transfers, how the body sequences, how power flows.
                            We've mastered them. And we apply them to YOU—your body, your patterns, your mind.
                        </p>
                        <p className={styles.sectionDesc} style={{ marginTop: '1rem', fontWeight: 600 }}>
                            That's the unlock.
                        </p>
                    </div>
                </div>
            </section>

            {/* Three Layers */}
            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.methodGrid}>
                        <div className={styles.methodCard} style={{ background: '#111', border: '1px solid #222' }}>
                            <span className={styles.methodNumber}>01</span>
                            <h3 className={styles.methodTitle} style={{ color: '#fff' }}>The Human</h3>
                            <p className={styles.methodBody} style={{ color: '#999' }}>
                                How do you process information? What cues already work for you? What's the
                                voice in your head when you're coaching yourself? Your nervous system is
                                the foundation. We start here.
                            </p>
                        </div>
                        <div className={styles.methodCard} style={{ background: '#111', border: '1px solid #222' }}>
                            <span className={styles.methodNumber}>02</span>
                            <h3 className={styles.methodTitle} style={{ color: '#fff' }}>The Athlete</h3>
                            <p className={styles.methodBody} style={{ color: '#999' }}>
                                Your body is unique. We study your natural movement patterns—not a textbook
                                model. We work with your physiology, not against it. When movement is right,
                                it feels effortless. That's the goal.
                            </p>
                        </div>
                        <div className={styles.methodCard} style={{ background: '#111', border: '1px solid #222' }}>
                            <span className={styles.methodNumber}>03</span>
                            <h3 className={styles.methodTitle} style={{ color: '#fff' }}>The Player</h3>
                            <p className={styles.methodBody} style={{ color: '#999' }}>
                                Now we connect the dots. Pitching. Hitting. Throwing. The skills that show
                                up on game day—built on the layers beneath. You leave with cues that are
                                yours. Patterns you can find again under pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works */}
            <section className={styles.sectionBlack}>
                <div className={styles.container}>
                    <div className={styles.stayingContent}>
                        <h2 className={styles.sectionTitleWhite}>We coach you in your voice.</h2>
                        <p className={styles.textGray}>
                            We learn the voice in your head—the one you already use to coach yourself—and
                            we coach you in it.
                        </p>
                        <p className={styles.highlightText}>
                            That's why adjustments stick. That's why they show up on game day. Not our cues. Yours.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.footerCTA}>
                <div className={styles.container}>
                    <h2 className={styles.footerTitle}>Ready to feel it?</h2>
                    <p className={styles.footerTagline}>Results you have to feel to believe.</p>
                    <Link href="/apply" className={styles.btnPrimary}>Book Your 108 Experience</Link>
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
