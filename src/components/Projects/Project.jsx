import "./project.css";

const Project = () => {
  const projectData = [
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
