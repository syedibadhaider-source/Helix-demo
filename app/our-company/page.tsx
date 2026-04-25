import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export default function OurCompanyPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={getSectionLanding("our-company")} />
      <SiteFooter />
    </>
  );
}
