import Project from "../../components/Project";
import projectsData from "../../db/projects_db.json"

function Projects(props) {

  
    return (
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <Project className="col-sm-12" />
          
        </div>
        <div className="row justify-content-center">
          <Project className="col-sm-12" />
        </div>
        
      </div>
    );
  }
  
  export default Projects;
  