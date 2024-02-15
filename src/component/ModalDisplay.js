import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./ModalDisplay.css"; // Corrected import statement

const ModalDisplay = () => {
    const [show, setShow] = useState(false);

    const handleBuy = () => {
        setShow(true);
    };

    const handleConfirmBuy = () => {
        alert("confirmed your order ")
        setShow(false);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="container">
            <Button variant="primary" onClick={handleBuy}>Buy</Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm your product!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Size</th>
                                <th>Color</th>
                                <th>Belt</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jeans</td>
                                <td>32</td>
                                <td>Black</td>
                                <td>32</td>
                                <td>1</td>
                                <td>1100</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleConfirmBuy}>Buy</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalDisplay;
