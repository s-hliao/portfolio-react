import React from 'react'
import {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'

import '../styles/Title.css'
import '../styles/Container.css'
import '../styles/App.css'
import 'animate.css'
import TopNav from './TopNav';


export default function Title(props){

    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div class="screen-container" id="title-screen">
            <div id="navbar">
                <TopNav/>
            </div>
            <section id="title" >
       
                    <div class="container-row" id="title_row">
                        <div class ="row-item-title"  >
                            <Fade left cascade duration={1000}>
                                <div>
                                    <he1 id="large-title">Hi, I'm Henry.</he1>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <he2>Software Engineer | Roboticist </he2>
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
                <Fade appear={scrollPosition<300} when={scrollPosition<300} duration={100}>
                    <Fade appear delay={1000} duration={500}>
                        <div class="animate__animated animate__pulse">
                            <img  id="chevron" src="https:\\s-hliao.github.io\portfolio-react\chevron-clipart-symbol-1.jpg" alt="Chevron" />
                            <br/>  <br/>
                            <he4 >scroll down to read more</he4>
                        </div>
                    </Fade>
                </Fade>
                        
            </div>
        </div>
       
    );
}