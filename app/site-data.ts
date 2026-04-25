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
  { label: "About", href: "/about" },
  {
    label: "Fire Systems",
    href: "/fire-systems",
    menu: {
      type: "fire",
      featureCards: [
        {
          title: "Fire Alarm Systems",
          text: "Early warning systems for residential and commercial premises.",
          href: "/fire-systems/fire-alarm-systems",
          active: true,
        },
        {
          title: "Fire Extinguishers",
          text: "Supply, placement, servicing and compliance support.",
          href: "/fire-systems/fire-extinguishers",
        },
        {
          title: "Emergency Lighting",
          text: "Escape route, open area and task lighting for safer evacuation.",
          href: "/fire-systems/emergency-lighting",
        },
      ],
      links: fireServicePages.map((page) => ({
        label: page.title,
        href: `/fire-systems/${page.slug}`,
      })),
    },
  },
  {
    label: "Security",
    href: "/security",
    menu: {
      type: "list",
      links: [
        { label: "CCTV Systems", href: "/security/cctv-systems" },
        { label: "Intruder Alarm Monitoring", href: "/security/intruder-alarm-monitoring" },
        { label: "Intruder Alarm", href: "/security/intruder-alarm" },
        { label: "Access Control Systems", href: "/security/access-control-systems" },
      ],
    },
  },
  {
    label: "Resources",
    href: "/resources",
    menu: {
      type: "list",
      links: [
        { label: "Your Responsibilities", href: "/resources/your-responsibilities" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Brochures", href: "/resources/brochures" },
        { label: "Downloads", href: "/resources/downloads" },
        { label: "News", href: "/resources/news" },
        { label: "FAQs", href: "/resources/faqs" },
      ],
    },
  },
  {
    label: "Our Company",
    href: "/our-company",
    menu: {
      type: "list",
      links: [
        { label: "Policies", href: "/our-company/policies" },
        { label: "Our Accreditations & Memberships", href: "/our-company/accreditations-memberships" },
        { label: "Frameworks", href: "/our-company/frameworks" },
        { label: "Videos", href: "/our-company/videos" },
        { label: "Careers", href: "/about/careers" },
        { label: "Acquisitions", href: "/our-company/acquisitions" },
        { label: "Alarm Receiving Centre (ARC)", href: "/our-company/alarm-receiving-centre" },
        { label: "Fire and Security Training Academy", href: "/our-company/training-academy" },
        { label: "Consultancy", href: "/our-company/consultancy" },
      ],
    },
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Fire Systems", href: "/fire-systems" },
      { label: "Security Solutions", href: "/security" },
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
