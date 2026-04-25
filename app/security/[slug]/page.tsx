import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageTemplate } from "../../components/InfoPageTemplate";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getSectionPage, securityCollection } from "../../content-pages/content";

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
    <>
      <SiteHeader />
      <InfoPageTemplate page={page} />
      <SiteFooter />
    </>
  );
}
