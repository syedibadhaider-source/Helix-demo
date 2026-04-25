import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={getSectionLanding("resources")} />
      <SiteFooter />
    </>
  );
}
