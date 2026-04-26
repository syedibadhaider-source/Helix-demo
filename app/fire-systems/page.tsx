import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { fireSystemsPage } from "./content";

export default function FireSystemsPage() {
  return (
    <>
      <SiteHeader />

      <main className="info-page-shell">
        {/* 1. Image at Top */}
        <section className="clear-hero-image">
          <Image 
            src={fireSystemsPage.image} 
            alt="Fire systems equipment" 
            fill 
            priority
            className="info-main-image"
          />
        </section>

        {/* 2. Heading & 3. Text */}
        <section className="clear-header-section">
          <div className="info-container">
            <p className="info-eyebrow">{fireSystemsPage.eyebrow}</p>
            <h1>{fireSystemsPage.title}</h1>
            <div className="clear-header-intro">
              {fireSystemsPage.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Cards in One Line (Services) */}
        <section className="info-explore-section">
          <div className="info-service-grid single-line">
            {fireSystemsPage.services.map((service) => (
              <Link key={service.title} href={service.href} className="info-service-card">
                <div className="card-content">
                  <div className="icon-container" style={{ 
                    marginBottom: '32px', 
                    width: '64px', 
                    height: '64px', 
                    background: 'var(--bg-soft)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #f1f5f9'
                  }}>
                    <Image src={service.iconSrc} alt="" width={32} height={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="card-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. Banner (Overview / Highlights) */}
        <section className="info-content-section">
          <div className="info-container">
            <div className="info-main-grid">
              <article className="info-overview">
                <div className="section-header">
                  <span className="section-label">Complete Solutions</span>
                  <h2>{fireSystemsPage.sectionTitle}</h2>
                </div>
                <div className="info-text-content">
                  {fireSystemsPage.sectionBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <article className="info-highlights">
                <div className="section-header">
                  <span className="section-label">Our Benefits</span>
                  <h3>Key building outcomes</h3>
                </div>
                <ul className="info-highlights-list">
                  {fireSystemsPage.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="info-content-section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', margin: '0' }}>
          <div className="info-container">
            <div className="info-main-grid">
              <article className="info-overview">
                <div className="section-header">
                  <span className="section-label" style={{ background: '#fff', color: 'var(--red)' }}>The Helix Advantage</span>
                  <h2>{fireSystemsPage.whyTitle}</h2>
                </div>
                <div className="info-text-content">
                   <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--navy)' }}>{fireSystemsPage.whyBody}</p>
                </div>
              </article>

              <article className="info-highlights">
                <div className="section-header">
                  <span className="section-label" style={{ background: '#fff' }}>Client Choice</span>
                  <h3>Why clients choose us</h3>
                </div>
                <ul className="info-highlights-list">
                  {fireSystemsPage.whyPoints.map((item) => (
                    <li key={item} style={{ background: '#fff' }}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* 6. CTA Banner */}
        <section className="info-footer-cta">
          <div className="info-container">
            <div className="info-cta-card">
              <div className="info-cta-content">
                <h2>{fireSystemsPage.ctaTitle}</h2>
                <div className="info-cta-main">
                  <p>{fireSystemsPage.ctaText}</p>
                  <a className="button button-primary white" href="/book-now">
                    {fireSystemsPage.ctaButton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


      <SiteFooter />
    </>
  );
}
