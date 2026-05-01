import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumServicePage } from "../../components/FireAlarmPremiumPage";
import { getServiceGroup, getServicePage } from "../../service-groups";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const group = getServiceGroup("compliance");

export function generateStaticParams() {
  return group.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage("compliance", slug);

  if (!page) return { title: "Compliance | Helix" };

  return {
    title: `${page.title} | Compliance | Helix`,
    description: page.intro[0],
  };
}

export default async function ComplianceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePage("compliance", slug);

  if (!page) notFound();

  return <PremiumServicePage theme={group.theme} page={page} />;
}
