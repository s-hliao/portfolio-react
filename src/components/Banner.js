import React from 'react'
import { Container } from 'react-bootstrap';
import {Fade} from 'react-awesome-reveal'


export default function Banner(props){
    return (
        <section id={props.id}>
                <Fade left={true} bottom={false} duration={1000} delay={500} distance="30px">
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