import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { fireSystemsPage } from "./content";

export default function FireSystemsPage() {
  return (
    <>
      <SiteHeader />

      <main className="site-shell">
        <section className="service-category-bento">
          <article className="service-bento-card service-category-copy-card">
            <p className="service-page-eyebrow">{fireSystemsPage.eyebrow}</p>
            <h1>{fireSystemsPage.title}</h1>
            {fireSystemsPage.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="service-category-actions">
              <a className="button button-primary" href="/book-now">
                Arrange a Survey
              </a>
              <a className="button button-secondary" href="/book-now">
                Request a Quote
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <div className="service-bento-card service-category-image-card">
            <Image
              src={fireSystemsPage.image}
              alt="Fire systems equipment and life safety devices"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <article className="service-bento-card service-category-story-card">
            <p className="service-page-eyebrow">Complete fire safety solutions</p>
            <h2>{fireSystemsPage.sectionTitle}</h2>
            {fireSystemsPage.sectionBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="service-bento-card service-category-benefits-card">
            <p className="service-page-eyebrow">We help you</p>
            <h3>Practical outcomes for every building</h3>
            <ul className="service-detail-bullet-grid">
              {fireSystemsPage.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="service-page-content">
          <section className="service-bento-card service-page-feature-block">
            <div className="service-detail-card-head">
              <p className="service-page-eyebrow">Fire services</p>
              <h2>Our Fire Systems Services</h2>
              <p>{fireSystemsPage.servicesIntro}</p>
            </div>
            <div className="fire-service-link-grid">
              {fireSystemsPage.services.map((service) => (
                <Link key={service.title} href={service.href} className="fire-service-link-card">
                  <div className="fire-service-link-icon">
                    <Image src={service.iconSrc} alt="" width={52} height={52} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="service-detail-secondary-grid service-detail-secondary-grid-wide">
            <article className="service-bento-card service-page-card">
              <div className="service-detail-card-head">
                <p className="service-page-eyebrow">Why Helix</p>
                <h2>{fireSystemsPage.whyTitle}</h2>
              </div>
              <p>{fireSystemsPage.whyBody}</p>
            </article>

            <article className="service-bento-card service-page-card service-page-card-list">
              <div className="service-detail-card-head">
                <p className="service-page-eyebrow">What clients get</p>
                <h3>Why clients choose us</h3>
              </div>
              <ul className="service-detail-bullet-grid">
                {fireSystemsPage.whyPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <section className="service-detail-secondary-grid">
            <article className="service-bento-card service-page-suitable">
              <div className="service-detail-card-head">
                <p className="service-page-eyebrow">Suitable for</p>
                <h2>Suitable for</h2>
              </div>
              <div className="service-page-pill-grid">
                {fireSystemsPage.suitableFor.map((item) => (
                  <span key={item} className="service-page-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="service-bento-card service-page-cta service-detail-cta-card">
              <div className="service-detail-card-head">
                <p className="service-page-eyebrow">Next step</p>
                <h2>{fireSystemsPage.ctaTitle}</h2>
              </div>
              <p>{fireSystemsPage.ctaText}</p>
              <a className="button button-primary" href="/book-now">
                {fireSystemsPage.ctaButton}
              </a>
            </article>
          </section>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
