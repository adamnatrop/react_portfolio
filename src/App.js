import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper";




function App() {



  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Wrapper>
        <Route exact path="/react_portfolio" component={About} />
          <Route exact path="/react_portfolio/" component={About} />
          <Route exact path="/react_portfolio/about" component={About} />
          <Route exact path="/react_portfolio/projects" component={Projects} />
          <Route exact path="/react_portfolio/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
