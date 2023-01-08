import { Card } from "react-bootstrap";
import { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';


function CardComponent({ image, description, author, OnChangeUpdate, DeleteMethod, PutMethod, id }) {
    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function CloseFunction() {
        PutMethod(id)
        setShow(false)
    }
    return (
        <div>
            hola soy una card
        </div>
    );
}
export default CardComponent;