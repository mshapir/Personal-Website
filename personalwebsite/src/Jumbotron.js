import React, { Component } from 'react';

class Jumbotron extends Component {

  render() {
    return (
      <section id="colorlib-hero" class="js-fullheight" data-section="home">
        <div class="flexslider js-fullheight">
          <ul class="slides">
            <li style={{backgroundImage: 'url(images/img_bg_4.jpeg)'}}>
              <div class="overlay"></div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div class="slider-text-inner js-fullheight">
                      <div class="desc">
                        <h1>Hi! <br/>I'm Manny</h1>
                        {/*<h2>A self made full stack engineer</h2>*/}
                        <p><a class="btn btn-primary btn-learn">Download Resume <i class="icon-download4"></i></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: 'url(images/img_bg_3.jpg)'}}>
              <div class="overlay"></div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 col-md-offset-9 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div class="slider-text-inner">
                      <div class="desc" style={{textAlign: 'right'}}>
                        <h1>I am an <br/>engineer,</h1>
                        <h2>and I love to build things.</h2>
                        {/*<p><a class="btn btn-primary btn-learn">View Portfolio <i class="icon-briefcase3"></i></a></p>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            </ul>
          </div>
      </section>
    );
  }

}

export default Jumbotron;
