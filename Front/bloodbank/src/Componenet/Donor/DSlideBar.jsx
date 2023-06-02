import React from 'react'
import "./Donor.css"
const DSlideBar = () => {
  return (
    <div class="wrapper">
    <div class="sidebar">
        
        <ul>
            <li><a style={{TextDecoration:"none"}} href="/"><i class="fas fa-home"></i>Home</a></li>
            <li><a style={{TextDecoration:"none"}} href="/Donate"><i class="fas fa-hand-holding-medical"></i>Donate Blood</a></li>
            <li><a style={{TextDecoration:"none"}} href="/donor/donation-history"><i class="fas fa-history"></i>Donation History</a></li>
            <li><a style={{TextDecoration:"none"}} href="/request"><i class="fas fa-sync-alt"></i>Blood Request</a></li>
            <li><a style={{TextDecoration:"none"}} href="/donor/request-history"><i class="fas fa-history"></i>Request History</a></li>

        
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
