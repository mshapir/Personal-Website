import React, { Component } from 'react';

class Blogs extends Component {

  render() {
    return (
      <section class="colorlib-blog" data-section="blog">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Read</span>
              <h2 class="colorlib-heading"></h2>
            </div>
          </div>
          <div class="row">
          <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
            <div class="blog-entry">
              <a href="https://medium.com/@mshapir95/will-ai-replace-programmers-d9c58ddd536c" target="_blank" rel="noopener noreferrer" class="blog-img"><img src="https://cdn-images-1.medium.com/max/1600/1*FmzUSvp5BDdh-SKAYPzTCg.png" class="img-responsive" alt="Will AI replace programmers?"/></a>
              <div class="desc">
                <span><small>January 8, 2019 </small> | <small> Artificial Intelligence </small></span>
                <h3><a href="https://medium.com/@mshapir95/will-ai-replace-programmers-d9c58ddd536c" target="_blank" rel="noopener noreferrer">Will AI replace programmers?</a></h3>
                <p>The Hollywood fiction of AI supplanting humans hasn’t come true yet. We are far from a 2001: A Space Odyssey scenarios of a rogue AI turning against its human masters and killing off space crews.That does not stop filmmakers from generously employing the theme of AI rebellion in their works.</p>
              </div>
            </div>
          </div>
            <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
              <div class="blog-entry">
                <a href="https://medium.com/datadriveninvestor/virtual-reality-vr-and-how-it-can-make-a-difference-in-our-world-297e9e1761da" target="_blank" rel="noopener noreferrer" class="blog-img"><img src="https://cdn-images-1.medium.com/max/1600/1*0TH0X3UWOMsbmC_K04LLfw.png" class="img-responsive" alt="Virtual Reality (VR): Which alternate universe would you enter if you had the chance?"/></a>
                <div class="desc">
                  <span><small>December 12, 2018 </small> | <small> Artificial Intelligence </small> | <small> Publicated on Data Driven Investor</small></span>
                  <h3><a href="https://medium.com/datadriveninvestor/virtual-reality-vr-and-how-it-can-make-a-difference-in-our-world-297e9e1761da" target="_blank" rel="noopener noreferrer">Virtual Reality (VR): Which alternate universe would you enter if you had the chance?</a></h3>
                  <p>If done right, an animated film or video game can leave viewers or players wishing they could make the experience a reality. The evolution of digital media has brought with it a tremendous degree of realism, transforming the way we view and interact with the medium. The leap from old-fashioned projector films to multi-dimensional movies is only one example of the rapid pace at which the industry is moving in its efforts to take the human experience to the next level — the precise goal of virtual reality.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
              <div class="blog-entry">
                <a href="https://medium.com/datadriveninvestor/artificial-intelligence-ai-will-save-the-world-or-take-over-the-world-3b74d32f554" target="_blank" rel="noopener noreferrer" class="blog-img"><img src="https://cdn-images-1.medium.com/max/1600/1*f8uTVwpQDkFQcY1cLzDRIg.png" class="img-responsive"  alt="Artificial Intelligence (AI) is changing the world as we know it… for better or for worse."/></a>
                <div class="desc">
                  <span><small>November 28, 2018 </small> | <small> Artificial Intelligence </small> | <small> Publicated on Data Driven Investor</small></span>
                  <h3><a href="https://medium.com/datadriveninvestor/artificial-intelligence-ai-will-save-the-world-or-take-over-the-world-3b74d32f554" target="_blank" rel="noopener noreferrer">Artificial Intelligence (AI) is changing the world as we know it… for better or for worse.</a></h3>
                  <p>Ever since the inception of artificial intelligence, we have seen it revolutionize virtually every industry. From Siri to self-driving cars, the rapid evolution of AI has allowed humans to reap benefits like speed, efficiency, and convenience. But the closer machines get to actually adapting human-like qualities, the more powerful they get.</p>
                </div>
              </div>
            </div>
          </div>
          {/*
          <div class="row">
            <div class="col-md-12 animate-box">
              <p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
            </div>
          </div>
          */}
        </div>
      </section>
    );
  }

}

export default Blogs;
