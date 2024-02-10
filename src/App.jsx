import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/FooterSec";
import Pricing from "./components/Pricing/pricing";
import Contact from "./components/Contact/Contact";
// import Navbar from "./components/Navbar/Navbar";
import Wave from "./components/Wave/Wave";
import Scroll from "./components/Scroll/Scroll";
// import Navbar1 from "./components/Navbar1/Navbar1";
const App = () => {
  return (
    <div>
      {/* <Navbar1 /> */}
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Education />
      <Pricing />
      <Contact />
      <Wave />
      <Footer />
      <Scroll />
    </div>
  );
};

export default App;
