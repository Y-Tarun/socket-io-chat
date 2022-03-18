import {Form,Modal,Button} from 'react-bootstrap'
import { useState } from 'react';

export default function MyVerticallyCenteredModal(props) {

  const [name, setName] = useState("")

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connecting Musicians
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter your username to get started</Form.Label>
    <Form.Control type="text" placeholder="Enter your username here" onChange={(event)=>{setName(event.target.value)}}/>  
  </Form.Group>

 
  
</Form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{       
          props.setUserName(name)
          props.onHide()}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
