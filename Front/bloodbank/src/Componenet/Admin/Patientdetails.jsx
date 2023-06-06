import React,{ useState, useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";

import axios from "axios";
import Amain from './Amain';
import Aslide from './Aslide';
import Anav from './Anav';
const Patientdetails = () => {
    const [data, setdata]= useState([]);
    useEffect(()=>{
        getUsers();
    },[])
    
    const getUsers = async ()=>{
        const response = await axios.get("http://localhost:5000/api/uers");
        if(response.status ===200 )
        {
            setdata(response.data);
        }
    };
    const onDeleteUser= async(id)=>{
        if(window.confirm("Are you sure"))
        {
            const response = await axios.delete(`http://localhost:5000/api/delete/${id}`);
            getUsers();
            if(response.status ===200 )
            {
                    alert("Data deleted successfully");
        }
        }

    }
    console.log("data=>", data );
  return (
    <div>
        <Anav/>
        <Aslide/>
      <div class="containerd">
    <h4 class="text-center">PATIENT DETAILS</h4><br/>
    <table class="table table-light table-hover table-bordered table-striped">
        <thead class="bg-info">
            <tr>
                <th scope="col">Name</th>
                {/* <th scope="col">Profile</th> */}
                <th scope="col">Blood Group</th>
                <th scope="col">Age</th>
                <th scope="col">Disease</th>
                <th scope="col">Mobile</th>
                <th class="text-right">Action</th>
            </tr>
        </thead>
        <tbody>
        {data && data.map((item,index)=>{
             return(
            <tr  key={index}>
                <td>{item.Name}</td>
                {/* <td> <img src="{% static t.profile_pic.url %}" alt="Profile Pic" height="40px" width="40px" /></td> */}
               <td>{item.Bloodgroup}</td>
                <td>{item.Age}</td>
                
                <td>{item.Deasise}</td>
                <td>{item.Mobile}</td>
                
                
                <td class="text-right">
                    <button class="btn btn-primary badge-pill" style={{width: "80px"}}><Link  style={{TextDecoration: "none",color: "white"}} to={`/update/patient/${item._id}`}>EDIT</Link> </button>
                    <button class="btn btn-danger badge-pill" style={{width: "80px"}}  onClick={()=>onDeleteUser(item._id)}><a  style={{TextDecoration: "none",color: "white"}} href="{% url 'delete-donor' t.id  %}">DELETE</a> </button>
                </td>
            </tr>
             )
            }) }
            {/* {% endfor %} */}
        </tbody>
    
    </table>
</div>
    </div>
  )
}

export default Patientdetails
