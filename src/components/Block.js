import React from 'react'
export default function Block(props){
    return(
        <section id={props.id} className="block stack-small">
            <h2>
                {props.title}
            </h2>
            <div className="content padding">
                {props.children}
            </div>
            
        </section>
    );
}