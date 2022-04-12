import Home from "./components/Home";
import Navbar from "./components/Navbar";
import India from "./categories/India";
import World from "./categories/World";
import Tech from "./categories/Tech";
import Business from "./categories/Business";
import Health from "./categories/Health";
import Sports from "./categories/Sports";
import Science from "./categories/Science";
import Travel from "./categories/Travel";
import Slug from "./categories/Slug";
import Entertainment from "./categories/Entertainment";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/india" element={<India />} />
        <Route path="/news/world" element={<World />} />
        <Route path="/news/entertainment" element={<Entertainment />} />
        <Route path="/news/tech" element={<Tech />} />
        <Route path="/news/business" element={<Business />} />
        <Route path="/news/health" element={<Health />} />
        <Route path="/news/sports" element={<Sports />} />
        <Route path="/news/science" element={<Science />} />
        <Route path="/news/travel" element={<Travel />} />
        <Route path="/news/:category/:slug" element={<Slug />} />
      </Routes>
    </div>
  );
}

export default App;
