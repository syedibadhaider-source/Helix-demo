import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={getSectionLanding("about")} />
      <SiteFooter />
    </>
  );
}
