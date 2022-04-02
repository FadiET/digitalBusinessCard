import React from "react"
import gHub from "../images/gitHub.png"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"


function Footer(){
    
    return (
        <div className="footer">
         <div className="social-media">
             <a href = "https://github.com/FadiET" ><img className="images" src={gHub}/></a>
             <a href ="https://twitter.com/FLTB1976"><img className="images" src={twitter}/></a>
             <a href="https://www.instagram.com/fadieltibi/"><img className="images" src={instagram}/></a>
             <img className="images" src={facebook}/>
             
             
         </div>
        </div>
    )
}

export default Footer;