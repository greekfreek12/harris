import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import PricingProposal from "@/components/PricingProposal";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <ServiceArea />
      <QuoteSection />
      <CTASection />
      <PricingProposal />
    </>
  );
}
