import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumServicePage } from "../../components/FireAlarmPremiumPage";
import { getServiceGroup, getServicePage } from "../../service-groups";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const group = getServiceGroup("smart");

export function generateStaticParams() {
  return group.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage("smart", slug);

  if (!page) return { title: "Smart Systems | Helix" };

  return {
    title: `${page.title} | Smart Systems | Helix`,
    description: page.intro[0],
  };
}

export default async function SmartSystemsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePage("smart", slug);

  if (!page) notFound();

  return <PremiumServicePage theme={group.theme} page={page} />;
}
