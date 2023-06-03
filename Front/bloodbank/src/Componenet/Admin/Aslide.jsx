import React from 'react'
import './admin.css'
const Aslide = () => {
  return (
    <div>
      <div class="wrapper">
    <div class="sidebar">
        
        <ul>
            <li><a style={{TextDecoration:"none"}} href="/"><i class="fas fa-home"></i>Home</a></li>
            <li><a style={{TextDecoration:"none"}} href="/admin-donor"><i class="fas fa-user"></i>Donor</a></li>
            <li><a style={{TextDecoration:"none"}} href="/admin-patient"><i class="fas fa-user-injured"></i>Patient</a></li>
            <li><a style={{TextDecoration:"none"}} href="/admin-donation"><i class="fas fa-hand-holding-medical"></i>Donations</a></li>
            <li><a style={{TextDecoration:"none"}} href="/admin-request"><i class="fas fa-sync-alt"></i>Blood Requests</a></li>
            <li><a style={{TextDecoration:"none"}} href="/admin-request-history"><i class="fas fa-history"></i>Request History</a></li>
            <li><a style={{TextDecoration:"none"}} href="/admin-blood"><i class="fas fa-hand-holding-water"></i>Blood Stock</a></li>
           
        </ul> 

    </div>
    <div class="main_content">


{/* {% block content %}

{% endblock content %} */}



    </div>
</div>
    </div>
  )
}

export default Aslide
