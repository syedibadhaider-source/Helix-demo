import Image from "next/image";
import Link from "next/link";
import type { InfoPageData } from "../content-pages/content";

export function InfoPageTemplate({ page }: { page: InfoPageData }) {
  return (
    <main className="site-shell">
      <section className="info-page-bento">
        <article className="service-bento-card info-page-copy-card">
          <p className="service-page-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="service-page-actions">
            <a className="button button-primary" href="/book-now">
              Book Now
            </a>
            <Link className="button button-secondary" href="/">
              Back to Homepage
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>

        <div className="service-bento-card info-page-image-card">
          <Image src={page.image} alt={page.imageAlt} fill sizes="(max-width: 1024px) 100vw, 42vw" />
        </div>

        <div className="info-page-metrics-grid">
          {page.metrics.map((metric) => (
            <article key={metric.label} className="service-bento-card info-page-metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>

        <article className="service-bento-card info-page-overview-card">
          <div className="service-detail-card-head">
            <p className="service-page-eyebrow">Overview</p>
            <h2>{page.overviewTitle}</h2>
          </div>
          {page.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="service-bento-card info-page-highlights-card">
          <div className="service-detail-card-head">
            <p className="service-page-eyebrow">Highlights</p>
            <h3>{page.highlightsTitle}</h3>
          </div>
          <ul className="service-detail-bullet-grid">
            {page.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="service-page-content service-detail-content">
        <section className="service-bento-card service-page-feature-block">
          <div className="service-detail-card-head">
            <p className="service-page-eyebrow">Explore</p>
            <h2>{page.gridTitle}</h2>
            <p>{page.gridIntro}</p>
          </div>

          <div className="info-page-grid-links">
            {page.gridItems.map((item) =>
              item.href ? (
                <Link key={item.title} href={item.href} className="info-page-grid-card">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </Link>
              ) : (
                <article key={item.title} className="info-page-grid-card static">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section className="service-detail-secondary-grid">
          <article className="service-bento-card service-page-suitable">
            <div className="service-detail-card-head">
              <p className="service-page-eyebrow">Best fit</p>
              <h2>{page.fitTitle}</h2>
            </div>
            <div className="service-page-pill-grid">
              {page.fitItems.map((item) => (
                <span key={item} className="service-page-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="service-bento-card service-page-cta service-detail-cta-card">
            <div className="service-detail-card-head">
              <p className="service-page-eyebrow">Next step</p>
              <h2>{page.ctaTitle}</h2>
            </div>
            <p>{page.ctaText}</p>
            <a className="button button-primary" href="/book-now">
              {page.ctaButton}
            </a>
          </article>
        </section>
      </section>
    </main>
  );
}
