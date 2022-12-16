import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import '../styles/Banner.css'
import '../styles/Container.css'



export default function Banner(props){
    var aboutMeText = "Hi, my name is Henry and I'm a Computer Science student from the Georgia Institute of Technology. I'm keen to understand all approaches to autonomous robotics from engineering to theory. I also spend some of my free time working on the following projects, mainly just cool ideas inspired by my everyday life or conversations with friends. In my free time, I like to cook, practice piano, and play various video games."

    return (
        <section class="section-container" id="banner">
                <Fade>
                    <he2 id="banner-title">
                        About Me
                    </he2>


                    <p>
                      {aboutMeText}
                    </p>
                </Fade>
                
        

        </section>
    );
}