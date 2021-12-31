import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from "./Components/home/Home";
import About from "./Components/about/About";
import {Menu} from "./Components/menu/Menu";
import {Contact} from "./Components/contact/Contact";


class App extends Component {
  render () {
    return (
      <React.Fragment> 
        <Router>
          <Link>
            <Route exact path="/" component={<Home />}/>
            <Route exact path="/about" component={<About />}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={404}/>
          </Link>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;
