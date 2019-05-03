import React, { Component } from 'react';

class Education extends Component {

  render() {
    return (
      <section class="colorlib-education" data-section="education">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Education</span>
              <h2 class="colorlib-heading animate-box"></h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div class="fancy-collapse-panel">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Flatiron School
                              </a>
                          </h4>
                      </div>
                      <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                           <div class="panel-body">
                              <div class="row">
                              <div class="col-md-12">
                                <p>Full Stack Web Development Immersive, 2018 - 2019</p>
                                <p>Being a software engineer requires more than knowing how to code or build a web app. Over 15 intense weeks on-campus at Flatiron School, students learn to think, and build, like software engineers – from developing coding mastery to gaining an understanding of how products are designed and managed. In each three-week curriculum module, students develop key skills through interactive labs, lectures, and close collaboration, showcasing progress through Portfolio Projects.</p>
                              </div>
                            </div>
                           </div>
                      </div>
                  </div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                          <h4 class="panel-title">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Python Bootcamp
                              </a>
                          </h4>
                      </div>
                      <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div class="panel-body">
                              <p>Udemy Python Bootcamp: Go from zero to hero in Python 3</p>
                              <p>Some covered topics include: Command Line Basics, Installing Python, Running Python Code, Strings, Lists, Dictionaries, Tuples, Sets, Number Data Types, Print Formatting, Functions, Scope, args/kwargs, Built-in Functions, Debugging and Error Handling, Modules, External Modules, Object Oriented Programming, Inheritance, Polymorphism, File I/O, Advanced Methods, Unit Tests</p>
                          </div>
                      </div>
                  </div>
                  <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                          <h4 class="panel-title">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Magen David Yeshivah Celia Esses High School
                              </a>
                          </h4>
                      </div>
                      <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div class="panel-body">
                              <p>High School Advanced Regents Diploma</p>
                              <p>AP Scholar</p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Education;
