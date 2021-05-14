import "./style.css"
import img from "../../assets/images/code.jpg"

function Project(props) {

  
    return (
      <div className="project col-4 p-0 ">
            <h2 className="m-0">Title</h2>
            <img className="m-0" src={img} alt=""></img>
            <p>Description</p>
            <button type="button" className="btn btn-dark m-3">Live Site</button>
            <button type="button" className="btn btn-dark">GitHub Repo</button>
          </div>
    );
  }
  
  export default Project;
  