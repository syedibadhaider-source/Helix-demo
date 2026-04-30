"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteHeader } from "./SiteHeader";

export type PremiumServiceTheme = {
  category: string;
  categoryHref: string;
  accent: string;
  accentDark: string;
  label: string;
};

export type PremiumServicePageData = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string[];
  heroImage: string;
  heroAlt: string;
  sectionTitle: string;
  sectionBody: string[];
  servicesTitle: string;
  services: string[];
  featureCards: { title: string; text: string; icon: string }[];
  suitableFor: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Fire Systems", href: "/fire-systems" },
      { label: "Security Systems", href: "/security" },
      { label: "Compliance", href: "/compliance" },
      { label: "Maintenance", href: "/book-now" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "How We Work", href: "/about/how-we-work" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Environmental Commitments", href: "/about/environmental-commitments" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/book-now" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Your Responsibilities", href: "/resources/your-responsibilities" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Brochures", href: "/resources/brochures" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
];

const trustPoints = [
  {
    title: "Trusted Expertise",
    text: "Qualified engineers with practical experience across fire, security and compliance-led building systems.",
    icon: "badge",
  },
  {
    title: "Tailored Solutions",
    text: "Systems and service plans are shaped around your building, risks, usage and responsibilities.",
    icon: "clipboard",
  },
  {
    title: "Reliable Support",
    text: "Responsive support, planned maintenance and clear communication from one accountable team.",
    icon: "support",
  },
  {
    title: "Compliance Assured",
    text: "Work is delivered with documentation, standards and long-term service records in mind.",
    icon: "building",
  },
];

function Icon({ name, className = "", style }: { name: string; className?: string; style?: CSSProperties }) {
  const common = {
    className,
    style,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="m7.8 8 3.2 7M16.2 8 13 15M8 7h8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.5 2.8 8.4 7 10 4.2-1.6 7-5.5 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.8 20l3.8-1a8.5 8.5 0 1 0 4.4-15.5Z" />
          <path d="M9.2 8.6c.2 3.4 3 5.7 6.2 6.2l1-1.5-2.1-1-1 1a6.8 6.8 0 0 1-3-3l1-1-1-2.1-1.1 1.4Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 5h16v14H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "badge":
      return (
        <svg {...common}>
          <path d="M12 3 5 7v5c0 4 2.5 7.4 7 9 4.5-1.6 7-5 7-9V7l-7-4Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <path d="M9 4h6l1 2h3v15H5V6h3l1-2Z" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <path d="M4 13v4a2 2 0 0 0 2 2h2v-6H4ZM20 13v4a2 2 0 0 1-2 2h-2v-6h4Z" />
          <path d="M9 21h3a4 4 0 0 0 4-4" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 21V5l8-2v18" />
          <path d="M12 8h8v13" />
          <path d="M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2" />
        </svg>
      );
    default:
      return <Icon name="shield" className={className} />;
  }
}

