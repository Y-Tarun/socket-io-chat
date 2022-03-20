import {Form,Modal,Button} from 'react-bootstrap'
import { useState } from 'react';

export default function MyVerticallyCenteredModal() {

  const [name, setName] = useState("")

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    window.location.replace(`/app/${name}`)       
        }
  

  return (
    <Modal show={true}      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connecting
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Form onSubmit={(e)=>{onSubmitHandler(e)}}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Enter your username to get started</Form.Label>
              <Form.Control required type="text" placeholder="Enter your username here" onChange={(event)=>{setName(event.target.value)}}/>  
          </Form.Group>

  <Button type='submit'>Submit</Button>
</Form>
        
      </Modal.Body>   
    </Modal>
  );
  }
