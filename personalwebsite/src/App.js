import React from 'react';
import MenuBar from './MenuBar';
import NavBar from './NavBar';
import Projects from './Projects';
import About from './About';
import Jumbotron from './Jumbotron';
import Resume from './Resume';
import Contact from './Contact';
import Services from './Services';
import Skills from './Skills';
import Education from './Education'
import WorkExp from './WorkExp';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
      {/*
      <MenuBar />
        <Switch>
        <Route
        path='/projects'
        render={() => ( <Projects />)}
        />
        <Route
        path='/resume'
        render={() => ( <Resume />)}
        />
        <Route
        path='/about'
        render={() => (<About />) }
        />
        </Switch>
        */}
        <div class="container-wrap">
        <NavBar />

    		<div id="colorlib-main">
    			<Jumbotron />
          <About />
    			<Services />

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
    							<span class="colorlib-counter js-counter" data-from="0" data-to="2" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="colorlib-counter-label">Projects</span>
    						</div>
    						<div class="col-md-3 text-center animate-box">
    							<span class="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="colorlib-counter-label">Clients</span>
    						</div>
    						<div class="col-md-3 text-center animate-box">
    							<span class="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="colorlib-counter-label">Partners</span>
    						</div>
    					</div>
    				</div>
    			</div>

          <Skills />
          <Education />

    			<WorkExp />

    			<section class="colorlib-work" data-section="work">
    				<div class="colorlib-narrow-content">
    					<div class="row">
    						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
    							<span class="heading-meta">My Work</span>
    							<h2 class="colorlib-heading animate-box">Recent Work</h2>
    						</div>
    					</div>
    					<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
    						<div class="col-md-12">
    							<p class="work-menu"><span><a href="#" class="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
    						</div>
    					</div>
    					<div class="row">
    						<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
    							<div class="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
    								<div class="desc">
    									<div class="con">
    										<h3><a href="work.html">Work 01</a></h3>
    										<span>Website</span>
    										<p class="icon">
    											<span><a href="#"><i class="icon-share3"></i></a></span>
    											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
    											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
    							<div class="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
    								<div class="desc">
    									<div class="con">
    										<h3><a href="work.html">Work 02</a></h3>
    										<span>Animation</span>
    										<p class="icon">
    											<span><a href="#"><i class="icon-share3"></i></a></span>
    											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
    											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
    							<div class="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
    								<div class="desc">
    									<div class="con">
    										<h3><a href="work.html">Work 03</a></h3>
    										<span>Illustration</span>
    										<p class="icon">
    											<span><a href="#"><i class="icon-share3"></i></a></span>
    											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
    											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
    							<div class="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
    								<div class="desc">
    									<div class="con">
    										<h3><a href="work.html">Work 04</a></h3>
    										<span>Application</span>
    										<p class="icon">
    											<span><a href="#"><i class="icon-share3"></i></a></span>
    											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
    											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
    							<div class="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
    								<div class="desc">
    									<div class="con">
    										<h3><a href="work.html">Work 05</a></h3>
    										<span>Graphic, Logo</span>
    										<p class="icon">
    											<span><a href="#"><i class="icon-share3"></i></a></span>
    											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
    											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
    							<div class="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
    								<div class="desc">
    									<div class="con">
    										<h3><a href="work.html">Work 06</a></h3>
    										<span>Web Design</span>
    										<p class="icon">
    											<span><a href="#"><i class="icon-share3"></i></a></span>
    											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
    											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    					<div class="row">
    						<div class="col-md-12 animate-box">
    							<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
    						</div>
    					</div>
    				</div>
    			</section>

    			<section class="colorlib-blog" data-section="blog">
    				<div class="colorlib-narrow-content">
    					<div class="row">
    						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
    							<span class="heading-meta">Read</span>
    							<h2 class="colorlib-heading">Recent Blog</h2>
    						</div>
    					</div>
    					<div class="row">
    						<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
    							<div class="blog-entry">
    								<a href="blog.html" class="blog-img"><img src="images/blog-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
    								<div class="desc">
    									<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
    									<h3><a href="blog.html">Renovating National Gallery</a></h3>
    									<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
    							<div class="blog-entry">
    								<a href="blog.html" class="blog-img"><img src="images/blog-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
    								<div class="desc">
    									<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
    									<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
    									<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    								</div>
    							</div>
    						</div>
    						<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
    							<div class="blog-entry">
    								<a href="blog.html" class="blog-img"><img src="images/blog-3.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
    								<div class="desc">
    									<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
    									<h3><a href="blog.html">Make website from scratch</a></h3>
    									<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    								</div>
    							</div>
    						</div>
    					</div>
    					<div class="row">
    						<div class="col-md-12 animate-box">
    							<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
    						</div>
    					</div>
    				</div>
    			</section>

    			<Contact />

    		</div>
    	</div>
      </div>
    );
  }
}

export default App;
