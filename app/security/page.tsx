import type { Metadata } from "next";
import { PremiumServicePage } from "../components/FireAlarmPremiumPage";
import { getServiceGroup } from "../service-groups";

const group = getServiceGroup("security");

export const metadata: Metadata = {
  title: "Security Systems | Helix",
  description: group.landing.intro[0],
};

export default function SecuritySystemsPage() {
  return <PremiumServicePage theme={group.theme} page={group.landing} />;
}
