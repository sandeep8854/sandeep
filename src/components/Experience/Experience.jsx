import "./experience.css";
import Exp from "../../../public/experience.png";
import Leaf from "../Leaf/Leaf.jsx";
import ExpImg from "../../../public/work-exprience.png";

const Experience = () => {
  const experienceData = [
    {
      designation: "Senior Customer Executive",
      link: "https://www.iccs-bpo.com/",
      company: "Insight Customer Call Solutions Limited",
      year: "Feb 2024 - Jun 2024",
      target: "_blank",
    },
    {
      designation: "Verification Team",
      link: "https://smartcoin.co.in/",
      company: "SmartCoin Financials Pvt. Ltd",
      year: "May 2023 - Feb 2024",
      target: "_blank",
    },
    {
      designation: "Software Development Trainee",
      link: "https://mountblue.io/",
      company: "MountBlue Technologies Pvt. Ltd",
      year: "February 2023 - April 2023 ",
      target: "_blank",
    },
    {
      designation: "Quality Team",
      link: "https://www.tatapowersolar.com/",
      company: "Tata Power Solar",
      year: "January 2022 - January 2023",
      target: "_blank",
    },
    {
      designation: "Customer Executive",
      link: "https://www.tatapowersolar.com/",
      company: "Tata Power Solar",
      year: "January 2021 - December 2021",
      target: "_blank",
    },
    {
      designation: "Desktop Support ",
      link: "https://www.quesscorp.com/",
      company: "Quess Corp Business services company ",
      year: "December 2019 - January 2021 ",
      target: "_blank",
    },
  ];
  return (
    <section className="section-experience">
      <div className="exp">
        <span className="iconReactE">
          <img
            className="iconPng"
            src={Exp}
            alt="image not found in experience"
          />
        </span>
        <h1 className="titleExperience experience-title">
          My Work Experience ~
        </h1>
      </div>
      <Leaf />
      <div className="expperienceAndImageContainer">
        <div className="experience-image">
          <img src={ExpImg} alt="experience image not found" />
        </div>

        <div className="experience-container">
          {experienceData.map((ele, index) => {
            return (
              <>
                <div className="progress-wrapper">
                  <ul className="step-progress" key={index}>
                    <li className="step-progress-item">
                      <p className="designation">{ele.designation}</p>
                      <p className="org-name">
                        <a href={ele.link} target={ele.target} rel="">
                          {ele.company}
                        </a>
                      </p>
                      <p className="year">{ele.year}</p>
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

export default Experience;
