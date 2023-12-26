import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/pricing";
const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Education />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
