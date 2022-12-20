import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import '../styles/Contact.css'
import '../styles/Container.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Contact(props){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = `mailto:hliao62@gatech.edu?subject=Email from ${name}&body=${message}`;
        window.location.href = formData;
    };

    return (
        <section class="section-container" id="contact">
            <div class="container-col" id="contact-container">
                
                <he2 class="flex1" id="contact-title">
                    <Fade duration={1000}>
                        Contact Me
                    </Fade>
                </he2>
                
                <Fade delay={500}duration={1000}>
                    <form onSubmit={handleSubmit}>
                        
                            <div class="top-boxes container-row">
                                <f2>Name:</f2>
                                &nbsp;
                                &nbsp;
                                <div class="form-group" id="contact-left">
                                    
                                    <input placeholder="Name"type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    style={{
                                        outline:"none",
                                        fontFamily:"Helvetica",
                                        borderRadius:"5px",
                                        border:"none",
                                        padding:"1vh",
                                    }}/>
                                
                                </div>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <f2>Email:</f2>
                                &nbsp; &nbsp;
                                <div class="form-group" id = "contact-right">
                                    
                                    <input placeholder="Email" type="text"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        style={{
                                            outline:"none",
                                            fontFamily:"Helvetica",
                                            borderRadius:"5px",
                                            border:"none",
                                            padding:"1vh",
                                        }}/>
                                </div>
                            </div>
                        

                        <div class="flex1 form-group message ">

                            <textarea placeholder="Message" class="form-control message " rows="5" id="comment" 
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}></textarea>
                        </div>

                            <div class="flex1 form-group message contact-item " id="contact-form">

                                <button type="submit " 
                                style={
                                    { 
                                    outline:"none",
                                    border: "2px solid white",
                                    fontFamily:"Helvetica", 
                                    fontWeight:"bold", 
                                    background:"transparent",
                                    borderRadius:"5px",
                                    fontSize:"2.5vh", 
                                    color:"white",
                                    padding:"1vh",
                                    paddingLeft:"5%",
                                    paddingRight:"5%"}}>
                                        Generate Message
                                                            
                                </button>
                            </div>

                    </form>
                </Fade>

                
               

            </div>
                
        

        </section>
    );
}