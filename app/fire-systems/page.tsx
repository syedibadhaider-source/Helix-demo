import { PremiumServicePage, type PremiumServicePageData } from "../components/FireAlarmPremiumPage";
import { fireSystemsPage } from "./content";

export default function FireSystemsPage() {
  return (
    <PremiumServicePage
      theme={{
        category: "Fire Systems",
        categoryHref: "/fire-systems",
        accent: "#EF2B2D",
        accentDark: "#B91C1C",
        label: "Fire",
      }}
      page={toPremiumFireLanding()}
    />
  );
}

function toPremiumFireLanding(): PremiumServicePageData {
  return {
    slug: "fire-systems",
    title: fireSystemsPage.title,
    eyebrow: fireSystemsPage.eyebrow,
    intro: [...fireSystemsPage.intro],
    heroImage: fireSystemsPage.image,
    heroAlt: "Fire systems equipment for commercial and managed buildings",
    sectionTitle: fireSystemsPage.sectionTitle,
    sectionBody: [...fireSystemsPage.sectionBody],
    servicesTitle: "Our Fire Systems Services",
    services: fireSystemsPage.services.map((service) => service.title),
    featureCards: fireSystemsPage.services.slice(0, 3).map((service, index) => ({
      title: service.title,
      text: service.text,
      icon: ["target", "shield", "network"][index] ?? "shield",
    })),
    suitableFor: [...fireSystemsPage.suitableFor],
    ctaTitle: fireSystemsPage.ctaTitle,
    ctaText: fireSystemsPage.ctaText,
    ctaButton: fireSystemsPage.ctaButton,
  };
}
