import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div>

      <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
      <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
        <div class="text-center">
          <div class="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
          <h1 id="colorlib-logo"><a href="index.html">Manny Shapir</a></h1>
          <span class="position">Software Engineer</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" class="navbar">
          <div id="navbar" class="collapse">
            <ul>
              <li class="active"><a href="#" data-nav-section="home">Home</a></li>
              <li><a href="#" data-nav-section="about">About</a></li>
              <li><a href="#" data-nav-section="skills">Skills</a></li>
              <li><a href="#" data-nav-section="education">Education</a></li>
              <li><a href="#" data-nav-section="experience">Experience</a></li>
              <li><a href="#" data-nav-section="work">Projects</a></li>
              <li><a href="#" data-nav-section="blog">Blog</a></li>
              <li><a href="#" data-nav-section="contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <div class="colorlib-footer">
          <ul style={{display: 'inline'}}>
            <li><a href="https://www.facebook.com/manny.shapir"><i class="icon-facebook2" target="_blank"></i></a></li>
            <li><a href="https://github.com/mshapir" target="_blank"><i class="icon-github"></i></a></li>
            <li><a href="https://www.instagram.com/mannyshapir/"><i class="icon-instagram" target="_blank"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mshapir/" target="_blank"><i class="icon-linkedin2"></i></a></li>
          </ul>
          <p><small>Made with <i class="icon-heart" aria-hidden="true"></i> & <i class="icon-large icon-beer"></i> <p>Inspired by <a href="https://colorlib.com" target="_blank">Colorlib</a></p></small></p>
        </div>

      </aside>

      </div>
    );
  }

}

export default NavBar;

// <li><a href="#" data-nav-section="services">Services</a></li>
