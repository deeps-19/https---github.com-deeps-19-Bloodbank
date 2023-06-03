import React from 'react'
import "./dashboard.css"
import { Link } from 'react-router-dom'
const Slidebar = () => {
    return (
     
            <div class="wrapper">
                <div class="sidebar">

                    <ul>
                        <li><Link style={{textDecoration:"none"}} to="/"><i class="fas fa-home"></i>Home</Link></li>
                        <li><Link style={{textDecoration:"none"}} to="/request"><i class="fas fa-sync-alt"></i>Make Request</Link></li>
                        <li><Link style={{textDecoration:"none"}} to="/patient/myrequest"><i class="fas fa-history"></i>Request History</Link></li>

                    </ul>

                </div>
                <div class="main_content">


                    {/* {% block content %} */}

                    {/* {% endblock content %} */}



                </div>
            </div>
        
    )
}

export default Slidebar
