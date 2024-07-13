import GithubButton from "../Button/GithubButton";
import LinkButton from "../Button/LinkButton";
import "./project.css";
import { GoProjectSymlink } from "react-icons/go";
import Leaf from "../Leaf/Leaf.jsx";

const Project = () => {
  const projectData = [
    {
      name: "Developer Portfolio",
      desc: "Software Developer Portfolio Template build with react.js and styled component that helps you showcase our work and skills as a software developer.",
      gitHub: "https://github.com/sandeep8854/sandeep",
      linkDemo: "https://sandeepprajapati.vercel.app/",
      target: "_blank",
    },
    {
      name: "Fast React Pizza Co.",
      desc: "Consumers can order their pizzas by calling the single Happiness Hotline number 18002081234 OR order online at fastreactpizza.com online. and will be recieved 24/7",
      gitHub: "https://github.com/sandeep8854/fast-react-pizza",
      linkDemo: "https://fast-react-pizza-sandeep.vercel.app/",
      target: "_blank",
    },
    {
      name: "Redux Bank Account",
      desc: "In this project user can perform all opreation like as Open an account, deposit, withdraw, request for Loan, payLoan and etc.",
      gitHub: "https://github.com/sandeep8854/redux-intro",
      linkDemo: "https://redux-intro-two.vercel.app/",
      target: "_blank",
    },
    {
      name: "Travel List",
      desc: "In this project user can add the items, delete the items and also and sort the item based on descrieption, input order and packed status.",
      gitHub: "https://github.com/sandeep8854/travel-list",
      linkDemo: "https://travel-list-sandeep.vercel.app/",
      target: "_blank",
    },
    {
      name: "React Admin Dashboard",
      desc: "An admin dashboard is a component of a control panel that gives users access to data, reports, and metrics all employee information.",
      gitHub: "https://github.com/sandeep8854/react-admin-dashboard",
      linkDemo: "https://admin-dashboard-sandeep.vercel.app/",
      target: "_blank",
    },
    {
      name: "Project1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque consequatur? Eius modi quasi placeat totam aut adipisci amecum",
    },
    {
      name: "Project1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque consequatur? Eius modi quasi placeat totam aut adipisci amecum",
    },
    {
      name: "Project1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque consequatur? Eius modi quasi placeat totam aut adipisci amecum",
    },
    {
      name: "Project1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque consequatur? Eius modi quasi placeat totam aut adipisci amecum",
    },
    {
      name: "Project1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque consequatur? Eius modi quasi placeat totam aut adipisci amecum",
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
