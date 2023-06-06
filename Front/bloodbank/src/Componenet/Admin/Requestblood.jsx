import React,{ useState, useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";

import axios from "axios";
import Anav from './Anav';
import Aslide from './Aslide';
const Requestblood = () => {
    const [data, setdata]= useState([]);
    useEffect(()=>{
        getUsers();
    },[])
    
    const getUsers = async ()=>{
        const response = await axios.get("http://localhost:5000/api/user");
        if(response.status ===200 )
        {
            setdata(response.data);
        }
    };
    const onDeleteUser= async(id)=>{
        if(window.confirm("Are you sure"))
        {
            const response = await axios.delete(`http://localhost:5000/bloodrq/delete/${id}`);
            getUsers();
            if(response.status ===200 )
            {
                    alert("Data deleted successfully");
        }
        }

    }
  return (
    <div>
        <Anav/>
        <Aslide/>
        <div class="containerd">
 {/* {% if requests %} */}
    <h4 class="text-center">Blood Requested</h4><br/>
    {/* {% if message %} */}
   <h5 class="text-center" style={{color: "red"}}> </h5><br/>
{/* {% else %} */}

{/* {% endif %} */}
    <table class="table table-light table-hover table-bordered table-striped">
        <thead class="bg-info">
            <tr>
                <th scope="col">Patient Name</th>
                <th scope="col">Age</th>
                
                <th scope="col">Reason</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Unit (in ml)</th>
                {/* <th scope="col">Date</th> */}
                {/* <th scope="col">Status</th> */}
                <th class="text-right">Action</th>
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
                
                
                <td class="text-right">
                   
                    <button class="btn btn-primary badge-pill" style={{width: "100px"}}><Link  style={{TextDecoration: "none",color: "white"}} to={`/admin-req/${item._id}`}>Approve</Link> </button>
                    <button class="btn btn-danger badge-pill" style={{width: "80px"}}  onClick={()=>onDeleteUser(item._id)}>Reject </button>
                    
                </td>
            </tr>
              )
            }) }
            {/* {% endfor %} */}


        </tbody>
    
    </table>
{/* {% else %} */}
<h5>No Blood Request By Patient / Donor !</h5>
{/* {% endif %} */}

</div>
      
</div>    
  )
}

export default Requestblood
