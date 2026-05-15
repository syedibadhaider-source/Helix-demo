import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "./components/HeroSlider";
import { HomeServiceCards } from "./components/HomeServiceCards";
import { HomeTestimonials } from "./components/HomeTestimonials";
import { HomeChatWidget } from "./components/HomeChatWidget";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

type FireMenu = {
  type: "fire";
  featureCards: {
    title: string;
    text: string;
    active?: boolean;
  }[];
  links: string[];
};

type ListMenu = {
  type: "list";
  links: string[];
};

type NavItem = {
  label: string;
  href: string;
  menu?: FireMenu | ListMenu;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Fire Systems",
    href: "#services",
    menu: {
      type: "fire",
      featureCards: [
        {
          title: "Fire Detection",
          text: "Indentifying potential fire hazards.",
          active: true,
        },
        {
          title: "Fire Suppression",
          text: "Extinguish fires and minimise damage.",
        },
        {
          title: "Inspection and Protection",
          text: "Assessments and ongoing maintenance.",
        },
      ],
      links: [
        "Fire Alarm Systems",
        "Gent Fire Alarm Systems",
        "Notifier Fire Alarm Systems",
        "Evacuation Alert Systems",
      ],
    },
  },
  {
    label: "Security",
    href: "#security",
    menu: {
      type: "list",
      links: [
        "CCTV Systems",
        "Intruder Alarm Monitoring",
        "Intruder Alarm",
        "Access Control Systems",
      ],
    },
  },
  {
    label: "Resources",
    href: "#resources",
    menu: {
      type: "list",
      links: [
        "Your Responsibilities",
        "Case Studies",
        "Brochures",
        "Downloads",
        "News",
        "FAQs",
      ],
    },
  },
  {
    label: "Our Company",
    href: "#our-company",
    menu: {
      type: "list",
      links: [
        "Policies",
        "Our Accreditations & Memberships",
        "Frameworks",
        "Videos",
        "Careers",
        "Acquisitions",
        "Alarm Receiving Centre (ARC)",
        "Fire and Security Training Academy",
        "Consultancy",
      ],
    },
  },
];

type ServiceIconKind =
  | "alarm"
  | "sprinkler"
  | "emergency"
  | "extinguisher"
  | "riser"
  | "kitchen"
  | "cctv"
  | "keypad";

type PrimaryService = {
  title: string;
  iconSrc: string;
  tone: "red" | "blue";
  href: string;
};

const primaryServices: PrimaryService[] = [
  {
    title: "Fire Alarm Systems",
    tone: "red",
    iconSrc: "/service-icons/fire-alarm-systems.svg",
    href: "/fire-systems/fire-alarm-systems",
  },
  {
    title: "AOV Smoke Ventilation",
    tone: "blue",
    iconSrc: "/service-icons/aov-smoke-ventilation-systems.svg",
    href: "/fire-systems/aov-smoke-ventilation-systems",
  },
  {
    title: "CCTV Surveillance",
    tone: "red",
    iconSrc: "/service-icons/cctv-surveillance.svg",
    href: "/security/cctv-surveillance",
  },
  {
    title: "Intruder Alarms",
    tone: "blue",
    iconSrc: "/service-icons/intruder-alarms-new.svg",
    href: "/security/intruder-alarms",
  },
  {
    title: "Access Control",
    tone: "red",
    iconSrc: "/service-icons/access-control.svg",
    href: "/security/access-control",
  },
  {
    title: "Intercom Systems",
    tone: "blue",
    iconSrc: "/service-icons/intercom-systems.svg",
    href: "/security/intercom-systems",
  },
  {
    title: "Emergency Lighting",
    tone: "red",
    iconSrc: "/service-icons/emergency-lighting-new.svg",
    href: "/emergency-systems/emergency-lighting",
  },
  {
    title: "Wi-Fi, Network & IP",
    tone: "blue",
    iconSrc: "/service-icons/wi-fi-network-ip-solutions.svg",
    href: "/smart-systems/wi-fi-network-ip-solutions",
  },
  {
    title: "Certification & Compliance",
    tone: "red",
    iconSrc: "/service-icons/certification-compliance.svg",
    href: "/compliance/certification-compliance",
  },
  {
    title: "Safety Inspections & Testing",
    tone: "blue",
    iconSrc: "/service-icons/safety-inspections-testing.svg",
    href: "/compliance/safety-inspections-testing",
  },
] as const;

type ValueIconKind = "reliable" | "trusted" | "knowledgeable" | "speed" | "innovative" | "safety";

