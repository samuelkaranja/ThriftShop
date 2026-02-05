import Categories from "../components/LandingPage/categories/Categories";
import Hero from "../components/LandingPage/hero/Hero";
import NewDrops from "../components/LandingPage/products/NewDrops";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewDrops />
      <Categories />
    </>
  );
};

export default Home;
