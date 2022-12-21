import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Carousel} from 'react-bootstrap';
import '../styles/Hook.css'
import '../styles/Container.css'

export default function Hook(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <td>
            
            <Button className="btn-modal" onClick={handleShow}>
                <img class="button-img" src={props.displayImage} alt="Button image"/>

                    
                    
                    <he4 >
                        <div class="btn-text"id="hook-title">
                        {props.title}
                        </div>
                    </he4>
                    
                    <he4 class="left-justify" >
                        <div id="hook-desc">
                            {props.desc}
                        </div>
                    </he4>
                    
                    
                    <he4 class="left-justify" >
                        <div id="hook-prog">
                            {props.prog}
                        </div>
                    </he4>
                    

            </Button>
            

            <Modal show={show} onHide={handleClose} size="lg" centered >

                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="container-row" id="modal-container">
                        <div class="modalimage">
                            <Carousel>
                                {props.children}
                            </Carousel>
                        </div>

                        <div class="flex1">

                            {props.full}
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <a  href={props.src} >
                        <Button variant="primary" onClick={handleClose}>
                            See Source Code
                        </Button>
                    </a>
                </Modal.Footer>

            </Modal>

        </td>
    );
}