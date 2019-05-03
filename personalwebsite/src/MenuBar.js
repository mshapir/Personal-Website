import React, { Component } from 'react';

class MenuBar extends Component {

  render() {
    return (
      <div className="menubar">

        <a href='/about' className="link">About</a>
        <a href='/projects' className="link">Projects</a>
        <h4 className="manny">Manny Shapir</h4>
        <a href='/resume' className="link">Resume</a>
        <a href='/socialmedia' className="link">Social Media</a>

      </div>
    );
  }

}

export default MenuBar;
