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
import Sliders from "./components/Sliders/ImageSlider";
import Counter from "./components/Counter/Counter";
import Wave from "./components/Wave/Wave";
import styled from "styled-components";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineHeatMap } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { FaHourglassHalf } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background-color: #444;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
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
      <Sliders />
      <Wrapper>
        <Counter
          iconComponent={<AiOutlineFundProjectionScreen size={"4rem"} />}
          initialValue={0}
          targetValue={150}
          text="Projects"
        />
        <Counter
          iconComponent={<RiLightbulbFlashLine size={"4rem"} />}
          initialValue={0}
          targetValue={200}
          text="Ideas"
        />
        <Counter
          iconComponent={<AiOutlineHdd size={"4rem"} />}
          initialValue={0}
          targetValue={250}
          text="Credits"
        />
        <Counter
          iconComponent={<FaHourglassHalf size={"4rem"} />}
          initialValue={0}
          targetValue={300}
          text="Hours"
        />
      </Wrapper>
      <Contact />
      <Wave />
      <Footer />
      <Scroll />
    </>
  );
};

export default App;
