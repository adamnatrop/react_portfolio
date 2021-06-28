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
              Full Stack Web Developer with video production experience. Recently earned a Certificate in Full Stack Development from the University of Minnesota Coding Bootcamp. Newly developed skills in HTML, CSS, JavaScript, React.js, and Node.js with strengths in problem-solving, creativity, storytelling, self-directed learning, and teamwork. Worked on a team of four to develop a single-page MERN app that helps users share and develop curated product lists for swapping to zero waste alternatives for everyday products. An experienced lead creative, utilizing years of video production knowledge, adapting and applying it to creative web development. Learning new technologies and focusing on solving the next puzzle drives me to create unique user experiences for meaningful web applications. 
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
  