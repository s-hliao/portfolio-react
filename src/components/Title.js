import React from 'react'

export default function Title(props){
    return (
        <section id={props.id} class="container">
        <h1>Hi, I'm Henry.</h1>
        <h3>Software Engineer | Roboticist </h3>


        <p class="hero-cta load-hidden">
          <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about">
                Get to know me.
            </a>
        </p>
        <div>
        <img class="circular" src="https:\\s-hliao.github.io\portfolio-react\My Picture.jpg" alt="Profile Pic" />
        </div>

        </section>
    );
}