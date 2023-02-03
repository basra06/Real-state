import logo from "../images/logo.png";
import "../sass/navbar.scss"
import {NavLink} from 'react-router-dom';
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  
 
  window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY > 50) {
   setIsActive(true);
  } else {
    setIsActive(false);
  }
}

  
  return (
    <>
    
   
      
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <nav id="myHeader" className={!isActive ?"navbar  navbar-expand-lg":" navbar sticky-top navbar-expand-lg"}>
  <div className="container">
    <NavLink className="navbar-brand" to="/"><img src={logo} /> <span></span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="fa fa-bars"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto   mb-lg-0   ">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/news">News</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blogs</NavLink>
        </li> 
      </ul>

      <div className="d-flex  ">
       
        <button className="btn   m-2 "><NavLink to="/"><i className='fa fa-facebook'></i></NavLink></button>
        <button className="btn   m-2 "><NavLink to='/'><i className='fa fa-user'></i></NavLink></button>
        <button className="btn    m-2"><NavLink to="/"><i className='fa fa-shopping-cart'></i></NavLink><span><sup> 2</sup></span></button>
      </div>

     
    </div>
  </div>
</nav>



                </div>
            </div>
        
  
    </>
  )
}
