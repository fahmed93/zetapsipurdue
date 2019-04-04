import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Alumni from './Components/Alumni';
import About from './Components/About';
import Recruitment from './Components/Recruitment';
import Calendar from './Components/Calendar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/recruitment" component={Recruitment} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/calendar" component={Calendar} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
