import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageTemplate } from "../../components/InfoPageTemplate";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { aboutCollection, getSectionPage } from "../../content-pages/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aboutCollection.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage("about", slug);

  if (!page) return { title: "About | Helix" };

  return {
    title: `${page.title} | About | Helix`,
    description: page.intro[0],
  };
}

export default async function AboutDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSectionPage("about", slug);

  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={page} />
      <SiteFooter />
    </>
  );
}
