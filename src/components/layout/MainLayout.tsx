import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const MainLayout: React.FC = () => {
  useScrollToTop();

  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
