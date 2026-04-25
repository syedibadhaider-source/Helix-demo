"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ServiceCardItem = {
  title: string;
  bodyLines: [string, string];
  imageClassName: string;
  bodyClassName: string;
  href?: string;
};

const serviceCards: ServiceCardItem[] = [
  {
    title: "Fire Systems",
    bodyLines: [
      "We provide a wide range of fire safety services, including alarms, sprinklers,",
      "emergency lighting, extinguishers, and compliance support.",
    ],
    imageClassName: "fire-card-image",
    bodyClassName: "service-card-body-fire",
    href: "/fire-systems",
  },
  {
    title: "Security",
    bodyLines: [
      "Our security offering includes CCTV, alarm monitoring, intruder alarms,",
      "access control, and joined-up protection for modern facilities.",
    ],
    imageClassName: "security-card-image",
    bodyClassName: "service-card-body-security",
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
              <div className="service-card-copy">
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
            <Link className="service-card service-card-link" href={service.href} key={service.title}>
              {cardContent}
            </Link>
          );
        }

        return (
          <article className="service-card" key={service.title}>
            {cardContent}
          </article>
        );
      })}
    </div>
  );
}
