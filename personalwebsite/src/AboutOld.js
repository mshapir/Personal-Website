import React, { Component } from 'react';


class About extends Component {

  render() {
    return (
      <div className='aboutme'>
        <div className='picture'>
          <img src={require('./IMG_6735.JPG')} />
        </div>
        <p>Growing up in a traditional community that pre-defined most of its members' career paths, I was led to believe that creativity could never earn me a living. I plunged into the sales and real estate industries at a young age and felt the urge to bridge the gaps between my then-current processes and the technology so critical to my success, but couldn’t ignore the voice in my head that kept reminding me that this wasn’t an option for me. With time, I decided to break out of such a mentality and chase a new challenge that lit a fire in me despite my success in my previous roles. Learning to code at the Flatiron School has given me a newly found appreciation for organizations that promote creativity, increase awareness, and enable individuals that would otherwise feel too small to chase their dreams.</p>
      </div>
    );
  }

}

export default About;
