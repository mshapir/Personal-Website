import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (


      <section class="colorlib-work" data-section="work">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Projects</span>
              <h2 class="colorlib-heading animate-box"></h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9 pb-0 animate-box" data-animate-effect="fadeInLeft">
              <div class="project">
              <iframe title="parkme" width="560" height="300" src="https://www.youtube.com/embed/RDPoYTMQKiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
              <div class="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
                <div class="desc">
                  <div class="con" style={{overflow: 'scroll'}}>
                    <h3><a href="#">ParkMe</a></h3>
                    <p>
                      <span>Designed a REST API in Ruby on Rails with numerous endpoints to communicate with a React frontend that displays information about available parking listings, their ratings, and booking information. Leveraged encryption and decryption technologies to build out an authentication system from scratch, incorporating the option of social login through Google or Facebook for a more friendly user experience. Implemented two user modes for users to easily toggle between a user that wants to list a parking spot and a user that wants to book a parking spot, maximizing ParkMe’s user pool. Created a data model that served as a visual representation of the different pieces of data and their flow from a PostgreSQL database all the way through to the application.</span>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
              <div class="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
                <div class="desc">
                  <div class="con" style={{overflow: 'scroll'}}>
                    <h3><a href="#">Music App</a></h3>
                    <p>
                      <span>Collaborated with a team of 2 to design a React frontend and Ruby on Rails backend web application. Utilized the Spotify API to allow users access to Spotify’s wide music selection and playlist capability.Styled the application with Twitter Bootstrap.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9 pb-0 animate-box" data-animate-effect="fadeInBottom">
              <div class="project">
                <iframe title="musicapp" width="560" height="300" src="https://www.youtube.com/embed/bXue5ycWA3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Projects;

// <div className='main'>
//   <div className="project">
//     <div>
//     test
//     </div>
//     <div>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/RDPoYTMQKiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     </div>
//   </div>
//   <div className="project">
//     <div>
//     tets
//     </div>
//     <div>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/bXue5ycWA3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     </div>
//   </div>
// </div>
