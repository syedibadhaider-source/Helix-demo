import { PremiumServicePage, type PremiumServicePageData } from "../components/FireAlarmPremiumPage";
import { compliancePage, type InfoPageData } from "../content-pages/content";

export default function CompliancePage() {
  return (
    <PremiumServicePage
      theme={{
        category: "Compliance",
        categoryHref: "/compliance",
        accent: "#1F8F4D",
        accentDark: "#166A39",
        label: "Compliance",
      }}
      page={toPremiumCompliancePage(compliancePage)}
    />
  );
}

function toPremiumCompliancePage(page: InfoPageData): PremiumServicePageData {
  return {
    slug: page.slug,
    title: page.title,
    eyebrow: page.eyebrow,
    intro: page.intro,
    heroImage: page.image,
    heroAlt: page.imageAlt,
    sectionTitle: page.overviewTitle,
    sectionBody: page.overview,
    servicesTitle: page.highlightsTitle,
    services: page.highlights,
    featureCards: page.metrics.slice(0, 3).map((metric, index) => ({
      title: metric.value,
      text: metric.label,
      icon: ["clipboard", "shield", "network"][index] ?? "shield",
    })),
    suitableFor: page.fitItems,
    ctaTitle: page.ctaTitle,
    ctaText: page.ctaText,
    ctaButton: page.ctaButton,
  };
}
