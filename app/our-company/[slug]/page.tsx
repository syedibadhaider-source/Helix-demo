import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageTemplate } from "../../components/InfoPageTemplate";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { companyCollection, getSectionPage } from "../../content-pages/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return companyCollection.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage("our-company", slug);

  if (!page) return { title: "Our Company | Helix" };

  return {
    title: `${page.title} | Our Company | Helix`,
    description: page.intro[0],
  };
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSectionPage("our-company", slug);

  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={page} />
      <SiteFooter />
    </>
  );
}
