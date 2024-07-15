import { TfiInfoAlt } from "react-icons/tfi";
import "./about.css";
import Leaf from "../Leaf/Leaf.jsx";
import AboutImage from "../../../public/about.png";

const About = () => {
  return (
    <section className="section-about">
      <div className="titleHead">
        <span className="iconReact">
          <TfiInfoAlt />
        </span>
        <h1 className="section-title about-title">Little About Me ~</h1>
      </div>
      <Leaf />
      <div className="imageAndAbout">
        <div className="page-container">
          <p className="about-content">
            Enthusiastic, goal oriented & dedicated frontend developer with
            experience building and maintaining responsive websites controlling
            end to end application development. Looking forward to explore more
            and gain knowledge to enhance my skills & achieve desired results
            for company's goals.
          </p>
        </div>
        <div className="image-container">
          <img src={AboutImage} alt="profile image" />
        </div>
      </div>
    </section>
  );
};

export default About;
