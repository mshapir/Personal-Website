import React from 'react';
import MenuBar from './MenuBar';
import NavBar from './NavBar';
import Projects from './Projects';
import About from './About';
import Jumbotron from './Jumbotron';
import Resume from './Resume';
import Contact from './Contact';
import Services from './Services';
import Skills from './Skills';
import Education from './Education'
import WorkExp from './WorkExp';
import Counter from './Counter';
import Blogs from './Blogs';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <div class="container-wrap">
          <NavBar />
      		<div id="colorlib-main">
      			<Jumbotron />
            <About />
      			<Counter />
            <Skills />
            <Education />
      			<WorkExp />
      			<Projects />
      			<Blogs />
      			<Contact />
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;

// <Services />

//
// <MenuBar />
//   <Switch>
//   <Route
//   path='/projects'
//   render={() => ( <Projects />)}
//   />
//   <Route
//   path='/resume'
//   render={() => ( <Resume />)}
//   />
//   <Route
//   path='/about'
//   render={() => (<About />) }
//   />
//   </Switch>
