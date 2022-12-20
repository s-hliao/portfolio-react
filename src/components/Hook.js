import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

export default function Hook(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <td>

            <Button className="btn-modal" onClick={handleShow}>
                <img src={props.displayImage} alt="Button image"/>
            </Button>

            <Modal show={show} onHide={handleClose} size="sm">

                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    This is the body of the modal.
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>

            </Modal>

        </td>
    );
}