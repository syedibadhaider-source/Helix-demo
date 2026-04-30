import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumServicePage, type PremiumServicePageData } from "../../components/FireAlarmPremiumPage";
import { fireDetailPages, type FireDetailPage, getFireDetailPage } from "../content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return fireDetailPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getFireDetailPage(slug);

  if (!page) {
    return {
      title: "Fire Systems | Helix",
    };
  }

  return {
    title: `${page.title} | Fire Systems | Helix`,
    description: page.intro[0],
  };
}

export default async function FireDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getFireDetailPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <PremiumServicePage
      theme={{
        category: "Fire Systems",
        categoryHref: "/fire-systems",
        accent: "#EF2B2D",
        accentDark: "#B91C1C",
        label: "Fire",
      }}
      page={toPremiumFirePage(page)}
    />
  );
}

function toPremiumFirePage(page: FireDetailPage): PremiumServicePageData {
  const features = page.features?.slice(0, 3) ?? page.bullets.slice(0, 3);

  return {
    slug: page.slug,
    title: page.title,
    eyebrow: page.eyebrow,
    intro: page.intro,
    heroImage: page.leadImage,
    heroAlt: page.leadAlt,
    sectionTitle: page.sectionTitle,
    sectionBody: page.sectionBody,
    servicesTitle: page.bulletsTitle,
    services: page.bullets,
    featureCards: features.map((text, index) => ({
      title: getFeatureTitle(text, index),
      text,
      icon: ["target", "network", "shield"][index] ?? "shield",
    })),
    suitableFor: page.suitableFor,
    ctaTitle: page.ctaTitle,
    ctaText: page.ctaText,
    ctaButton: page.ctaButton,
  };
}

function getFeatureTitle(text: string, index: number) {
  if (text.includes(":")) return text.split(":")[0];
  if (text.length <= 34) return text;
  return ["Designed Around Your Building", "Installed With Care", "Maintained Over Time"][index] ?? "Helix Support";
}
