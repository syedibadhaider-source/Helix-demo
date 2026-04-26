import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { compliancePage } from "../content-pages/content";

export default function CompliancePage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={compliancePage} />
      <SiteFooter />
    </>
  );
}

