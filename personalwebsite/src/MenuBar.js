import React, { Component } from 'react';

class MenuBar extends Component {

  render() {
    return (
      <div className="menubar">

        <a href='#' className="link">About</a>
        <a href='#' className="link">Projects</a>
        <h4 className="manny">Manny Shapir</h4>
        <a href='#' className="link">Resume</a>
        <a href='#' className="link">Social Media</a>

      </div>
    );
  }

}

export default MenuBar;
