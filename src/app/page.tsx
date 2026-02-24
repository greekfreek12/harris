import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import GoogleReviews from "@/components/GoogleReviews";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <Services />
      <BeforeAfter />
      <GoogleReviews />
      <WhyChoose />
      <CTASection />
    </>
  );
}
