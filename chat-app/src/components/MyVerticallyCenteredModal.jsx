import {Form,Modal,Button, InputGroup} from 'react-bootstrap'
import { useState } from 'react';
import { nanoid } from 'nanoid';


export default function MyVerticallyCenteredModal() {

  const [name, setName] = useState("")
  const [validated, setValidated] = useState(false);

  const onSubmitHandler=(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault()
    if (form.checkValidity() === true)
    window.location.replace(`/app/${name}&${nanoid()}`)       
        }
  

  return (
    <Modal show={true}      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
       <Form noValidate validated={validated} onSubmit={(e)=>{onSubmitHandler(e)}} >
        <InputGroup hasValidation>        
          <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Enter your username to get started</Form.Label>
              <Form.Control 
              required 
              type="text" 
              placeholder="Enter your username here" 
              onChange={(event)=>{setName(event.target.value)}}
              data-error-msg="Must enter your name?"
              />  
          </Form.Group>
          <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </InputGroup>

              <Button type='submit'>Start Chatting</Button>
</Form> 
        
      </Modal.Body>   
    </Modal>
  );
  }
