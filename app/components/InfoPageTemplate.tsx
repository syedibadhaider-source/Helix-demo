import Image from "next/image";
import Link from "next/link";
import type { InfoPageData } from "../content-pages/content";

export function InfoPageTemplate({ page }: { page: InfoPageData }) {
  return (
    <main className="info-page-shell">
      {/* 1. Image at Top */}
      <section className="clear-hero-image">
        <Image 
          src={page.image} 
          alt={page.imageAlt} 
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

      {/* 4. Cards in One Line */}
      <section className="info-explore-section">
        <div className="info-service-grid single-line">
          {page.gridItems.map((item) =>
            item.href ? (
              <Link key={item.title} href={item.href} className="info-service-card">
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="card-arrow">↗</span>
              </Link>
            ) : (
              <article key={item.title} className="info-service-card static">
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* 5. Banner (Overview / Highlights) */}
      <section className="info-content-section">
        <div className="info-container">
          <div className="info-main-grid">
            <article className="info-overview">
              <div className="section-header">
                <span className="section-label">Overview</span>
                <h2>{page.overviewTitle}</h2>
              </div>
              <div className="info-text-content">
                {page.overview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="info-highlights">
              <div className="section-header">
                <span className="section-label">Highlights</span>
                <h3>{page.highlightsTitle}</h3>
              </div>
              <ul className="info-highlights-list">
                {page.highlights.map((item) => (
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
              <h2>{page.fitTitle}</h2>
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

