
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const history =useNavigate();
    const [validated, setValidated] = useState(false);
    const [state ,setState]=useState({
         Username:"",
        Password:"",
       
    });
    const addContact = async(data)=>{
        const response = await axios.post("http://localhost:5000/user" , data);
        if(response.status ===200 )
    {
        alert("User Login Successfully");
        history('/dashboard')
    }
    else{
      alert("error")
    }
      };
      
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
        else{
            addContact(state);
             
           
          }
      
  
      setValidated(true);
    };
  return (
    <div>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        
        <Form.Group as={Col} controlId="Username" >
          <Form.Label>UserName</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="UserName"
            value={state.Username}
            onChange={handelInput}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={state.Password}
            onChange={handelInput}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        
      <Button type="submit">Login</Button>
    </Form>
    </div>
  )
}

export default Login
