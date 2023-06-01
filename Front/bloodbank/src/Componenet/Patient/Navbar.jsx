import React from 'react'

const Navbar = () => {
  return (
    <>
        
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-danger">
        <a style={{color:"white"}} class="navbar-brand" href="/">
            <i class="fab fa-gratipay"></i>&nbsp;
            <font>Blood Bank Management System</font></a>
        
      
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" style={{color:"white"}} href="/logout">Logout &nbsp; <i class="fas fa-sign-out-alt"></i></a>
                </li>
                
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
