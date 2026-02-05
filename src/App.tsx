import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import MainLayout from "./components/layout/MainLayout";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
