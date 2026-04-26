import Image from "next/image";
import Link from "next/link";
import type { FireDetailPage } from "../fire-systems/content";

type FireDetailTemplateProps = {
  page: FireDetailPage;
};

export function FireDetailTemplate({ page }: FireDetailTemplateProps) {
  return (
    <main className="info-page-shell">
      {/* 1. Image at Top */}
      <section className="clear-hero-image">
        <Image 
          src={page.leadImage} 
          alt={page.leadAlt} 
          fill 
          priority
          className="info-main-image"
        />
      </section>

      {/* 2. Heading & 3. Text */}
      <section className="clear-header-section">
        <div className="info-container">
          <p className="info-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <div className="clear-header-intro">
            {page.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cards in One Line (Features) */}
      {page.features?.length ? (
        <section className="info-explore-section">
          <div className="info-service-grid single-line">
            {page.features.map((item, i) => (
              <article key={i} className="info-service-card static">
                <div className="card-content">
                  <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)' }}>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* 5. Banner (Service Focus / Support) */}
      <section className="info-content-section">
        <div className="info-container">
          <div className="info-main-grid">
            <article className="info-overview">
              <div className="section-header">
                <span className="section-label">Service Focus</span>
                <h2>{page.sectionTitle}</h2>
              </div>
              <div className="info-text-content">
                {page.sectionBody.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="info-highlights">
              <div className="section-header">
                <span className="section-label">Included Support</span>
                <h3>{page.bulletsTitle}</h3>
              </div>
              <ul className="info-highlights-list">
                {page.bullets.map((item) => (
                  <li key={item}>{item}</li>
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
              <h2>{page.ctaTitle}</h2>
              <div className="info-cta-main">
                <p>{page.ctaText}</p>
                <a className="button button-primary white" href="/book-now">
                  {page.ctaButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

