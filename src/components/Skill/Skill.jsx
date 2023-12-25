import "./skill.css";
import Java from "../../../public/java.png";
import JavaScript from "../../../public/js-logo.png";
import Html from "../../../public/html.png";
import Css from "../../../public/css-logo.png";
import React from "../../../public/react-logo.png";
import NodeJS from "../../../public/nodeJS.png";
import MongoDB from "../../../public/mongodb.jpeg";
import SQL from "../../../public/sql.png";
import StyledComponent from "../../../public/styledComponent.png";
import Redux from "../../../public/redux.png";
import Dsa from "../../../public/dsa.jpg";
import Saas from "../../../public/saas.png";
import Jdbc from "../../../public/jdbc.jpeg";

const tech = [
  Java,
  JavaScript,
  Html,
  Css,
  React,
  NodeJS,
  MongoDB,
  SQL,
  StyledComponent,
  Redux,
  Dsa,
  Saas,
  Jdbc,
];
const Skill = () => {
  const skills = [
    {
      name: "JAVA",
      imgSrc: "/public/java.png",
      width: "80px",
    },
    {
      name: "javaScript",
      imgSrc: "/public/js-logo.png",
      width: "80px",
    },
    {
      name: "HTML",
      imgSrc: "/public/html.png",
      width: "80px",
    },
    {
      name: "CSS",
      imgSrc: "/public/css-logo.png",
      width: "80px",
    },
    {
      name: "React",
      imgSrc: "/public/react-logo.png",
      width: "80px",
    },
    {
      name: "nodeJS",
      imgSrc: "/public/nodeJS.png",
      width: "80px",
    },
    {
      name: "mongoDB",
      imgSrc: "/public/mongodb.jpeg",
      width: "80px",
    },
    {
      name: "SQL",
      imgSrc: "/public/sql.png",
      width: "80px",
    },
    {
      name: "Styled Components",
      imgSrc: "/public/styledComponent.png",
      width: "80px",
    },
    {
      name: "Redux",
      imgSrc: "/public/redux.png",
      width: "80px",
    },
    {
      name: "DSA",
      imgSrc: "/public/dsa.jpg",
      width: "80px",
    },
    {
      name: "SaaS",
      imgSrc: "/public/saas.png",
      width: "80px",
    },
    {
      name: "JDBC",
      imgSrc: "/public/jdbc.jpeg",
      width: "80px",
    },
  ];
  return (
    <div className="skills-section">
      <h1 className="section-title">Skills</h1>
      <div className="skills-item-wrapper">
        {skills.map((ele, index) => {
          return (
            <>
              <div className="skills-item">
                <div className="skill-Item-img-wrapper">
                  <img src={tech[index]} alt="" width={ele.width} key={index} />
                </div>
                <p className="skill-item-title">{ele.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
