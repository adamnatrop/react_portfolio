import profilePic from "../../assets/images/profile_pic.png";
import "./style.css"



function About() {

  
    return (
      <div className="container about">
        <div className="row justify-content-end">
          <div className="row">
            <div className="col-sm-6">
              <h1>About Me</h1>
            </div>
            
          </div>
          <div className="row">
            <div className="col-sm-4 picContain pt-2">
              <img className="profilePic" src={profilePic} alt="Adam" />
            </div>
            <div className="col-sm-8 pt-4 ">
              <p className="about-para">
                Adam is a hard working professional currently running through the gauntlet that is coding bootcamp. By joining this bootcamp, Adam is learning new programing languages and skills to become an outstanding web developer. His focus, dedication and attention to detail is what you're looking for in a developer.
                <br/>
                <br/>
                HTML5, CSS, JavaScript, Node.js, Express, MySql, MongoDB, Mongoose, React
              </p>

              <div className="container contact">
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="card-title">Contact</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Web Developer for Hire</h6>
                    <p className="card-text" phone="6123617719">612 361 7719</p>
                    <p className="card-text" ><a href="mailto:adamnatrop@gmail.com">adamnatrop@gmail.com</a></p>
                  </div>
                </div>
              </div>
                
              
            </div>
          </div>
        </div>
        

      </div>
    );
  }
  
  export default About;
  