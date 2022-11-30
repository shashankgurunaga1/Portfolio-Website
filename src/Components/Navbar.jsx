import React from 'react'
import './Navbar.css'
const Navbar = (props) =>{
  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-primary ">
  <div className="container-fluid">
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Project">My Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Skills">My Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Socialmedia">Social Media</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )

}
export default Navbar;
