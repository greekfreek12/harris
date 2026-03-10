import type { Metadata } from "next";
import HomeImprovementsContent from "./HomeImprovementsContent";

export const metadata: Metadata = {
  title: "Home Improvements | Harris Plumbing & Home Improvements",
  description:
    "High-end home improvements in Birmingham, Alabama. Full home renovations, new construction, kitchen remodels, bathroom remodels, and room additions. Licensed & insured. Call 205-829-5282.",
};

export default function HomeImprovementsPage() {
  return <HomeImprovementsContent />;
}
