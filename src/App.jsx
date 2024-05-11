import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Conponent/Nav/Navbar";
import Contact from "./Conponent/Contact/Contact";
import Team from "./Conponent/Team/Team";
import Project from "./Conponent/Project/Project";
import Footer from "./Conponent/Footer/Footer";
import Service from "./Conponent/Service/Service";
import Home from "./Conponent/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
