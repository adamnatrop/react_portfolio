import Navbar  from "../Navbar";
import "./style.css";

function Header() {

  
    return (
        <>
        <Navbar />
        <header className="container-fluid">
            <div className="row">
                <h1 className="col-12">Web Developer Portfolio</h1>
            </div>
        </header>
        
        </>
    );
  }
  
  export default Header;
  