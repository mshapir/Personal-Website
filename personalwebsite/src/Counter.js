import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div id="colorlib-counter" class="colorlib-counters" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="colorlib-narrow-content">
          <div class="row">
          </div>
          <div class="row">
            <div class="col-md-3 text-center animate-box">
              <span class="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span>
              <span class="colorlib-counter-label">Cups of coffee</span>
            </div>
            <div class="col-md-3 text-center animate-box">
              <span class="colorlib-counter js-counter" data-from="0" data-to="1750" data-speed="5000" data-refresh-interval="50"></span>
              <span class="colorlib-counter-label">Coding Bootcamp Hours</span>
            </div>
            <div class="col-md-3 text-center animate-box">
              <span class="colorlib-counter js-counter" data-from="0" data-to="7865099871" data-speed="10000" data-refresh-interval="50"></span>
              <span class="colorlib-counter-label">Google Searches</span>
            </div>
            <div class="col-md-3 text-center animate-box">
              <span class="colorlib-counter js-counter" data-from="0" data-to="2" data-speed="5000" data-refresh-interval="50"></span>
              <span class="colorlib-counter-label">Bootcamp Projects</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Counter;
