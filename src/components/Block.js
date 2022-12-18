import React from 'react'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade'
import "../styles/Block.css"
import "../styles/Container.css"
import Table from 'react-bootstrap/Table';

export default function Block(props){
    return(
        <section id={props.id} className="block stack-small">
            <div class="section-container">
                <div class="container-col">
                    <Fade >
                        <he2 class="flex1" id="block-title">
                            {props.title}
                        </he2>
                    </Fade>
                    <Fade >
                        {props.children}
                    </Fade>
                </div>
                
            </div>
            

            
        </section>
    );
}