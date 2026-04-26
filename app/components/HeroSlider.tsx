"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  title: [string, string];
  copy: [string, string];
  cta: string;
  href: string;
  imageClassName: string;
};

const slides: HeroSlide[] = [
  {
    title: ["Fire Protection Systems", "Built for Safer Buildings"],
    copy: [
      "Professional fire alarms, emergency lighting, extinguishers and",
      "fire safety systems designed, installed and maintained with care.",
    ],
    cta: "Explore Fire Systems",
    href: "/fire-systems",
    imageClassName: "hero-slide-fire",
  },
  {
    title: ["Smarter Security", "for Complete Peace of Mind"],
    copy: [
      "CCTV, intruder alarms, access control and monitoring solutions",
      "installed to protect your property around the clock.",
    ],
    cta: "Explore Security Systems",
    href: "/security",
    imageClassName: "hero-slide-security",
  },
  {
    title: ["Compliance Support", "That Keeps You Protected"],
    copy: [
      "Clear fire safety reporting, risk assessments and maintenance",
      "documentation to help your business stay compliant and prepared.",
    ],
    cta: "Explore Compliance",
    href: "/compliance",
    imageClassName: "hero-slide-compliance",
  },
];

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider" id="top" aria-label="Featured services">
      <div className="hero-slider-shell">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={slide.cta}
              className={`hero-slide${isActive ? " is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <div className={`hero-slide-bg ${slide.imageClassName}`} />
              <div className="hero-slide-overlay" />

              <div className="hero-slide-content">
                <h1>
                  <span>{slide.title[0]}</span>
                  <span>{slide.title[1]}</span>
                </h1>
                <p>
                  <span>{slide.copy[0]}</span>
                  <span>{slide.copy[1]}</span>
                </p>
                <div className="hero-slide-actions">
                  <Link className="button button-primary" href={slide.href}>
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}

        <div className="hero-slider-dots" aria-hidden="true">
          {slides.map((slide, index) => (
            <span
              key={slide.cta}
              className={`hero-slider-dot${index === activeIndex ? " is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
