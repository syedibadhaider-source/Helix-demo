import type { Metadata } from "next";
import { PremiumServicePage } from "../components/FireAlarmPremiumPage";
import { getServiceGroup } from "../service-groups";

const group = getServiceGroup("emergency");

export const metadata: Metadata = {
  title: "Emergency Systems | Helix",
  description: group.landing.intro[0],
};

export default function EmergencySystemsPage() {
  return <PremiumServicePage theme={group.theme} page={group.landing} />;
}
