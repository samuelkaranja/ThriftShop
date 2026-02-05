import Categories from "../components/LandingPage/categories/Categories";
import WhyShopWithUs from "../components/LandingPage/features/WhyShopWithUs";
import Hero from "../components/LandingPage/hero/Hero";
import NewDrops from "../components/LandingPage/products/NewDrops";
import WhatsAppCTA from "../components/LandingPage/whatsapp/WhatsAppCTA";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewDrops />
      <Categories />
      <WhyShopWithUs />
      <WhatsAppCTA />
    </>
  );
};

export default Home;
