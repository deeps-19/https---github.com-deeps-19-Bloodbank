import React from 'react'
import "./Donor.css"
import { Link } from 'react-router-dom'
const DSlideBar = () => {
  return (
    <div class="wrapper">
    <div class="sidebar">
        
        <ul>
            <li><Link style={{TextDecoration:"none"}} to="/"><i class="fas fa-home"></i>Home</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/Donate"><i class="fas fa-hand-holding-medical"></i>Donate Blood</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/donor/donation-history"><i class="fas fa-history"></i>Donation History</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/Donerrequest"><i class="fas fa-sync-alt"></i>Blood Request</Link></li>
            <li><Link style={{TextDecoration:"none"}} to="/donor/request-history"><i class="fas fa-history"></i>Request History</Link></li>

        
        </ul> 

    </div>
    <div class="main_content">


{/* {% block content %} */}

{/* {% endblock content %} */}



    </div>
</div>

  )
}

export default DSlideBar
