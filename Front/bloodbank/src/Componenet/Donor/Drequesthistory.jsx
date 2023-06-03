
import Dmain from './Dmain';
import React,{ useState, useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";

import axios from "axios";

const Drequesthistory = () => {
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
  return (
    <div>
        <Dmain/>
    <div class="container">
    <h4 class="text-center">My Blood Request</h4><br/>
    <table class="table table-light table-hover table-bordered table-striped">
        <thead class="bg-info">
            
            <tr>
                <th scope="col">Patient Name</th>
                <th scope="col">Patient Age</th>
                <th scope="col">Reason</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Unit</th>
                {/* ?<th scope="col">Date</th> */}
                <th scope="col">Status</th>
                
            </tr>
        </thead>
        <tbody>
        {data && data.map((item,index)=>{
                    return(
            <tr key={index}>
                <td> {item.Name}</td>
                
                <td>{item.Age}</td>
                <td>{item.Reason}</td>
                <td>{item.Bloodgroup}</td>
                <td>{item.Unit}</td>
                {/* <td>{item.}</td> */}
                {/* {% if t.status == 'Approved' %} */}
                <td><span class="label warning"> Approved</span></td>
                
                {/* {% elif t.status == 'Rejected' %} */}
                <td><span class="label success">Rejected</span></td>
                {/* {% else %} */}
                <td><span style={{color: "white", marginLeft: "0px"}} class="label info">Pending</span></td>
                {/* {% endif %} */}
                

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

export default Drequesthistory
