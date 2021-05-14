import "./style.css"
import resume from "../../assets/misc/resume_dev.pdf"


function Footer() {

  
    return (
     <footer className="mt-auto">
        <div className="container mt-2">
          <div className="row">
            <div className="col-sm-4">
              <h5><a href="https://github.com/adamnatrop" target="_blank">GitHub Profile</a></h5>
            </div>
            <div className="col-sm-4">
              <h5><a href="https://www.linkedin.com/in/kryolumadam/" target="_blank">LinkedIn Profile</a></h5>
            </div>
            <div className="col-sm-4">
              <h5><a href={resume} target="_blank">Download Resume</a></h5>
            </div>
          </div>
        </div>
     
      

     </footer>
    );
  }
  
  export default Footer;
  