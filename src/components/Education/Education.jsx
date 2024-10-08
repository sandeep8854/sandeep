import "./education.css";
import { BsFillMortarboardFill } from "react-icons/bs";
import Leaf from "../Leaf/Leaf.jsx";
import EducationImage from "../../../public/education-image.png";

const Education = () => {
  const qualification = [
    {
      designation: "B.Tech Computer Science & Engineering Percentage: 64.5%",
      passingYear: "2015 - 2019",
      link: "https://www.bujhansi.ac.in/",
      target: "_blank",
      name: "Bundelkhand University Jhansi (UP)",
    },
    {
      designation: "Class 12th (HSC) Percentage: 75%",
      passingYear: "2012 - 2014",
      link: "https://www.bujhansi.ac.in/",
      target: "_blank",
      name: "Janta Inter College Ambari Azamgarh (UP)",
    },
    {
      designation: "Class 10th (SSLC) Percentage: 81.1%",
      passingYear: "2011 - 2012",
      link: "https://srk.inter-college.in/",
      target: "_blank",
      name: "Saraswati Radha Krishna Inter College Ambari Azamgarh (UP)",
    },
  ];
  return (
    <section className="section-education">
      <div className="eduCont">
        <span className="iconreactEd">
          <BsFillMortarboardFill />
        </span>
        <h1 className="edu-title">Education ~</h1>
      </div>
      <Leaf />
      <div className="educationAndImageContainer">
        <div className="image-container">
          <img src={EducationImage} alt="education image not found" />
        </div>
        <div className="education-container">
          {qualification.map((ele, index) => {
            return (
              <>
                <div className="progress-wrapper">
                  <ul className="step-progress">
                    <li className="step-progress-item" key={index}>
                      <p className="designation">{ele.designation} </p>
                      <span className="passing-year">{ele.passingYear}</span>
                      <p className="org-name">
                        <a href={ele.link} target={ele.target}>
                          {ele.name}
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
