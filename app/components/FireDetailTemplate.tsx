import Image from "next/image";
import Link from "next/link";
import type { FireDetailPage } from "../fire-systems/content";

type FireDetailTemplateProps = {
  page: FireDetailPage;
};

export function FireDetailTemplate({ page }: FireDetailTemplateProps) {
  return (
    <main className="site-shell">
      <section className="service-detail-bento">
        <article className="service-bento-card service-detail-copy-card">
          <p className="service-page-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="service-page-actions">
            <a className="button button-primary" href="/book-now">
              Contact DM Fire &amp; Security
            </a>
            <Link className="button button-secondary" href="/fire-systems">
              View All Fire Services
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>

        <div className="service-bento-card service-detail-image-card">
          <Image src={page.leadImage} alt={page.leadAlt} fill sizes="(max-width: 1024px) 100vw, 42vw" />
        </div>

        <article className="service-bento-card service-detail-focus-card">
          <p className="service-page-eyebrow">Service focus</p>
          <h2>{page.sectionTitle}</h2>
          {page.sectionBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="service-bento-card service-detail-list-card">
          <div className="service-detail-card-head">
            <p className="service-page-eyebrow">Included support</p>
            <h3>{page.bulletsTitle}</h3>
          </div>
          <ul className="service-detail-bullet-grid">
            {page.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="service-page-content service-detail-content">
        {page.features?.length ? (
          <section className="service-bento-card service-detail-feature-block">
            <div className="service-detail-card-head">
              <p className="service-page-eyebrow">Key capabilities</p>
              <h2>{page.featuresTitle}</h2>
            </div>
            <div className="service-page-mini-grid">
              {page.features.map((item) => (
                <article key={item} className="service-page-mini-card">
                  <span className="service-page-mini-dot" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="service-detail-secondary-grid">
          <article className="service-bento-card service-page-suitable">
            <div className="service-detail-card-head">
              <p className="service-page-eyebrow">Suitable for</p>
              <h2>Suitable for</h2>
            </div>
            <div className="service-page-pill-grid">
              {page.suitableFor.map((item) => (
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