const companyValues: {
  title: string;
  icon: ValueIconKind;
  points: string[];
}[] = [
  {
    title: "Dependable Support",
    icon: "reliable",
    points: [
      "We are committed to being there when our customers need us most. From urgent callouts to planned maintenance, Helix provides a clear, reliable and professional service all year round.",
      "We take time to understand each property, system and responsibility so our support is practical, well organised and built around the customer’s needs.",
    ],
  },
  {
    title: "Trust & Responsibility",
    icon: "trusted",
    points: [
      "We believe safety work should be carried out with honesty, care and accountability. Our team focuses on doing the right thing, keeping customers informed and helping them meet their fire, security and compliance responsibilities.",
      "We aim to build long term relationships through clear communication, consistent workmanship and dependable aftercare.",
    ],
  },
  {
    title: "Technical Expertise",
    icon: "knowledgeable",
    points: [
      "Our engineers and support team bring practical knowledge across fire systems, security systems, emergency systems and compliance support.",
      "We continue to improve our skills, processes and system knowledge so customers receive advice and service they can trust.",
    ],
  },
  {
    title: "Fast Response",
    icon: "speed",
    points: [
      "When safety or security systems need attention, speed matters. Helix works to respond quickly, resolve issues efficiently and reduce disruption for homes, businesses and managed properties.",
      "Our service approach is built around clear updates, practical solutions and responsive customer support.",
    ],
  },
  {
    title: "Smarter Solutions",
    icon: "innovative",
    points: [
      "We use modern systems, joined up thinking and efficient processes to make fire and security management easier for our customers.",
      "Where possible, we recommend smarter solutions that save time, improve visibility and support better long term system performance.",
    ],
  },
  {
    title: "Safety First",
    icon: "safety",
    points: [
      "Every service we provide is guided by the safety of people, property and daily operations.",
      "From installation to maintenance and compliance records, our focus is always on protecting what matters and helping customers stay prepared.",
    ],
  },
];

function ServiceIcon({ kind }: { kind: ServiceIconKind }) {
  switch (kind) {
    case "alarm":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 33a14 14 0 1 1 28 0v6H18z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M25 43h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M30 49h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <circle cx="32" cy="27" r="3.5" fill="currentColor" />
          <path d="M14 30h5M45 30h5M20 19l4 3M44 19l-4 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" opacity=".35" />
        </svg>
      );
    case "sprinkler":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 18h28v6H18z" fill="currentColor" />
          <path d="M30 24h4v9h-4z" fill="currentColor" />
          <path d="M21 39l-3 5M29 39l-1 7M35 39l1 7M43 39l3 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M25 33h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" opacity=".35" />
        </svg>
      );
    case "emergency":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 42l10 6 6-11h20V18H34l-8 8h-7l-5 8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5" />
          <circle cx="32" cy="17" r="4.5" fill="currentColor" />
          <path d="M44 28h9M49 24l5 4-5 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </svg>
      );
    case "extinguisher":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M28 14h8v7h-8z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M24 21h16v29H24z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M36 17h8a4 4 0 0 1 4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M30 26v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" opacity=".35" />
        </svg>
      );
    case "riser":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M16 44h32" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M22 44l10-20 10 20" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5" />
          <path d="M27 24h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
        </svg>
      );
    case "kitchen":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 20h26v6H18z" fill="currentColor" />
          <path d="M27 12h8v8h-8z" fill="currentColor" />
          <path d="M22 33c0 8-3 11-3 17M32 33c0 8-3 11-3 17M42 33c0 8-3 11-3 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
        </svg>
      );
    case "cctv":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 27l24-10 8 10-24 10z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5" />
          <path d="M42 23l8 11" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M23 39h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
        </svg>
      );
    case "keypad":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 14h28v18H18z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <circle cx="25" cy="21" r="2" fill="currentColor" />
          <circle cx="32" cy="21" r="2" fill="currentColor" />
          <circle cx="39" cy="21" r="2" fill="currentColor" />
          <path d="M28 36l7 7 13-14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </svg>
      );
  }
}

