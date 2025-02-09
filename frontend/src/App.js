import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

import Home from './Home.js';
import DataScience from './DataScience.js';
import Economics from './Economics.js';
import Finance from './Finance.js';
import Contact from './Contact.js';

import Article from './Article.js';
import Code from './Code.js';

import FinanceED from './FinanceED.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/datascience" component={DataScience}/>
          <Route path="/economics" component={Economics}/>
          <Route path="/finance" component={Finance}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/code" component={Code}/>
          <Route path="/article" component={Article}/>
          <Route path="/finED" component={FinanceED}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
