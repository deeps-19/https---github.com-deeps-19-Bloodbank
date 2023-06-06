import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
// import "./addedit.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const DLogin = () => {
  const [state, setState] = useState({
    Username: "",
    Password: ""
  
  });
  // const { Name, email, gender, status } = state;
  const history =useNavigate();
  
  const addContact = async(data)=>{
    const response = await axios.post("http://localhost:5000/Donner", data);
    console.log(response);
    if(response.status ===200 )
    {
        alert("User Login Successfully");
        return(history("/DonnerDashboard"));
    }
    else{
      alert("error")
    }
};
  
  
  const handelsumit=(e)=>{
    e.preventDefault();
    if (!state.Username || !state.Password )
    {
      // toast.error("Please provide details");
      alert("error")
    } 
    else {
      addContact(state);
      
      }
  };
  const handelInput=(e)=>{
    let name = e.target.id;
    let value = e.target.value;
    console.log(name,value);
    setState({...state, [name]:value});
  };
  

  return (
    <>
      <div style={{ margin: "100px" }}>
        <form method="post" action="" style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }} onSubmit={handelsumit}>


          <label Htmlfor="Username">Name</label>
          <input
            type="text"
            id="Username"
            placeholder='Enter Name'
            onChange={handelInput}
            value={state.Username}
          />
          <label Htmlfor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder='Enter Password'
            onChange={handelInput}
            value={state.Password}
          />
         
          <input type="submit" value="login" />
          
        </form>
      </div>
    </>
   
  )
}

export default DLogin
