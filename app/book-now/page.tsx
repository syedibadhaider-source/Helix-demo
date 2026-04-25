import { ContactSection } from "../components/ContactSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function BookNowPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-shell">
        <ContactSection standalone />
      </main>
      <SiteFooter />
    </>
  );
}
