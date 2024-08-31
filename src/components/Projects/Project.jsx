import GithubButton from "../Button/GithubButton";
import LinkButton from "../Button/LinkButton";
import "./project.css";
import { GoProjectSymlink } from "react-icons/go";
import Leaf from "../Leaf/Leaf.jsx";
import Img1 from "../../../public/developer-portfolio_2_3.jpg";
import Img2 from "../../../public/pizza_2_3.jpg";
import Img3 from "../../../public/travel-list_2_3.jpg";
import Skills from "../Button/Skills.jsx";

const imageArray = [Img1, Img2, Img3];

const Project = () => {
  const projectData = [
    {
      image: "../../../public/developer-portfolio_2_3.jpg",
      name: "Developer Portfolio",
      desc: "Software Developer Portfolio Template build with react.js and styled component that helps you showcase our work and skills as a software developer.",
      gitHub: "https://github.com/sandeep8854/sandeep",
      linkDemo: "https://sandeepprajapati.vercel.app/",
      target: "_blank",
      technologies: ["Html", "css", "styledComponent", "reactJS"],
    },
    {
      image: "../../../public/pizza_2_3.jpg",
      name: "Fast React Pizza Co.",
      desc: "User can order their pizzas by calling single Happiness Hotline 18002081234 OR order online at fastreactpizza.com and will be recieved 24/7",
      gitHub: "https://github.com/sandeep8854/fast-react-pizza",
      linkDemo: "https://fast-react-pizza-sandeep.vercel.app/",
      target: "_blank",
      technologies: ["Html", "css", "Tailwind CSS", "reactJS"],
    },
    {
      image: "../../../public/travel-list_2_3.jpg",
      name: "Travel List",
      desc: "In this project user can add the items, delete the items and also and sort the item based on descrieption, input order and packed status.",
      gitHub: "https://github.com/sandeep8854/travel-list",
      linkDemo: "https://travel-list-sandeep.vercel.app/",
      target: "_blank",
      technologies: ["Html", "CSS", "reactJS"],
    },
  ];
  return (
    <>
      <section className="section-project">
        <div className="projectCont">
          <span className="iconReactP">
            <GoProjectSymlink />
          </span>
          <h1 className="headingProj">Projects ~</h1>
        </div>
        <Leaf />
        <div className="project-wrapper">
          {projectData.map((ele, index) => {
            return (
              <>
                <div className="project-content">
                  <img
                    loading="lazy"
                    src={imageArray[index]}
                    className="image-section"
                    alt="image not found!"
                  />

                  <h4 className="project-title">
                    <b>{ele.name}</b>
                  </h4>
                  <p className="project-text" key={index}>
                    {ele.desc}
                  </p>
                  <div className="skill-tag">
                    <Skills />
                  </div>
                  <div className="button-container">
                    <>
                      <a href={ele.gitHub} target={ele.target}>
                        <GithubButton />
                      </a>
                      <a href={ele.linkDemo} target={ele.target}>
                        <LinkButton />
                      </a>
                    </>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Project;
