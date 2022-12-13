import React from 'react'


export default function Banner(props){
    return (
        <section id={props.id}>
            <h2>
                {props.title}
            </h2>


            <p>
                {props.text}
            </p>
        

        </section>
    );
}