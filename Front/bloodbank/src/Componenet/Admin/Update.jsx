import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import axios from 'axios'
import Amain from './Amain';
import Aslide from './Aslide';

const Update = () => {
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
        const response = await axios.get(`http://localhost:5000/Doner/${id}`);
        setState(response.data)
        console.log(response.data)
      }
       
    const history =useNavigate();
    const [validated, setValidated] = useState(false);
    const [state ,setState]=useState({
        Name:"",
        Lname:"",
        Username:"",
        Password:"",
        Age:"",
        Bloodgroup:"",
        Address:"",
        Mobile:""
    });
    const addContact = async(data)=>{
        const response = await axios.post(`http://localhost:5000/Donor/update/${id}`,data);
        if(response.status ===200 )
        {
            alert("Data Updated");
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
        console.log(state)
        history("/home"); 
      }
  
      setValidated(true);
    };
  return (
    <div>
        <Aslide/>
    
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div class="wrapper wrapper--w790">

        <div class="card card-5">
            <div class="card-heading">
                <h2 class="title">Update Donor</h2>
            </div>
            <div class="card-body">
                <form method="POST" autocomplete="off" enctype="multipart/form-data">
                    {/* {% csrf_token %} */}

                    <div class="form-row">
                        <div class="name">First Name</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                    value={state.Name}
                                    onChange={handelInput}
                                    id="Name"

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
                                    placeholder="Lastname"
                                    value={state.Lastname}
                                    id="Lastname"
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
                                    placeholder="UserName"
                                    value={state.Username}
                                    onChange={handelInput}
                                    id="UserName"

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
                                    placeholder="UserName"
                                    value={state.Password}
                                    onChange={handelInput}
                                    id="Password"
                                />  
                            </div>
                        </div>
                    </div>




                    <div class="form-row">
                        <div class="name">Blood Group</div>
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="bloodgroup">
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
                        <div class="name">Address</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Address"
                                    value={state.Address}
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
                                    placeholder="Mobile"
                                    value={state.Mobile}
                                    onChange={handelInput}

                                />
                            </div>
                        </div>
                    </div>
{/* 
                    <div class="form-row">
                        <div class="name">Profile Pic</div>
                        <div class="value">
                            <div class="input-group">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="UserName"
                                    value={state.Username}
                                    onChange={handelInput}

                                />
                            </div>
                        </div>
                    </div> */}



                    <div>
                        <button class="btn btn--radius-2 btn-danger" type="submit">Update</button>
                    </div>
                </form>
                <br/>


            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Update




