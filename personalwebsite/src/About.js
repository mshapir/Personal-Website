import React, { Component } from 'react';


class About extends Component {

  render() {
    return (
      <section class="colorlib-about" data-section="about">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-12">
              <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div class="col-md-12">
                  <div class="about-desc">
                    <span class="heading-meta">About Me</span>
                    {/*<h2 class="colorlib-heading">Who Am I?</h2>*/}
                    <p>Growing up in a traditional community that pre-defined most of its members' career paths, I was led to believe that creativity could never earn me a living. I plunged into the sales and real estate industries at a young age and felt the urge to bridge the gaps between my then-current processes and the technology so critical to my success, but couldn’t ignore the voice in my head that kept reminding me that this wasn’t an option for me. With time, I decided to break out of such a mentality and chase a new challenge that lit a fire in me despite my success in my previous roles. Learning to code at the Flatiron School has given me a newly found appreciation for organizations that promote creativity, increase awareness, and enable individuals that would otherwise feel too small to chase their dreams.</p>
                    <p>At the Flatiron School, I dove into the worlds of:</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                  <div class="services color-1">
                    <span class="icon2"><i class="icon-bulb"></i></span>
                    <h3>Object Oriented Design</h3>
                  </div>
                </div>
                <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div class="services color-2">
                    <span class="icon2"><i class="icon-globe-outline"></i></span>
                    <h3>Full Stack Development</h3>
                  </div>
                </div>
                <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
                  <div class="services color-3">
                    <span class="icon2"><i class="icon-data"></i></span>
                    <h3>Database Fundamentals</h3>
                  </div>
                </div>
                <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                  <div class="services color-4">
                    <span class="icon2"><i class="icon-phone3"></i></span>
                    <h3>Web Application Development</h3>
                  </div>
                </div>
              </div>
              {/*
              <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                  <div class="hire">
                    <h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
                    <a href="#" class="btn-hire">Hire me</a>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default About;
