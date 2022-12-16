import React from 'react'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade'

export default function Block(props){
    return(
        <section id={props.id} className="block stack-small">
            <Fade >
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