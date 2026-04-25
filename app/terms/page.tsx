import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { standalonePages } from "../content-pages/content";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={standalonePages.terms} />
      <SiteFooter />
    </>
  );
}
