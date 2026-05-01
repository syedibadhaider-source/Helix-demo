import type { Metadata } from "next";
import { PremiumServicePage } from "../components/FireAlarmPremiumPage";
import { getServiceGroup } from "../service-groups";

const group = getServiceGroup("compliance");

export const metadata: Metadata = {
  title: "Compliance | Helix",
  description: group.landing.intro[0],
};

export default function CompliancePage() {
  return <PremiumServicePage theme={group.theme} page={group.landing} />;
}
