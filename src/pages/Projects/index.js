import Project from "../../components/Project";
import projectsData from "../../db/projects_db.json"
import highlightProject from "../../db/highlight_project_db.json";

function Projects(props) {

  
    return (
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <Project className="col-sm-12" 
            {...highlightProject}
          />
          
        </div>
        <div className="row justify-content-center ">
          {projectsData.map(project => (
            <Project className=""
              key={project.id} 
              {...project}
            />
          ))}
          
        </div>
        
      </div>
    );
  }
  
  export default Projects;
  