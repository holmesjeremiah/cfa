import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HowItWorksModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>How It Works</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4><strong>STEPS FOR FUNDING</strong></h4>
                <ol style={{ paddingLeft: '20px' }}>
                    <li>Apply Online in Minutes</li>
                    <li>Work with a funding advisor to find the best option.</li>
                    <li>Receive your funds as quickly as the same day</li>
                </ol>
                <h4 style={{ color: '#38a154', marginTop: '20px', textAlign: 'center' }}>
                    <strong>RECEIVE UP TO $10,000,000 IN 48 HOURS</strong>
                </h4>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HowItWorksModal;
