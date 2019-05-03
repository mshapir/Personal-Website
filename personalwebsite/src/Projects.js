import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (
      <div className='main'>
        <div className="project">
          <div>
          test
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RDPoYTMQKiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="project">
          <div>
          tets
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bXue5ycWA3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }

}

export default Projects;
