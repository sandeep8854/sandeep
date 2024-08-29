import GithubButton from "../Button/GithubButton";
import LinkButton from "../Button/LinkButton";
import "./project.css";
import { GoProjectSymlink } from "react-icons/go";
import Leaf from "../Leaf/Leaf.jsx";

const Project = () => {
  const projectData = [
    {
      image: "../../../public/developer-portfolio_2_3.jpg",
      name: "Developer Portfolio",
      desc: "Software Developer Portfolio Template build with react.js and styled component that helps you showcase our work and skills as a software developer.",
      gitHub: "https://github.com/sandeep8854/sandeep",
      linkDemo: "https://sandeepprajapati.vercel.app/",
      target: "_blank",
    },
    {
      image: "../../../public/pizza_2_3.jpg",
      name: "Fast React Pizza Co.",
      desc: "Consumers can order their pizzas by calling the single Happiness Hotline number 18002081234 OR order online at fastreactpizza.com online. and will be recieved 24/7",
      gitHub: "https://github.com/sandeep8854/fast-react-pizza",
      linkDemo: "https://fast-react-pizza-sandeep.vercel.app/",
      target: "_blank",
    },
    {
      image: "../../../public/travel-list_2_3.jpg",
      name: "Travel List",
      desc: "In this project user can add the items, delete the items and also and sort the item based on descrieption, input order and packed status.",
      gitHub: "https://github.com/sandeep8854/travel-list",
      linkDemo: "https://travel-list-sandeep.vercel.app/",
      target: "_blank",
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
                    src={ele.image}
                    className="image-section"
                    alt="image not found!"
                  />

                  <h4 className="project-title">
                    <b>{ele.name}</b>
                  </h4>
                  <p className="project-text" key={index}>
                    {ele.desc}
                  </p>
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
