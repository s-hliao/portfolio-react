import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'


export default function Banner(props){
    return (
        <section id={props.id}>
                <Fade left>
                    <h2>
                        {props.title}
                    </h2>


                    <p>
                        {props.text}
                    </p>
                </Fade>
                
        

        </section>
    );
}