import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import Dmain from './Dmain';

const Donateblood = () => {
    const history =useNavigate();
    const [validated, setValidated] = useState(false);
    const [state ,setState]=useState({
       Bloodgroup:"",
        Unit:"",
        Disease :"",
        Age :""
    });
    const addContact = async(data)=>{
        const response = await axios.post("http://localhost:5000/doner/donate",data);
        if(response.status ===200 )
        {
            alert("data add");
        
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
        history("/home"); 
      }
  
      setValidated(true);
    };
  return (
    <div>
        <Dmain/>
    
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div class="wrapper wrapper--w790">
      
        <div style={{MarginLeft:"70px"}} class="card card-5">
            <div class="card-heading">
                <h2 class="title">DONATE BLOOD</h2>
            </div>
            <div class="card-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                   
                    <div class="form-row">
                        <div class="name">Blood Group</div>
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="bloodgroup" value={state.Bloodgroup} onChange={handelInput} id="Bloodgroup">
                                        <option disabled="disabled" selected="selected">Choose option</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                    </select>
                                    <div class="select-dropdown"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Unit (in ml)</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control type="text" placeholder="Unit" required value={state.Unit} onChange={handelInput} id="Unit"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Disease (if any)</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control type="text" placeholder="Disease " required value={state.Disease } id="Disease" onChange={handelInput}/>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Age</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control type="text" placeholder="Age" required value={state.Age} id="Age" onChange={handelInput}/>
                            </div>
                        </div>
                    </div>

                 



                    <div>
                        <button class="btn btn--radius-2 btn-danger" type="submit">DONATE</button>
                    </div>
                </Form>
                <br/>
                

            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Donateblood
