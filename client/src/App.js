import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Portfolios from "./pages/Portfolios";
import PortfoliosMain from "./pages/PortfoliosMain";
import PortfoliosReact from "./pages/PortfoliosReact";
import PortfoliosPython from "./pages/PortfoliosPython";
import PortfoliosJavascript from "./pages/PortfoliosJavascript";
import PortfoliosWordpress from "./pages/PortfoliosWordpress";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route exact path="/portfolios" component={PortfoliosMain} />
        <Route path="/portfolios/react" component={PortfoliosReact} />
        <Route path="/portfolios/python" component={PortfoliosPython} />
        <Route path="/portfolios/javascript" component={PortfoliosJavascript} />
        <Route path="/portfolios/wordpress" component={PortfoliosWordpress} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
