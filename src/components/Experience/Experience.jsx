import "./experience.css";
import Exp from "../../../public/experience.png";

const Experience = () => {
  const experienceData = [
    {
      designation: "Verification Team",
      link: "https://smartcoin.co.in/",
      company: "SmartCoin Financials Pvt. Ltd",
      year: "May 2023 - Present",
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
    </section>
  );
};

export default Experience;
