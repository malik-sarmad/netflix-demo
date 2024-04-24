import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () =>{
  return(
    <div className="footer-container">
        <div className="footer">
        <div className="column">
               <Link style={{color:"gray"}} to="/Faq" ><p>FAQ</p> </Link>
                <p>Cookie Preferences</p>
            </div>
            <div className="column">
                <p>Help Center</p>
                <p>Corporate Information</p>
            </div>
            <div className="column">
                <p>Terms of Use</p>
            </div>
            <div className="column">
            <p>Privacy</p>
                
            </div>
        </div>
        
      

    </div>
  )
}

export default Footer;