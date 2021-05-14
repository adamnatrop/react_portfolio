import "./style.css"


function Project(props) {

  
    return (
      <div className="project col-sm-4 p-0 ">
        <h2 className="m-0">{props.title}</h2>
        <img className="m-0" src={process.env.PUBLIC_URL + props.image} alt={props.title}></img>
        <p>{props.description}</p>
        <button type="button" className="btn btn-dark m-3"><a href={props.liveURL} target="_blank" rel="noreferrer">Live Site</a></button>
        <button type="button" className="btn btn-dark"><a href={props.github} target="_blank" rel="noreferrer">GitHub Repo</a></button>
      </div>
    );
  }
  
  export default Project;
  