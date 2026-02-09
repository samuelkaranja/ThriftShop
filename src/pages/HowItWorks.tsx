import CTASection from "../components/HowItWorksPage/CTASection";
import DeliverySection from "../components/HowItWorksPage/DeliverySection";
import HowHero from "../components/HowItWorksPage/HowHero";
import PaymentSection from "../components/HowItWorksPage/PaymentSection";
import ReturnPolicy from "../components/HowItWorksPage/ReturnPolicy";
import StepsSection from "../components/HowItWorksPage/StepsSection";

const HowItWorks: React.FC = () => {
  return (
    <section className="py-10">
      <HowHero />
      <StepsSection />
      <DeliverySection />
      <PaymentSection />
      <ReturnPolicy />
      <CTASection />
    </section>
  );
};

export default HowItWorks;
