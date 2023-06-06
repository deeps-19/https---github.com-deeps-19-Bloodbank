import React,{ useState, useEffect} from 'react';
import {Link , useNavigate} from "react-router-dom";

import axios from "axios";

import './admin.css'
const Adashboard = () => {
 let sum=0
 let sum1=0
let sum2=0
let sum3=0
let sum4=0
let sum5=0
let sum6=0
let sum7=0
  const [data, setdata]= useState([]);
  const [redata, setredata]= useState([]);
  // const onDeleteUser= async(id)=>{
  //     if(window.confirm("Are you sure"))
  //     {
  //         const response = await axios.delete(`http://localhost:5000/Donner/delete/${id}`);
  //         getUsers();
  //         if(response.status ===200 )
  //         {
  //                 alert("Data deleted successfully");
  //     }
  //     }

  // }
  useEffect(()=>{
      getUsers();
      request();
  },[])
  
  const getUsers = async ()=>{
      const response = await axios.get("http://localhost:5000/Donnate/history");
      if(response.status ===200 )
      {
          setdata(response.data);
      }
  };
     
  
  const request = async ()=>{
      const response = await axios.get("http://localhost:5000/api/user");
      if(response.status ===200 )
      {
          setredata(response.data);
      }
  };


  return (
    <div class="container">

    <div class="row">
        <div class="col-sm-3">
          <div class="card bg-light">
            <div class="card-body">
                            <div class="blood">
                    <h2>A+ <i class="fas fa-tint"></i></h2>
                </div>
                                 <br/><br/>
                <div>
                  
                {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="A+")
                  {
                      
                      var a= item.Unit
                       sum=sum+a;
                    }
                    
                  
                  })}
                  {sum}


                    {/* {{A1.unit}} */}
                </div>                            
            </div>
          </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="blood">
                        <h2>B+ <i class="fas fa-tint"></i></h2>
                    </div><br/><br/>
                    <div>
                      {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="B+")
                  {
                      
                      
                       sum1=sum1+item.Unit;
                    }
                    
                  
                  })}
                  {sum1}


                    </div>                            
                </div>
              </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="blood">
                        <h2>O+ <i class="fas fa-tint"></i></h2>
                    </div><br/><br/>
                    <div>
                    {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="o+")
                  {
                      
                      
                       sum2=sum2+item.Unit;
                    }
                    
                  
                  })}
                  {sum2}
                    </div>                            
                </div>
              </div>
          </div>
          <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="blood">
                        <h2>AB+ <i class="fas fa-tint"></i></h2>
                    </div><br/><br/>
                    <div>
                    {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="AB+")
                  {
                      
                      
                       sum3=sum3+item.Unit;
                    }
                    
                  
                  })}
                  {sum3}
                      {/* {{AB1.unit}} */}
                    </div>                            
                </div>
              </div>
          </div>
      </div>
  
      <div class="row">
        <div class="col-sm-3">
          <div class="card bg-light">
            <div class="card-body">
                <div class="blood">
                    <h2>A- <i class="fas fa-tint"></i></h2>
                </div><br/><br/>
                <div>
                {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="A-")
                  {
                      
                      
                       sum4=sum4+item.Unit;
                    }
                    
                  
                  })}
                  {sum4}
                  {/* {{A2.unit}} */}
                </div>                            
            </div>
          </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="blood">
                        <h2>B- <i class="fas fa-tint"></i></h2>
                    </div><br/><br/>
                    <div>
                    {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="B-")
                  {
                      
                      
                       sum4=sum4+item.Unit;
                    }
                    
                  
                  })}
                  {sum4}
                      {/* {{B2.unit}} */}
                    </div>                            
                </div>
              </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="blood">
                        <h2>O- <i class="fas fa-tint"></i></h2>
                    </div><br/><br/>
                    <div>
                    {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="O-")
                  {
                      
                      
                       sum6=sum6+item.Unit;
                    }
                    
                  
                  })}
                  {sum6}
                      {/* {{O2.unit}} */}
                    </div>                            
                </div>
              </div>
          </div>
          <div class="col-sm-3">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="blood">
                        <h2>AB- <i class="fas fa-tint"></i></h2>
                    </div><br/><br/>
                    <div>
                    {
                  data && data.map((item,index)=>{
                  if(item.Bloodgroup==="AB-")
                  {
                      
                      
                       sum5=sum5+item.Unit;
                    }
                    
                  
                  })}
                  {sum5}
                      {/* {{AB2.unit}} */}
                    </div>                            
                </div>
              </div>
          </div>
      </div>
    <div class="row">
      <div class="col-sm-3">
        <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <i class="fas fa-users"></i>
              </div><br/>
              <div>
                  Total Donors <br/>
                  {data.length}
              </div>                            
          </div>
        </div>
      </div>
      <div class="col-sm-3">
          <div class="card bg-light">
              <div class="card-body">
                  <div class="blood">
                      <i class="fas fa-spinner"></i>
                  </div><br/>
                  <div>
                      Total Requests <br/>
                     {redata.length}
                  </div>                            
              </div>
            </div>
      </div>
      <div class="col-sm-3">
          <div class="card bg-light">
              <div class="card-body">
                  <div class="blood">
                      <i class="far fa-check-circle"></i>
                  </div><br/>
                  <div>
                      Approved Requests <br/>
                      {/* {{totalapprovedrequest}} */}
                  </div>                            
              </div>
            </div>
        </div>
        <div class="col-sm-3">
          <div class="card bg-light">
              <div class="card-body">
                  <div class="blood">
                      <i class="fas fa-tint xyz"></i>
                  </div><br/>
                  <div>
                      Total Blood Unit (in ml) <br/>
                      {
                  data && data.map((item,index)=>{
                  
                      
                      
                       sum7=sum7+item.Unit;
                    
                    
                  
                  })}
                  {sum7}
                  </div>                            
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Adashboard
