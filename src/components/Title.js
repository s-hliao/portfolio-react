import React from 'react'
import { Container } from 'react-bootstrap';
import {Fade} from 'react-awesome-reveal'

import '../styles/Title.css'
import '../styles/Container.css'
import '../styles/App.css'


export default function Title(props){
    return (
        <div class="screen-container">
            <section id="title" >            
                <div id = "title-container" class="container-row" >
                    <div class ="row-item-title">
                        <Fade left={true} bottom={false} duration={1000} delay={500} distance="30px">
                            <div class ="row-item-title">
                                <h1>Hi, I'm Henry.</h1>
                                <h2>Software Engineer | Roboticist </h2>
                            </div>
                        </Fade>
                    </div>
                    
                    
                        <div class ="row-item-img">
                        <Fade left={true} bottom={false} duration={1000} delay={1000} distance="30px">
                    <div class ="row-item-img">
                       
                            <img class="circular" src="https:\\s-hliao.github.io\portfolio-react\My Picture.jpg" alt="Profile Pic" />
                       
                    </div>
                    </Fade>
                    </div>
                    
                </div>
                        
                    

            


            </section>
        </div>
       
    );
}