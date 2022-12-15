import React from 'react'
import { Container } from 'react-bootstrap';
import {Fade} from 'react-awesome-reveal'
import '../styles/Container.css'
import '../styles/Title.css'


export default function Title(props){
    return (
        <section id="title" >
            
            <Fade left={true} bottom={false} duration={1000} delay={500} distance="30px">
                <div class="container-row">
                    <div class ="row-item">
                        <h1>Hi, I'm Henry.</h1>
                        <h3>Software Engineer | Roboticist </h3>


                        <p class="hero-cta load-hidden">
                        <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about">
                                Get to know me.
                            </a>
                        </p>
                    </div>

                    <div class ="row-item">
                        <img class="circular" src="https:\\s-hliao.github.io\portfolio-react\My Picture.jpg" alt="Profile Pic" />
                    </div>
                </div>
                        
                    

            </Fade>


        </section>
    );
}