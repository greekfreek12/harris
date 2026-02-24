import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TrustBar />
      <Projects />
      <Testimonials />
      <CTASection />
    </>
  );
}