function ValueIcon({ kind }: { kind: ValueIconKind }) {
  switch (kind) {
    case "reliable":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 8l18 7v15c0 10-7 19-18 26C21 49 14 40 14 30V15z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="32" cy="29" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M32 23v7l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        </svg>
      );
    case "trusted":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 33l8-8c2-2 6-2 8 0l12 12c2 2 2 6 0 8l-4 4c-2 2-6 2-8 0l-16-16c-2-2-2-6 0-8z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M28 22l6-6c2-2 6-2 8 0l10 10c2 2 2 6 0 8l-6 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
    case "knowledgeable":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M24 10l3 5 6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1zM42 28l4 7 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 42a18 18 0 1 1 36 0H14z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M32 42l11-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        </svg>
      );
    case "innovative":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 10a14 14 0 0 1 9 25v7H23v-7a14 14 0 0 1 9-25z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M25 48h14M26 54h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
          <path d="M32 19v13M25 24l7 8 7-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      );
    case "safety":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 L12 14 V26 C12 40 20 52 32 58 C44 52 52 40 52 26 V14 L32 6 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M24 32 L29 37 L41 25" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <HeroSlider />

      <section className="services-overview" id="services">
        <div className="services-intro">
          <h2>
            Consultation to <span>completion</span>, all in <span>house.</span>
          </h2>
          <p>
            <span>
              We set ourselves apart through fully integrated delivery across fire protection, security
              systems, and compliance support,
            </span>
            <span>
              giving clients one accountable team from survey through installation, maintenance, and
              reporting.
            </span>
          </p>
        </div>

        <HomeServiceCards />
      </section>

      <section className="primary-services-section" id="our-company">
        <div className="primary-services-intro">
          <h2>Our Primary Services</h2>
          <p className="!max-w-[80ch]">
            <span className="md:block">Providing complete fire safety, security, and compliance services — from fire alarm </span>
            <span className="md:block">installation, servicing, monitoring, and clear zone plans, to modern CCTV, access control, </span>
            <span className="md:block">and intruder alarm systems. We also support your ongoing compliance through inspections, </span>
            <span className="md:block">testing, certification, and maintenance, helping keep your premises safe, compliant, and fully operational — all delivered by our in-house team.</span>
          </p>
        </div>

        {/* Desktop View */}
        <div className="primary-services-grid !hidden md:!grid">
          {primaryServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`primary-service-card tone-${service.tone}`}
            >
              <span className="card-launch" aria-hidden="true" />
              <span
                className="service-icon"
                aria-hidden="true"
                style={{ ["--icon-mask" as any]: `url('${service.iconSrc}')` }}
              />
              <h3>{service.title}</h3>
            </Link>
          ))}
        </div>

        {/* Mobile View (Marquee) */}
        <div className="marquee-wrapper block md:hidden overflow-hidden relative w-full pt-2 pb-4" style={{ marginLeft: "calc(var(--page-gutter) * -1)", width: "100vw" }}>
          <style>{`
            @keyframes scroll-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 6px)); }
            }
            .animate-scroll-marquee {
              animation: scroll-marquee 20s linear infinite;
            }
            .marquee-wrapper:hover .animate-scroll-marquee,
            .animate-scroll-marquee:hover {
              -webkit-animation-play-state: paused !important;
              animation-play-state: paused !important;
            }
            .mobile-card-tone-red:hover .mobile-icon { background-color: var(--red); }
            .mobile-card-tone-blue:hover .mobile-icon { background-color: #2d66d5; }
          `}</style>
          <div className="flex gap-3 w-max animate-scroll-marquee" style={{ paddingLeft: "var(--page-gutter)" }}>
            {[...primaryServices, ...primaryServices].map((service, index) => (
              <Link
                key={`${service.title}-${index}`}
                href={service.href}
                className={`mobile-card-tone-${service.tone} relative flex flex-col justify-start min-h-[150px] w-[calc(50vw-20px)] shrink-0 p-4 rounded-2xl bg-white text-[#34383c] shadow-[0_10px_24px_rgba(10,17,20,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(10,17,20,0.12)]`}
              >
                <span className="card-launch absolute top-3 right-3 flex items-center justify-center w-5 h-5 text-[#34383c]/40" aria-hidden="true" />
                <span
                  className="mobile-icon mb-3 w-[34px] h-[34px] bg-[var(--navy)] transition-colors duration-200"
                  aria-hidden="true"
                  style={{ 
                    WebkitMaskImage: `url('${service.iconSrc}')`,
                    maskImage: `url('${service.iconSrc}')`,
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center'
                  }}
                />
                <h3 className="mt-auto font-heading text-[0.95rem] leading-[1.15] font-extrabold tracking-tight">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance-feature-section">
        <div className="compliance-feature-card">
          <div className="compliance-copy">
            <span className="compliance-kicker">For compliance</span>
            <h2>
              <span>Your</span>
              <span>Responsibility</span>
              <span>to Fire Safety</span>
            </h2>
            <p>
              <span>
                A fire risk assessment is a methodical investigation of a business premises,
              </span>
              <span>
                highlighting the fire risks and safety levels of the surroundings.
              </span>
              <span>
                There are many factors the Responsible Person must consider in this role to
                ensure compliance with
              </span>
              <span>The Regulatory Reform (Fire Safety) Order 2005.</span>
            </p>
            <a className="compliance-button" href="/book-now">
              Your Responsibilities
              <span className="homepage-inline-arrow" aria-hidden="true" />
            </a>
          </div>

          <div className="compliance-video-shell">
            <video
              className="compliance-video"
              controls
              playsInline
              preload="metadata"
              poster="/images/001 - FIRE SYSTEMS/004 - Fire Safety Signage/Fire safety signage in University Library.png"
            >
              <source
                src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-shell">
          <h2>Our Values</h2>
          <div className="values-list">
            {companyValues.map((value) => (
              <details key={value.title} className="value-item">
                <summary className="value-summary">
                  <div className="value-title-wrap">
                    <span className="value-icon">
                      <ValueIcon kind={value.icon} />
                    </span>
                    <span className="value-title">{value.title}</span>
                  </div>
                  <span className="value-chevron" aria-hidden="true">
                    ⌃
                  </span>
                </summary>
                <div className="value-content">
                  <ul>
                    {value.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-20 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-red/10 text-red font-heading text-sm font-bold tracking-wider uppercase mb-4">
              What We Value
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy">
              Our Core Commitments
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              We provide an unrivalled quality of service with confidence, driven by integrity, honesty, and an unwavering focus on our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">
            
            {/* Card 1: 24/7 (Red) */}
            <article className="mosaic-card mosaic-card-red col-span-1 lg:col-span-1 shadow-sm transition-transform hover:-translate-y-1 flex flex-col justify-center items-center min-h-[280px] !p-8">
              <p className="uppercase tracking-widest !text-sm mb-4">We are here for our customers</p>
              <h3 className="!mt-0">
                <span>24 hrs</span>
                <span>365 days</span>
              </h3>
            </article>

            {/* Card 2: Photo Card */}
            <article className="mosaic-card mosaic-card-photo col-span-1 md:col-span-1 lg:col-span-2 shadow-sm transition-transform hover:-translate-y-1 group min-h-[280px] !p-8 flex flex-col justify-end">
              <div className="mosaic-photo-overlay transition-colors group-hover:bg-black/20" />
              <p className="!text-xl md:!text-2xl !max-w-lg !font-medium leading-snug">
                We provide an unrivalled quality of service with confidence and we shape our
                services according to our customer's needs.
              </p>
            </article>

            {/* Card 3: Values List (White) */}
            <article className="mosaic-card mosaic-card-light col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 shadow-sm transition-transform hover:-translate-y-1 flex flex-col min-h-[280px] !bg-white !border !border-slate-200 relative overflow-hidden group">
              {/* Image filling top empty space */}
              <div className="relative w-full h-48 lg:h-56 overflow-hidden shrink-0">
                <Image 
                  src="/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Tech HQ and glass corridor 2.png" 
                  alt="Helix corporate values" 
                  fill 
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-50/50 rounded-full border border-slate-100/50 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 bg-white/50 rounded-full border border-slate-100/50 shadow-sm" />
              </div>

              <div className="relative z-10 w-full flex flex-col h-full text-left px-8 pb-8 pt-4">
                <p className="mosaic-label !mb-6 uppercase tracking-wider text-slate-500 font-bold !text-left !ml-0">We act with:</p>
                
                <ul className="mosaic-list flex-1 flex flex-col justify-end space-y-8">
                  <li className="!block !mb-0 w-full group/item">
                    <div className="flex items-center justify-start gap-4 w-full mb-1">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div className="flex flex-col items-start !text-left w-full">
                        <strong className="!text-3xl lg:!text-4xl text-red leading-none mb-1 group-hover/item:translate-x-1 transition-transform origin-left inline-block !text-left">Integrity</strong>
                        <span className="!text-slate-500 !font-medium !text-sm !text-left">doing what&apos;s right</span>
                      </div>
                    </div>
                  </li>
                  
                  <li className="!block !mb-0 w-full group/item">
                    <div className="flex items-center justify-start gap-4 w-full mb-1">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                      </div>
                      <div className="flex flex-col items-start !text-left w-full">
                        <strong className="!text-3xl lg:!text-4xl text-red leading-none mb-1 group-hover/item:translate-x-1 transition-transform origin-left inline-block !text-left">Honesty</strong>
                        <span className="!text-slate-500 !font-medium !text-sm !text-left">fulfilling obligations</span>
                      </div>
                    </div>
                  </li>
                  
                  <li className="!block !mb-0 w-full group/item">
                    <div className="flex items-center justify-start gap-4 w-full mb-1">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-700 shrink-0 shadow-sm border border-slate-200">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                      </div>
                      <div className="flex flex-col items-start !text-left w-full">
                        <strong className="!text-3xl lg:!text-4xl text-red leading-none mb-1 group-hover/item:translate-x-1 transition-transform origin-left inline-block !text-left">Pride</strong>
                        <span className="!text-slate-500 !font-medium !text-sm !text-left">nurturing long-term relationships</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </article>

            {/* Card 4: Coverage Map */}
            <article className="mosaic-card mosaic-card-map col-span-1 lg:col-span-1 shadow-sm transition-transform hover:-translate-y-1 !bg-[#204159] !bg-none min-h-[280px] !p-8 flex flex-col justify-end">
              <div className="mosaic-map-blob mosaic-map-blob-top opacity-30" />
              <div className="mosaic-map-blob mosaic-map-blob-bottom opacity-30" />
              <div className="absolute top-8 right-8 flex">
                <span className="w-10 h-10 -ml-2 rounded-full border-2 border-white/20 bg-gradient-to-br from-amber-200 to-slate-400" />
                <span className="w-10 h-10 -ml-2 rounded-full border-2 border-white/20 bg-gradient-to-br from-amber-400 to-slate-600" />
                <span className="w-10 h-10 -ml-2 rounded-full border-2 border-white/20 bg-gradient-to-br from-orange-200 to-slate-500" />
              </div>
              <p className="!mt-24 !text-white !font-medium !text-lg leading-relaxed !text-left z-10 !ml-0 w-full">
                Our nationwide team of highly-trained technicians are our greatest assets,
                providing the UK with world-class fire safety and security.
              </p>
            </article>

            {/* Card 5: Support Notes */}
            <article className="mosaic-card mosaic-card-support col-span-1 lg:col-span-1 shadow-sm transition-transform hover:-translate-y-1 flex flex-col justify-center min-h-[280px] !p-8">
              <p className="mosaic-support-title !mt-0 !mb-8 uppercase tracking-wider !text-slate-300 !text-left !ml-0 font-bold !max-w-full">We support our technicians through</p>
              <div className="mosaic-support-notes !mt-0 gap-3 !justify-center w-full flex-wrap">
                <div className="shadow-lg !bg-[#1f3c55] !text-white !rotate-[-6deg] flex items-center justify-center">A team of Technical managers</div>
                <div className="shadow-lg flex items-center justify-center">Experienced account handlers</div>
                <div className="shadow-lg !rotate-[4deg] flex items-center justify-center">Designers and support staff</div>
              </div>
            </article>

            {/* Card 6: Industry Experts */}
            <article className="mosaic-card mosaic-card-expert col-span-1 md:col-span-2 lg:col-span-1 shadow-sm transition-transform hover:-translate-y-1 !bg-[#e3ecda] flex flex-col items-start justify-center min-h-[280px] !p-8">
              <span className="mosaic-pill shadow-md tracking-wide font-bold self-start !ml-0">Industry Experts</span>
              <p className="!text-slate-800 !text-xl md:!text-2xl mt-6 !max-w-full leading-tight font-medium !text-left !ml-0">
                Total adherence to legal fire safety, security responsibilities and compliance
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* <HomeTestimonials /> */}

      <section className="closing-cta-section">
        <div className="closing-cta-shell">
          <div className="closing-cta-visual">
            <div className="closing-cta-quote-card !bg-transparent !shadow-none !p-0 md:!p-8">
              <blockquote className="!text-slate-800 !text-xl md:!text-2xl !leading-relaxed !max-w-lg">
                “Our confidence in your service delivery continues to grow... we now use Helix
                Fire &amp; Security as the benchmark against our other contractors.”
              </blockquote>

              <div className="closing-cta-quote-meta !mt-8">
                <div>
                  <p className="!text-navy !text-lg !font-bold">Ryan Jardine</p>
                  <span className="!text-slate-600 !font-semibold">Senior Property Manager, Bupa UK</span>
                </div>
                <div className="closing-cta-logo shadow-md">Bupa</div>
              </div>
            </div>
          </div>

          <div className="closing-cta-copy">
            <h2>Contact Our Team Today</h2>
            <p>
              Helix Fire &amp; Security lead the way in the industry by offering your business a
              compliant, reliable and consistent one-stop-shop for fire and security solutions in
              the UK. Contact our team today to discover how we can help.
            </p>

            <div className="closing-cta-actions">
              <a className="closing-cta-primary" href="/book-now">
                Get in Touch Today
              </a>
              <span>or</span>
              <a className="closing-cta-secondary" href="/book-now">
                Request a Callback
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <HomeChatWidget />
    </main>
  );
}
