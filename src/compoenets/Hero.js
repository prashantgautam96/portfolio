import React from 'react'
import "./hero.css"


export const Hero = () => {
  return (
    <div className='hero' > 
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                <li>
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                            <h1>Hi! <br />I'm Prashant Gautam</h1>
                           <p><a >Download CV</a></p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </li>
                 
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                            <p>
                            “I am a web developer with experience in React, Node.js, PostgreSQL, MongoDB, computer vision and natural language processing (NLP). Ans passionate about creating beautiful and functional web applications that solve real-world problems. In their free time, they enjoy hiking and reading.”
                            </p>
                           <p><a >Explore GitHub</a></p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                
  
                </ul>
            </div>
        </section>
      </div>
       
        
    </div>
   
  )
}
