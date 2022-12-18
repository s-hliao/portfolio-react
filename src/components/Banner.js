import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import '../styles/Banner.css'
import '../styles/Container.css'
import "bootstrap/dist/css/bootstrap.min.css"

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

                <div class="container-row" id="aboutmerow">
                    <div id="banner-p">
                        <Fade delay={250}duration={1000}>
                            <p id="about-me-text">
                            {aboutMeText}
                            </p>
                        </Fade>
                    </div>
                    

                    
                    <div class="vr" id="divider"/>

                    <div id="banner-p">
                        <Fade  delay={500} duration={1000}>
                            <div class="container-col" id="btn-container">
                                <div class="btn-padding">
                                    <a  href="https:\\s-hliao.github.io\portfolio-react\Resume Henry Liao.pdf" >
                                        <btn type="button btn btn-outline-light btn-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 19 19">
                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                            </svg>
                                            &nbsp;
                                            Resume
                                        </btn>
                                    </a>
                                </div>

                                <div class="btn-padding">
                                    <a  href="https://github.com/s-hliao" >
                                        <btn type="button btn btn-outline-light btn-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 19 19">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                        &nbsp;
                                         Github
                                            
                                        </btn>
                                    </a>
                                </div>
                                <div class="btn-padding">
                                    <a  href="https://www.linkedin.com/in/henry-liao-890470198/" >
                                        <btn type="button btn btn-outline-light btn-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 19 19">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                            </svg>
                                            &nbsp;
                                                LinkedIn
                                            
                                        </btn>
                                    </a>
                                </div>
                            </div>
                            

                        </Fade>
                    </div>
                </div>

            </div>
                
        

        </section>
    );
}