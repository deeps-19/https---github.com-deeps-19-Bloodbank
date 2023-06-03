import React,{ useState, useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";

import axios from "axios";
import './p.css'
const Pdashboard = () => {
  
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
  return (
   
<div class="container">
    <div class="row">
    <div class="col-sm-3">
        <div class="card bg-light">
            <div class="card-body">
                <div class="blood">
                    <i class="fas fa-sync-alt xyz"></i>
                </div><br/>
            <div>
            Request Made <br/>
            {data.length}
              {/* {{requestmade}} */}
          </div>                            
      </div>
    </div>
  </div>

  <div class="col-sm-3">
    <div class="card bg-light">
        <div class="card-body">
            <div class="blood">
              <i class="fas fa-sync xyz"></i>
            </div><br/>
            <div>
                Pending Request <br/>
                {/* {{requestpending}} */}
            </div>                            
        </div>
      </div>
  </div>

  <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                <i class="fas fa-check-circle xyz"></i>
              </div><br/>
              <div>
                   Approved Request<br/>
                  {/* {{requestapproved}} */}
              </div>                            
          </div>
        </div>
  </div>
  <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                <i class="fas fa-times-circle xyz"></i>
              </div><br/>
              <div>
                   Rejected Request <br/>
                  {/* {{requestrejected}} */}
              </div>                            
          </div>
        </div>
    </div>

</div>
</div>
)
}

export default Pdashboard