function PremiumFooter() {
  return (
    <footer className="bg-[#071A33] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white p-3">
                <Image src="/helix-logo.png" alt="Helix logo" fill className="object-contain p-2" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold">Helix Fire & Security Ltd.</h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
                  Mayflower Close, Chandlers Ford SO53 4AR
                </p>
                <p className="mt-3 text-sm text-white/70">VAT No: 27501564915</p>
                <p className="text-sm text-white/70">Registration No: 2703471</p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <a href="tel:03706084350" className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 text-[#EF2B2D]" />
                0370 608 4350
              </a>
              <a href="mailto:info@helixfire.co.uk" className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 text-[#EF2B2D]" />
                info@helixfire.co.uk
              </a>
              <span className="flex items-center gap-3">
                <Icon name="support" className="h-4 w-4 text-[#EF2B2D]" />
                Customer Services
              </span>
              <span className="flex items-center gap-3">
                <Icon name="clock" className="h-4 w-4 text-[#EF2B2D]" />
                Open 24/7
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-extrabold uppercase text-white/55">{column.title}</h3>
                <div className="mt-5 flex flex-col gap-3 text-sm text-white/78">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className="transition hover:text-[#EF2B2D]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2025 Helix Fire & Security Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function getHeroImage(page: PremiumServicePageData, theme: PremiumServiceTheme) {
  if (page.heroImage) return page.heroImage;
  if (theme.category === "Security Systems") return "/security-card.png";
  if (theme.category === "Compliance") return "/compliance-service-card.png";
  return "/fire-alarm-service-hero.png";
}

export function PremiumServicePage({
  page,
  theme,
}: {
  page: PremiumServicePageData;
  theme: PremiumServiceTheme;
}) {
  const accentStyle = { "--service-accent": theme.accent, "--service-accent-dark": theme.accentDark } as CSSProperties;
  const heroImage = getHeroImage(page, theme);
  const checks = page.suitableFor.slice(0, 4);

  return (
    <div className="fire-alarm-premium min-h-screen bg-white text-[#0B172A]" style={accentStyle}>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[#071A33] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.16),transparent_32%)]" />
          <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-16">
            <div className="relative z-10">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/72">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href={theme.categoryHref} className="hover:text-white">{theme.category}</Link>
                <span>/</span>
                <span style={{ color: theme.accent }}>{page.title}</span>
              </nav>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-0.5 w-12" style={{ backgroundColor: theme.accent }} />
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">{page.eyebrow}</p>
              </div>

              <h1 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/78">
                {page.intro[0]}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/book-now" className="inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5" style={{ backgroundColor: theme.accent }}>
                  Request a Survey
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href="tel:03706084350" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/35 px-6 py-4 text-sm font-extrabold text-white transition hover:border-white hover:bg-white/10">
                  Book a Call
                  <Icon name="phone" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative z-10 min-h-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/35 lg:min-h-[440px]">
              <Image
                src={heroImage}
                alt={page.heroAlt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#071A33]/5 to-[#071A33]/34" />
            </div>
          </div>
        </section>

        <section className="-mt-10 relative z-20 px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {page.featureCards.map((feature) => (
              <article key={feature.title} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(7,26,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(7,26,51,0.14)]">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ backgroundColor: theme.accent }}>
                    <Icon name={feature.icon} className="h-7 w-7" />
                  </div>
                  <Icon name="arrow" className="mt-1 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: theme.accent }} />
                </div>
                <h2 className="mt-5 text-lg font-extrabold">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5B667A]">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-[#F6F8FB] p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <article className="rounded-2xl bg-white p-7 shadow-sm sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: theme.accent }}>Service Focus</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{page.sectionTitle}</h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-[#5B667A] sm:text-base">
                {page.sectionBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-7 grid gap-3 text-sm font-medium text-[#0B172A]">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full text-white" style={{ backgroundColor: theme.accent }}>
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg bg-white text-xl font-extrabold text-[#071A33] ring-1 ring-slate-200">
                  <span><span style={{ color: theme.accent }}>HE</span>LIX</span>
                </div>
                <p className="text-sm leading-6 text-[#5B667A]">
                  Our work is carried out with clear documentation, practical recommendations and UK building safety responsibilities in mind.
                </p>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: theme.accent }}>{page.servicesTitle}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {page.services.map((item) => (
                  <div key={item} className="flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(7,26,51,0.04)]">
                    <span className="h-5 w-1 shrink-0 rounded-full" style={{ backgroundColor: theme.accent }} />
                    <span className="text-sm font-semibold leading-5 text-[#0B172A]">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-center gap-5">
              <span className="h-px w-16 opacity-50" style={{ backgroundColor: theme.accent }} />
              <p className="text-center text-xs font-extrabold uppercase tracking-[0.14em]" style={{ color: theme.accent }}>Why Choose Helix</p>
              <span className="h-px w-16 opacity-50" style={{ backgroundColor: theme.accent }} />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
              {trustPoints.map((point) => (
                <article key={point.title} className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm lg:border-0 lg:shadow-none">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6F8FB]" style={{ color: theme.accent }}>
                    <Icon name={point.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5B667A]">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl bg-[#071A33] p-7 text-white shadow-[0_24px_70px_rgba(7,26,51,0.18)] sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:p-12">
            <div className="flex h-24 w-24 items-center justify-center rounded-full text-white ring-8" style={{ backgroundColor: theme.accent, boxShadow: `0 0 0 14px ${theme.accent}24` }}>
              <Icon name="phone" className="h-9 w-9" />
            </div>
            <div>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                {page.ctaText}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/book-now" className="inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5" style={{ backgroundColor: theme.accent }}>
                {page.ctaButton}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href="tel:03706084350" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/35 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-white/10">
                <Icon name="phone" className="h-4 w-4" />
                Call 0370 608 4350
              </a>
            </div>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}

export function FireAlarmPremiumPage() {
  return (
    <PremiumServicePage
      theme={{
        category: "Fire Systems",
        categoryHref: "/fire-systems",
        accent: "#EF2B2D",
        accentDark: "#B91C1C",
        label: "Fire",
      }}
      page={{
        slug: "fire-alarm-systems",
        title: "Fire Alarm Systems",
        eyebrow: "Early warning & dependable detection",
        intro: [
          "A reliable fire alarm system is essential for protecting people, property and business operations. At Helix, we design, install and maintain fire alarm systems that provide early warning, dependable performance and compliance support for a wide range of buildings.",
        ],
        heroImage: "/fire-alarm-service-hero.png",
        heroAlt: "Fire alarm control panel, smoke detector, call point, emergency light and extinguisher",
        sectionTitle: "Professional Fire Alarm Installation",
        sectionBody: [
          "Every fire alarm system should be designed around the layout, usage and risk level of the building. Our team assesses your premises and recommends the most suitable system to ensure the correct level of fire detection and warning coverage.",
          "We install systems for homes, commercial buildings, offices, shops, apartment blocks, care facilities, schools, warehouses and managed properties.",
        ],
        servicesTitle: "Our Fire Alarm Services Include",
        services: [
          "Fire alarm system design and planning",
          "Conventional fire alarm systems",
          "Addressable fire alarm systems",
          "Fire alarm panel installation",
          "Smoke detector and heat detector installation",
          "Manual call point installation",
          "Sounder and beacon installation",
          "System commissioning and certification",
          "Fire alarm upgrades and modifications",
          "Fault finding and repairs",
          "Scheduled servicing and maintenance",
          "Emergency callouts and support",
        ],
        featureCards: [
          { title: "Conventional Systems", text: "Ideal for smaller or simpler buildings divided into detection zones.", icon: "target" },
          { title: "Addressable Systems", text: "Advanced solutions for larger or more complex sites where devices need to be identified quickly.", icon: "network" },
          { title: "Maintenance & Compliance", text: "Regular maintenance keeps your system reliable, documented and ready to operate when needed.", icon: "shield" },
        ],
        suitableFor: ["BS 5839 compliant installations", "Experienced and accredited engineers", "Minimal disruption to your operations", "Ongoing support and maintenance"],
        ctaTitle: "Protect your property with a professionally installed fire alarm system.",
        ctaText: "Talk to our team today and arrange a free survey or request a quote.",
        ctaButton: "Request a Free Survey",
      }}
    />
  );
}
