"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type HomeTestimonial = {
  company: string;
  quote: string;
  person: string;
  role: string;
  image: string;
};

const testimonials: HomeTestimonial[] = [
  {
    company: "Mitchells & Butlers",
    quote:
      "Helix Fire & Security have been dependable from survey stage through maintenance support. Communication is clear, reports are organised and the standard of delivery remains consistently strong across our sites.",
    person: "Pat Murphy",
    role: "Area Building Manager, Mitchells & Butlers",
    image:
      "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Restaurant.png",
  },
  {
    company: "Urban Workplace Group",
    quote:
      "The Helix team are responsive, practical and easy to work with. Whether we need planned servicing or urgent support, they keep the process calm, efficient and well documented.",
    person: "Sophie Harrington",
    role: "Facilities Lead, Urban Workplace Group",
    image:
      "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Tech HQ and glass corridor 2.png",
  },
  {
    company: "Northbridge Leisure",
    quote:
      "We value the joined-up approach Helix bring to fire and security. Their technical team understand multi-site operations and provide solutions that work well in live environments.",
    person: "Chris Benton",
    role: "Operations Director, Northbridge Leisure",
    image:
      "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/High End Cafe.png",
  },
  {
    company: "Meridian Estates",
    quote:
      "From compliance reporting to reactive attendance, Helix give us confidence that the estate is being looked after properly. The consistency of service has made a real difference to our team.",
    person: "Emma Collins",
    role: "Property Compliance Manager, Meridian Estates",
    image:
      "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Hotel.png",
  },
];

export function HomeTestimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = useMemo(() => {
    return [0, 1].map((offset) => testimonials[(startIndex + offset) % testimonials.length]);
  }, [startIndex]);

  const showPrevious = () => {
    setStartIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-shell">
        <div className="testimonials-heading-row">
          <h2>What our clients say</h2>
          <div className="testimonial-controls">
            <button
              type="button"
              className="testimonial-control"
              onClick={showPrevious}
              aria-label="Show previous testimonials"
            >
              ←
            </button>
            <button
              type="button"
              className="testimonial-control"
              onClick={showNext}
              aria-label="Show next testimonials"
            >
              →
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {visibleTestimonials.map((item) => (
            <article className="testimonial-card" key={`${item.company}-${item.person}`}>
              <div className="testimonial-image-wrap">
                <Image
                  src={item.image}
                  alt={item.company}
                  width={720}
                  height={520}
                  className="testimonial-image"
                />
              </div>

              <div className="testimonial-copy">
                <p className="testimonial-company">{item.company}</p>
                <blockquote>{item.quote}</blockquote>

                <div className="testimonial-meta">
                  <p>{item.person}</p>
                  <span>{item.role}</span>
                </div>

                <a className="testimonial-button" href="/book-now">
                  Book Consultation
                  <span className="homepage-inline-arrow" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
