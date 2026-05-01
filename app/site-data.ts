export type FireMenu = {
  type: "fire";
  featureCards: {
    title: string;
    text: string;
    href: string;
    active?: boolean;
  }[];
  links: {
    label: string;
    href: string;
  }[];
};

export type ListMenu = {
  type: "list";
  links: {
    label: string;
    href: string;
  }[];
};

export type NavItem = {
  label: string;
  href: string;
  menu?: FireMenu | ListMenu;
};

export type FooterColumn = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const fireServicePages = [
  {
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    shortTitle: "Fire Alarms",
    iconSrc: "/service-icons/fire-alarms.svg",
  },
  {
    slug: "fire-extinguishers",
    title: "Fire Extinguishers",
    shortTitle: "Extinguishers",
    iconSrc: "/service-icons/fire-extinguishers.svg",
  },
  {
    slug: "emergency-lighting",
    title: "Emergency Lighting",
    shortTitle: "Emergency Lighting",
    iconSrc: "/service-icons/emergency-lighting.svg",
  },
  {
    slug: "automatic-opening-ventilation",
    title: "Automatic Opening Ventilation",
    shortTitle: "AOV Systems",
    iconSrc: "/service-icons/sprinklers.svg",
  },
  {
    slug: "nurse-call-emergency-communication",
    title: "Nurse Call & Emergency Communication",
    shortTitle: "Emergency Communication",
    iconSrc: "/service-icons/intruder-alarms.svg",
  },
  {
    slug: "pa-speaker-systems",
    title: "PA & Speaker Systems",
    shortTitle: "PA & Speaker Systems",
    iconSrc: "/service-icons/kitchen-suppression.svg",
  },
  {
    slug: "certification-compliance",
    title: "Certification & Compliance",
    shortTitle: "Compliance",
    iconSrc: "/service-icons/dry-wet-risers.svg",
  },
] as const;

export const navItems: NavItem[] = [
  {
    label: "Fire Systems",
    href: "/fire-systems",
    menu: {
      type: "list",
      links: [
        { label: "Fire Alarm Systems", href: "/fire-systems/fire-alarm-systems" },
        { label: "Fire Extinguishers (Supply & Servicing)", href: "/fire-systems/fire-extinguishers-supply-servicing" },
        { label: "AOV (Smoke Ventilation) Systems", href: "/fire-systems/aov-smoke-ventilation-systems" },
        { label: "Fire Safety Signage", href: "/fire-systems/fire-safety-signage" },
      ],
    },
  },
  {
    label: "Security Systems",
    href: "/security",
    menu: {
      type: "list",
      links: [
        { label: "CCTV Surveillance", href: "/security/cctv-surveillance" },
        { label: "Intruder Alarms", href: "/security/intruder-alarms" },
        { label: "Access Control", href: "/security/access-control" },
        { label: "Intercom Systems", href: "/security/intercom-systems" },
        { label: "Gate Automation", href: "/security/gate-automation" },
      ],
    },
  },
  {
    label: "Emergency Systems",
    href: "/emergency-systems",
    menu: {
      type: "list",
      links: [
        { label: "Emergency Lighting", href: "/emergency-systems/emergency-lighting" },
        { label: "Emergency Voice Communication (EVC)", href: "/emergency-systems/emergency-voice-communication-evc" },
        { label: "Nurse Call Systems", href: "/emergency-systems/nurse-call-systems" },
        { label: "Emergency & Escape Route Signage", href: "/emergency-systems/emergency-escape-route-signage" },
      ],
    },
  },
  {
    label: "Smart Systems",
    href: "/smart-systems",
    menu: {
      type: "list",
      links: [
        { label: "Smart Home Automation", href: "/smart-systems/smart-home-automation" },
        { label: "Wi-Fi, Network & IP Solutions", href: "/smart-systems/wi-fi-network-ip-solutions" },
        { label: "Minor Electrical Works", href: "/smart-systems/minor-electrical-works" },
        { label: "Portable Appliance Testing (PAT)", href: "/smart-systems/portable-appliance-testing-pat" },
      ],
    },
  },
  {
    label: "Compliance",
    href: "/compliance",
    menu: {
      type: "list",
      links: [
        { label: "Certification & Compliance", href: "/compliance/certification-compliance" },
        { label: "Safety Inspections & Testing", href: "/compliance/safety-inspections-testing" },
        { label: "Regulatory Compliance Services", href: "/compliance/regulatory-compliance-services" },
      ],
    },
  },
  { label: "About", href: "/about" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Fire Systems", href: "/fire-systems" },
      { label: "Security Systems", href: "/security" },
      { label: "Emergency Systems", href: "/emergency-systems" },
      { label: "Smart Systems", href: "/smart-systems" },
      { label: "Compliance", href: "/compliance" },
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
      { label: "Customer Portal", href: "/customer-portal" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Your Responsibilities", href: "/resources/your-responsibilities" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Brochures", href: "/resources/brochures" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "News", href: "/resources/news" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
];
