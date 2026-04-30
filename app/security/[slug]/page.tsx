import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumServicePage, type PremiumServicePageData } from "../../components/FireAlarmPremiumPage";
import { getSectionPage, securityCollection, type InfoPageData } from "../../content-pages/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return securityCollection.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage("security", slug);

  if (!page) return { title: "Security | Helix" };

  return {
    title: `${page.title} | Security | Helix`,
    description: page.intro[0],
  };
}

export default async function SecurityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSectionPage("security", slug);

  if (!page) notFound();

  return (
    <PremiumServicePage
      theme={{
        category: "Security Systems",
        categoryHref: "/security",
        accent: "#2855C7",
        accentDark: "#1D3F99",
        label: "Security",
      }}
      page={toPremiumInfoPage(page, "Security Systems")}
    />
  );
}

function toPremiumInfoPage(page: InfoPageData, category: string): PremiumServicePageData {
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
      icon: ["target", "network", "shield"][index] ?? "shield",
    })),
    suitableFor: page.fitItems,
    ctaTitle: page.ctaTitle,
    ctaText: page.ctaText,
    ctaButton: page.ctaButton || `Discuss ${category}`,
  };
}
