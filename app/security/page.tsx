import { PremiumServicePage, type PremiumServicePageData } from "../components/FireAlarmPremiumPage";
import { getSectionLanding, type InfoPageData } from "../content-pages/content";

export default function SecurityPage() {
  const page = getSectionLanding("security");

  return (
    <PremiumServicePage
      theme={{
        category: "Security Systems",
        categoryHref: "/security",
        accent: "#2855C7",
        accentDark: "#1D3F99",
        label: "Security",
      }}
      page={toPremiumSecurityLanding(page)}
    />
  );
}

function toPremiumSecurityLanding(page: InfoPageData): PremiumServicePageData {
  return {
    slug: page.slug,
    title: "Security Systems",
    eyebrow: page.eyebrow,
    intro: page.intro,
    heroImage: page.image,
    heroAlt: page.imageAlt,
    sectionTitle: page.overviewTitle,
    sectionBody: page.overview,
    servicesTitle: page.highlightsTitle,
    services: page.highlights,
    featureCards: page.gridItems.slice(0, 3).map((item, index) => ({
      title: item.title,
      text: item.text,
      icon: ["target", "network", "shield"][index] ?? "shield",
    })),
    suitableFor: page.fitItems,
    ctaTitle: page.ctaTitle,
    ctaText: page.ctaText,
    ctaButton: page.ctaButton,
  };
}
