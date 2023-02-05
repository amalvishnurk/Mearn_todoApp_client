import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Todo({ text, updateMode, deleteMode }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
<>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you have done this task ' {text} ' ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={deleteMode}>Yes</Button>
        </Modal.Footer>
      </Modal>
            <div className='todo'>
                <div className='text'>{text}</div>
                <div className='icons'>
                    <div className='icon'>
                        <BiEdit className='icon' onClick={updateMode} />
                        <AiFillDelete className='icon' onClick={handleShow} />
                    </div>
                </div>
            </div>
</>

    )
}

export default Todo