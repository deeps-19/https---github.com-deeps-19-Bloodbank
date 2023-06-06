import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Link, useNavigate,useParams} from 'react-router-dom';
import axios from 'axios'
import Anav from './Anav';
import Aslide from './Aslide';

const Updatepatient = () => {
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
        Name:"",
        Lname:"",
        Username:"",
        userRole:"Patient",
        Password:"",
        Age:"",
        Bloodgroup:"",
        Deasise:"",
        Doctor:"",
        Address:"",
        Mobile:"" 

    });
    const{id} =useParams();
    // const { Name, email, gender, status } = state;
    
    useEffect(()=>{
      if(id)
      {
  
        loadUserDetails(id);
      }
      else{
        alert("no idpass")
      }
    },[id]);
    const loadUserDetails= async (id)=>{
        const response = await axios.get(`http://localhost:5000/view/${id}`);
        setState(response.data)
        console.log(response.data)
      }
    const addContact = async(data)=>{
       
        const response = await axios.post(`http://localhost:5000/api/update/${id}` , data);
        if(response.status ===200 )
        {
            alert("data add");
            history('/AdminDashboard')
        
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
        <Anav/>
        <Aslide/>
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div class="wrapper wrapper--w790">
      
        <div class="card card-5">
            <div class="card-heading">
                <h2 class="title">Update Patient</h2>
            </div>
            <div class="card-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    

                    <div class="form-row">
                        <div class="name">First Name</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control
                                    required
                                    id="Username"
                                    type="text"
                                    placeholder=""
                                    value={state.Name}
                                    onChange={handelInput}

                                />       
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Last Name</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    value={state.Lname}
                                    id='Lname'
                                    onChange={handelInput}

                                />       
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Username</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    id="Username"
                                    value={state.Username}
                                    onChange={handelInput}

                                />       
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Password</div>
                        <div class="value">
                            <div class="input-group">
                            <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    value={state.Password}
                                    id="Password"
                                    onChange={handelInput}

                                />       
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Age</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    value={state.Age}
                                    id="Age"
                                    onChange={handelInput}

                                />                        
                             </div>
                        </div>
                    </div>



                    <div class="form-row">
                        <div class="name">Blood Group</div>
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="bloodgroup" value={state.Bloodgroup} id='Bloodgroup' onChange={handelInput}>
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
                        <div class="name">Disease(if any)</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    value={state.Deasise}
                                    id="Deasise"
                                    onChange={handelInput}

                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Doctor Name</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    id="Doctor"
                                    value={state.Doctor}
                                    onChange={handelInput}

                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Address</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    value={state.Address}
                                    id="Address"
                                    onChange={handelInput}

                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Mobile</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    value={state.Mobile}
                                    id="Mobile"
                                    onChange={handelInput}

                                />                            </div>
                        </div>
                    </div>

                   



                    <div>
                        <button class="btn btn--radius-2 btn-danger" type="submit">Update</button>
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

export default Updatepatient
