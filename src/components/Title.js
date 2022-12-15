import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'

import '../styles/Title.css'
import '../styles/Container.css'
import '../styles/App.css'


export default function Title(props){
    return (
        <div class="screen-container" id="title-screen">
            <section id="title" >
       
                    <div class="container-row" id="title_row">
                        <div class ="row-item-title"  >
                            <Fade left cascade duration={1000}>
                                <div>
                                    <h1>Hi, I'm Henry.</h1>
                                    <h2>Software Engineer | Roboticist </h2>
                                </div>
                            </Fade>
                        </div>
                        <div class ="row-item-img">
                            <Fade  delay={500} duration={1000}>
                                <div class ="row-item-img">
                                    <img class="circular" src="https:\\s-hliao.github.io\portfolio-react\My Picture.jpg" alt="Profile Pic" />
                                </div>
                            </Fade>
                        </div>
                    </div>

                    
            </section>
            <div id="read_more">
                <Fade  delay={2000} duration={1500}>
                    <img src="https:\\s-hliao.github.io\portfolio-react\R.png" alt="Chevron" />
                     <h4>scroll down to read more</h4>
     
                </Fade>
                        
            </div>
        </div>
       
    );
}