"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ServiceCardItem = {
  title: string;
  bodyLines: [string, string];
  imageClassName: string;
  bodyClassName: string;
  cardClassName?: string;
  copyClassName?: string;
  href?: string;
};

const serviceCards: ServiceCardItem[] = [
  {
    title: "Fire Systems",
    bodyLines: [
      "Fire alarms, sprinklers, emergency lighting,",
      "extinguishers and compliance support.",
    ],
    imageClassName: "fire-card-image",
    bodyClassName: "service-card-body-fire",
    cardClassName: "service-card-top",
    copyClassName: "service-card-copy-top",
    href: "/fire-systems",
  },
  {
    title: "Security Systems",
    bodyLines: [
      "CCTV, intruder alarms, access control and monitoring,",
      "for practical protection across modern facilities.",
    ],
    imageClassName: "security-card-image",
    bodyClassName: "service-card-body-security",
    cardClassName: "service-card-top",
    copyClassName: "service-card-copy-top",
    href: "/security",
  },
  {
    title: "Compliance",
    bodyLines: [
      "Certification, reporting, maintenance records,",
      "and compliance oversight across your portfolio.",
    ],
    imageClassName: "compliance-card-image",
    bodyClassName: "service-card-body-compliance",
    cardClassName: "service-card-top",
    copyClassName: "service-card-copy-top",
    href: "/compliance",
  },
  {
    title: "Emergency Systems",
    bodyLines: [
      "We provide emergency lighting, EVC systems, nurse call support,",
      "and escape route solutions that help people respond and evacuate safely.",
    ],
    imageClassName: "emergency-card-image",
    bodyClassName: "service-card-body-emergency",
    cardClassName: "service-card-bottom",
    href: "/emergency-systems",
  },
  {
    title: "Smart Systems",
    bodyLines: [
      "We support smart automation, Wi-Fi and network infrastructure,",
      "minor electrical works, and practical building-ready connected systems.",
    ],
    imageClassName: "smart-card-image",
    bodyClassName: "service-card-body-smart",
    cardClassName: "service-card-bottom",
    href: "/smart-systems",
  },
];

export function HomeServiceCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-grid" ref={sectionRef}>
      {serviceCards.map((service) => {
        const cardContent = (
          <>
            <div className={`service-card-image-shell${isInView ? " is-inview" : ""}`}>
              <div className={`service-card-image ${service.imageClassName}`} />
            </div>
            <div className={`service-card-body ${service.bodyClassName}`}>
              <div className={`service-card-copy${service.copyClassName ? ` ${service.copyClassName}` : ""}`}>
                <h3>{service.title}</h3>
                <p>
                  <span>{service.bodyLines[0]}</span>
                  <span>{service.bodyLines[1]}</span>
                </p>
              </div>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </>
        );

        if (service.href) {
          return (
            <Link
              className={`service-card service-card-link${service.cardClassName ? ` ${service.cardClassName}` : ""}`}
              href={service.href}
              key={service.title}
            >
              {cardContent}
            </Link>
          );
        }

        return (
          <article className={`service-card${service.cardClassName ? ` ${service.cardClassName}` : ""}`} key={service.title}>
            {cardContent}
          </article>
        );
      })}
    </div>
  );
}
