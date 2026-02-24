import type { Metadata } from "next";
import PlumbingContent from "./PlumbingContent";

export const metadata: Metadata = {
  title: "Plumbing Services | Harris Plumbing & Home Improvements",
  description:
    "Master-level plumbing services in Birmingham, Alabama. General plumbing, water heater installation, emergency repairs, and more. Licensed & insured. Call 205-829-5282.",
};

export default function PlumbingPage() {
  return <PlumbingContent />;
}
