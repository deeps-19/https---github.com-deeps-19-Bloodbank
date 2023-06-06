import React from 'react'
import './admin.css'
import { Link } from 'react-router-dom'
const Aslide = () => {
  return (
    <div>
      <div class="wrapper">
    <div class="sidebar">
        
        <ul>
            <li><Link style={{TextDecoration:"none"}} to="/"><i class="fas fa-home"></i>Home</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/admin-donor"><i class="fas fa-user"></i>Donor</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/admin-patient"><i class="fas fa-user-injured"></i>Patient</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/admin-donation"><i class="fas fa-hand-holding-medical"></i>Donations</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/admin-request"><i class="fas fa-sync-alt"></i>Blood Requests</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/admin-request-history"><i class="fas fa-history"></i>Request History</Link></li>
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
