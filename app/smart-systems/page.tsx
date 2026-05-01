import type { Metadata } from "next";
import { PremiumServicePage } from "../components/FireAlarmPremiumPage";
import { getServiceGroup } from "../service-groups";

const group = getServiceGroup("smart");

export const metadata: Metadata = {
  title: "Smart Systems | Helix",
  description: group.landing.intro[0],
};

export default function SmartSystemsPage() {
  return <PremiumServicePage theme={group.theme} page={group.landing} />;
}
