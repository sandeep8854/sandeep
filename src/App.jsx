import Navbar1 from "./components/Navbar1/Navbar1";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Pricing from "./components/Pricing/pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/FooterSec";
import Scroll from "./components/Scroll/Scroll";
// import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar1 />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />

        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Education />
      <Pricing />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
};

export default App;
