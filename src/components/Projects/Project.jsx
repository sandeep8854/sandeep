import GithubButton from "../Button/GithubButton";
import LinkButton from "../Button/LinkButton";
import "./project.css";

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
      desc: "Consumers can order their pizzas by calling the single Happiness Hotline number 18002081234 OR order online at fastreactpizza.com online.",
      gitHub: "https://github.com/sandeep8854/fast-react-pizza",
      linkDemo: "https://fast-react-pizza-sandeep.vercel.app/",
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
        <h1 className="headingProj">Projects ~</h1>
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
