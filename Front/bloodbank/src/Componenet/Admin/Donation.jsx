import React,{ useState, useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";

import axios from "axios";
import Aslide from './Aslide';

const Donation = () => {
    const [data, setdata]= useState([]);
    const onDeleteUser= async(id)=>{
        if(window.confirm("Are you sure"))
        {
            const response = await axios.delete(`http://localhost:5000/Donner/delete/${id}`);
            getUsers();
            if(response.status ===200 )
            {
                    alert("Data deleted successfully");
        }
        }

    }
    useEffect(()=>{
        getUsers();
    },[])
    
    const getUsers = async ()=>{
        const response = await axios.get("http://localhost:5000/Donnate/history");
        if(response.status ===200 )
        {
            setdata(response.data);
        }
    };
  return (
    <div>
        <Aslide/>
      <div class="container">
    <h4 class="text-center">BLOOD DONATION DETAILS</h4><br/>
    <table class="table table-light table-hover table-bordered table-striped">
        <thead class="bg-info">
            <tr>
                <th scope="col">Donor Name</th>
                <th scope="col">Disease</th>
                <th scope="col">Age</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Unit</th>
                {/* <th scope="col">Request Date</th> */}
                {/* <th scope="col">Status</th> */}
                <th class="text-right">Action</th>
            </tr>
        </thead>
        <tbody>
            
        {data && data.map((t,index)=>{
             return(
                <tr key={index}>                
                
                <td>{t.Name}</td>
                <td>{t.Disease}</td>
                
                <td>{t.Age}</td>
                <td>{t.Bloodgroup}</td>
                <td>{t.Unit}</td>
                {/* <td>{{t.date}}</td> */}
                {/* {% if t.status == 'Approved' %} */}
                {/* <td><span class="label warning"> Approved</span></td> */}
                
                {/* {% elif t.status == 'Rejected' %} */}
                {/* <td><span class="label success">Rejected</span></td> */}
                {/* {% else %} */}
                {/* <td><span style={{color:"white", marginLeft:"0px"}} class="label info">Pending</span></td> */}
                {/* {% endif %} */}
                <td class="text-right">
                    <button class="btn btn-primary badge-pill" style={{width: "80px"}}><Link  style={{TextDecoration: "none",color: "white"}} to={`/update/donore/${t._id}`}>EDIT</Link> </button>
                    <button class="btn btn-danger badge-pill" style={{width: "80px"}}  onClick={()=>onDeleteUser(t._id)}><a  style={{TextDecoration: "none",color: "white"}} href="{% url 'delete-donor' t.id  %}">DELETE</a> </button>
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

export default Donation

