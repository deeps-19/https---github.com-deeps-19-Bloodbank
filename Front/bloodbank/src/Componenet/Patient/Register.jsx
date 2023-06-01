import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [state ,setState]=useState({
        Name:"",
        Lname:"",
        Username:"",
        Password:"",
        Age:"",
        Bloodgroup:"",
        Deasise:"",
        Doctor:"",
        Address:"",
        Mobile:""
    });
    const handelInput=(e)=>{
        let name = e.target.id;
        let value = e.target.value;
        console.log(name,value);
        setState({...state, [name]:value});
      };
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" >
        
        
        <Form.Group as={Col} controlId="Name" >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={state.Name}
            onChange={handelInput}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="Lname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={state.Lname}
            onChange={handelInput}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row> 

        <Form.Group as={Col} controlId="Username">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={state.Username}
              onChange={handelInput}
               
              />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
    
      
        <Form.Group as={Col} controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="Password" 
            placeholder="City" 
            required
            value={state.Password} 
           
            onChange={handelInput}
             
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        

     
        <Row>

        <Form.Group as={Col} controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Age" 
            required 
            value={state.Age}
            onChange={handelInput}
           
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid age.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="Bloodgroup">
        <Form.Label>Blood Group</Form.Label>
       
        <Form.Select aria-label="Default select example">
            <option>Select Blood Group</option>
            <option value={state.Bloodgroup} onChange={handelInput} >A+</option>
            <option value={state.Bloodgroup}  onChange={handelInput}>B-</option>
            <option value={state.Bloodgroup}  onChange={handelInput}>B+</option>
            <option value={state.Bloodgroup}  onChange={handelInput}>AB-</option>
            <option value={state.Bloodgroup}  onChange={handelInput}>AB+</option>
            <option value={state.Bloodgroup}  onChange={handelInput}>o+</option>
            <option value={state.Bloodgroup}  onChange={handelInput}>o-</option>
           </Form.Select>
        
        </Form.Group>
        </Row>
        <Row>

        <Form.Group as={Col} controlId="Deasise">
          <Form.Label>Disease</Form.Label>
          <Form.Control type="text" placeholder="Disease" required value={state.Deasise}  onChange={handelInput}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Disease.
          </Form.Control.Feedback>
        </Form.Group>
        
       <Form.Group as={Col} controlId="Doctor">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control type="text" placeholder="Doctor Name" required value={state.Doctor} onChange={handelInput} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Doctor Name.
          </Form.Control.Feedback>
        </Form.Group>
        
        </Row>
        <Row>

        <Form.Group as={Col} controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required value={state.Address} onChange={handelInput}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
        
       <Form.Group as={Col} controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Mobile" required value={state.Mobile} onChange={handelInput}   />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Mobile.
          </Form.Control.Feedback>
        </Form.Group>
        
        </Row>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  )
}

export default Register
