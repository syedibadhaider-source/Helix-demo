import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FireDetailTemplate } from "../../components/FireDetailTemplate";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { fireDetailPages, getFireDetailPage } from "../content";

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
    <>
      <SiteHeader />
      <FireDetailTemplate page={page} />
      <SiteFooter />
    </>
  );
}
