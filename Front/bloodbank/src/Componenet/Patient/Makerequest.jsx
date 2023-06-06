
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import './main.css'
import Main from './Main';
const Makerequest = () => {
    const history =useNavigate();
    // useEffect(()=>{
    //     if(id)
    //     {
    
    //       loadUserDetails(id);
    //     }
    //   },[id]);
    
       
    //   const loadUserDetails= async (id)=>{
    //     const response = await axios.get(`http://localhost:5000/view/${id}`);
    //     setState(response.data)
    //     console.log(response.data)
    //   }
    const [validated, setValidated] = useState(false);
    const [state ,setState]=useState({
        Uid:"",
        Name:"",
        Age:"",
        Reason:"",
        Bloodgroup:"",
        Unit:""    
    });
    const addContact = async(data)=>{
        const response = await axios.post("http://localhost:5000/api/paientrequest" , data);
        if(response.status ===200 )
        {
            alert("data add");
            history('/dashboard')
        
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
        <Main/>
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div class="wrapper wrapper--w790">
      
        <div style={{marginLeft: "70px"}} class="card card-5">
            <div class="card-heading">
                <h2 class="title">MAKE BLOOD REQUEST</h2>
            </div>
            <div class="card-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                   {/* {% csrf_token %} */}

                    <div class="form-row">
                    <Form.Control
                                id="Name"
                                 required
                                    type="text"
                                placeholder="Patient name"
                                 value={state.Uid}
                                 onChange={handelInput}
                           
            
                                 /> 

                        <div class="name">Patient Name</div>
                        <div class="value">
                        {/* <Form.Control
                                id="Name"
                                 required
                                    type="text"
                                placeholder="Patient name"
                                 value={state.Name}
                                 onChange={handelInput}
            
                                 /> */}
                            <div class="input-group">
                                {/* {% render_field request_form.patient_name|attr:'required:true'  class="input--style-5"  %} */}
                                <Form.Control
                                id="Name"
                                 required
                                    type="text"
                                placeholder="Patient name"
                                 value={state.Name}
                                 onChange={handelInput}
            
                                 />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Patient Age</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control
                                id="Age"
                                 required
                                    type="text"
                                placeholder="Age"
                                 value={state.Age}
                                 onChange={handelInput}
            
                                 />                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Reason</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control
                                 required
                                 id="Reason"
                                    type="text"
                                placeholder="Reason"
                                 value={state.Reason}
                                 onChange={handelInput}
            
                                 />                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Blood Group</div>
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="bloodgroup" value={state.Bloodgroup} id='Bloodgroup' onChange={handelInput} >
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
                            <Form.Control
                                 required
                                 id="Unit"
                                    type="number"
                                placeholder="Unit"
                                 value={state.Unit}
                                 onChange={handelInput}
            
                                 />                            </div>
                        </div>
                    </div>

      




                    <div>
                        <button class="btn btn--radius-2 btn-danger" type="submit">REQUEST</button>
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

export default Makerequest
