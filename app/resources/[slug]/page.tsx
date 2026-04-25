import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageTemplate } from "../../components/InfoPageTemplate";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getSectionPage, resourcesCollection } from "../../content-pages/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourcesCollection.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage("resources", slug);

  if (!page) return { title: "Resources | Helix" };

  return {
    title: `${page.title} | Resources | Helix`,
    description: page.intro[0],
  };
}

export default async function ResourcesDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSectionPage("resources", slug);

  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={page} />
      <SiteFooter />
    </>
  );
}
