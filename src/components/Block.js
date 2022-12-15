import React from 'react'
import Container from 'react-bootstrap/Container';
import {Fade} from 'react-awesome-reveal';

export default function Block(props){
    return(
        <section id={props.id} className="block stack-small">
            <Fade left={true} bottom={false} duration={1000} delay={500} distance="30px">
                <h2>
                    {props.title}
                </h2>
                <div className="content padding">
                    {props.children}
                </div>
            </Fade>

            
        </section>
    );
}