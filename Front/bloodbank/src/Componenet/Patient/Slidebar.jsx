import React from 'react'
import "./dashboard.css"
const Slidebar = () => {
    return (
     
            <div class="wrapper">
                <div class="sidebar">

                    <ul>
                        <li><a style={{textDecoration:"none"}} href="/"><i class="fas fa-home"></i>Home</a></li>
                        <li><a style={{textDecoration:"none"}} href="/patient/request"><i class="fas fa-sync-alt"></i>Make Request</a></li>
                        <li><a style={{textDecoration:"none"}} href="/patient/myrequest"><i class="fas fa-history"></i>Request History</a></li>

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
