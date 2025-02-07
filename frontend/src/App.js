import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

import Home from './Home.js';
import DataScience from './DataScience.js';

import Article from './Article.js';
import VidLeft from './VidLeft.js';
import VidRight from './VidRight.js';
import Code from './Code.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/datascience" component={DataScience}/>
          <Route path="/vl" component={VidLeft}/>
          <Route path="/vr" component={VidRight}/>
          <Route path="/code" component={Code}/>
          <Route path="/article" component={Article}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
