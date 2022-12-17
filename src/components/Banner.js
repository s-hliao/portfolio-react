import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import '../styles/Banner.css'
import '../styles/Container.css'



export default function Banner(props){
    var aboutMeText = "Hi, my name is Henry and I'm a Computer Science student from the Georgia Institute of Technology. I'm keen to understand all approaches to autonomous robotics from engineering to theory. I also spend some of my free time working on the following projects, mainly just cool ideas inspired by my everyday life or conversations with friends. In my free time, I like to cook, practice piano, and play various video games."

    return (
        <section class="section-container" id="banner">
            <div class="container-col" id="aboutme-container">
                
                <div id="banner-aboutme">
                    <Fade>
                        <he2 id="aboutme">
                            About Me
                        </he2>
                    </Fade>    
                </div>

                <div class="container-row">
                    <div id="banner-p">
                        <Fade>
                            <p id="about-me-text">
                            {aboutMeText}
                            </p>
                        </Fade>
                    </div>
                    
                    <img  id="divider" src="https:\\s-hliao.github.io\portfolio-react\white.jpg" alt="divider" />

                    <div id="banner-p">
                        <Fade>
                            <p id="about-me-text">
                            {aboutMeText}
                            </p>
                        </Fade>
                    </div>
                </div>

            </div>
                
        

        </section>
    );
}