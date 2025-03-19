import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import Company from "./pages/Company";
import CEO from "./pages/CEO";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <FloatingIcons />
      <Routes>
      <Route path="/about/ceo" element={<CEO />} />
      <Route path="/about/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
