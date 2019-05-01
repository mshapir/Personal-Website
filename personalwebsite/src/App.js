import React from 'react';
import MenuBar from './MenuBar';
import Projects from './Projects';
import About from './About';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <About />
        <MenuBar />
        <Projects />
      </div>
    );
  }
}

export default App;
