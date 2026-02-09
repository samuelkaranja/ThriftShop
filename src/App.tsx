import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import MainLayout from "./components/layout/MainLayout";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
