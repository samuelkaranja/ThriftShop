import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
