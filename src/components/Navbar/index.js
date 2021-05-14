import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {

  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                    <a className="nav-link" href="/react_portfolio/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/react_portfolio/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/react_portfolio/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/react_portfolio/contact">Contact</a>
                    </li>
                </ul>
                
                
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavBar;
  