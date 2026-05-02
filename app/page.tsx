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

type ValueIconKind = "reliable" | "trusted" | "knowledgeable" | "speed" | "innovative";

const companyValues: {
  title: string;
  icon: ValueIconKind;
  points: string[];
}[] = [
  {
    title: "Reliable",
    icon: "reliable",
    points: [
      "We are here for our customers; 24 hours a day, 365 days a year.",
      "We provide an unrivalled quality of service with confidence.",
      "We shape our services according to our customer's needs.",
    ],
  },
  {
    title: "Trusted",
    icon: "trusted",
    points: [
      "We act with integrity by doing what's right, not what's easy to ensure that our customer's obligations are fulfilled and compliant.",
      "We act with honesty and pride ourselves on nurturing long-term customer relationships.",
      "Our work is continually assessed by independent third-party accreditors to ensure the highest quality service and maintenance; the safety of our employees, customers and partners is our top priority.",
    ],
  },
  {
    title: "Knowledgeable",
    icon: "knowledgeable",
    points: [
      "Our nationwide team of highly-trained technicians are our greatest assets, providing the UK with world-class fire safety and security.",
      "We support our technicians through a team of technical managers, experienced account handlers, designers and support staff.",
      "Our passion for continuous learning and development makes us credible experts in ensuring legal fire safety and security responsibilities are adhered to.",
    ],
  },
  {
    title: "Speed of Response",
    icon: "speed",
    points: [
      "We deliver industry leading call-out response times; we recognise that quick resolutions are important to our customers.",
      "We constantly review new technology and innovative solutions to improve the efficiency and effectiveness of our service.",
      "We pride ourselves on the speed and capabilities of our support and customer service teams.",
    ],
  },
  {
    title: "Innovative",
    icon: "innovative",
    points: [
      "We push for simplicity, utilising unparalleled systems to save our customers' both time and money, often by removing the need for multiple technician visits.",
      "We utilise the latest technologies to provide a suite of management information and analytics in one centralised customer portal.",
      "We partner with industry leading systems to widen our technical capabilities and provide additional account visibility to our customers.",
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
          <p>
            Delivering comprehensive fire safety, protection and maintenance services, including in-house
            sprinkler and fire alarm servicing, installation, monitoring and zone plans, as well as
            industry-leading security solutions such as access control, CCTV and intruder alarm systems, all
            without the need for third parties.
          </p>
        </div>

        <div className="primary-services-grid">
          {primaryServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`primary-service-card tone-${service.tone}`}
            >
              <span className="card-launch" aria-hidden="true">
                ↗
              </span>
              <span
                className="service-icon"
                aria-hidden="true"
                style={{ ["--icon-mask" as any]: `url('${service.iconSrc}')` }}
              />
              <h3>{service.title}</h3>
            </Link>
          ))}
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
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="compliance-video-shell">
            <video
              className="compliance-video"
              controls
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
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

      <section className="value-mosaic-section">
        <div className="value-mosaic-shell">
          <p className="value-mosaic-kicker">What we value</p>

          <div className="value-mosaic-grid">
            <article className="mosaic-card mosaic-card-red">
              <p>We are here for our customers</p>
              <h3>
                <span>24 hrs</span>
                <span>365 days</span>
              </h3>
            </article>

            <article className="mosaic-card mosaic-card-photo">
              <div className="mosaic-photo-overlay" />
              <p>
                We provide an unrivalled quality of service with confidence and we shape our
                services according to our customer's needs.
              </p>
            </article>

            <article className="mosaic-card mosaic-card-light">
              <p className="mosaic-label">We act with:</p>
              <ul className="mosaic-list">
                <li>
                  <strong>Integrity</strong>
                  <span>doing what&apos;s right</span>
                </li>
                <li>
                  <strong>Honesty</strong>
                  <span>fulfilling obligations</span>
                </li>
                <li>
                  <strong>Pride</strong>
                  <span>nurturing long-term relationships</span>
                </li>
              </ul>
            </article>

            <article className="mosaic-card mosaic-card-map">
              <div className="mosaic-map-blob mosaic-map-blob-top" />
              <div className="mosaic-map-blob mosaic-map-blob-bottom" />
              <div className="mosaic-avatars" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>
                Our nationwide team of highly-trained technicians are our greatest assets,
                providing the UK with world-class fire safety and security.
              </p>
            </article>

            <article className="mosaic-card mosaic-card-support">
              <p className="mosaic-support-title">We support our technicians through</p>
              <div className="mosaic-support-notes">
                <div>A team of Technical managers</div>
                <div>Experienced account handlers</div>
                <div>Designers and support staff</div>
              </div>
            </article>

            <article className="mosaic-card mosaic-card-expert">
              <span className="mosaic-pill">Industry Experts</span>
              <p>
                Total adherence to legal fire safety, security responsibilities and compliance
              </p>
            </article>
          </div>

          <a className="value-mosaic-button" href="#resources">
            Read all of our values
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <HomeTestimonials />

      <section className="closing-cta-section">
        <div className="closing-cta-shell">
          <div className="closing-cta-visual">
            <div className="closing-cta-quote-card">
              <blockquote>
                “Our confidence in your service delivery continues to grow... we now use Helix
                Fire &amp; Security as the benchmark against our other contractors.”
              </blockquote>

              <div className="closing-cta-quote-meta">
                <div>
                  <p>Ryan Jardine</p>
                  <span>Senior Property Manager, Bupa UK</span>
                </div>
                <div className="closing-cta-logo">Bupa</div>
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
