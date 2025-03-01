import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from './Navbar.js';
import Footer from './Footer.js';
import About from './About.js';

import Home from './Home.js';
import DataScience from './DataScience.js';
import Economics from './Economics.js';
import Finance from './Finance.js';
import Contact from './Contact.js';

import Code from './Code.js';

import ArticleTemplate from './ArticleTemplate.js';
import ArticleContainer from './ArticleContainer.js';

import ArtEarn from './ArtEarn.js';
import ArtRMT from './ArtRMT.js';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/datascience" component={DataScience}/>
          <Route exact path="/economics" component={Economics}/>
          <Route path="/mathematics/rmt" component={ArtRMT}/>
          <Route exact path="/finance" component={Finance}/>
          <Route exact path="/finance/earnings" component={ArtEarn}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/code" component={Code}/>
          <Route path="/article" component={ArticleContainer}/>
          <Route path="/trading-bot"/>
          <Route path="/template" component={ArticleTemplate}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
