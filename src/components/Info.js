import React from "react"
import Fadi from "../images/Fadi2.jpeg"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

function Info(){
    return (
        <div className="head-info">
           <img className="picture" src={Fadi}/>
           
            <div className="main">
                    <div className="main--title">
                        <h1> Fadi El-Tibi</h1>
                        <h3> Blockchain Developer</h3> 
                     </div>
                 <div className="buttons">
                    <button className="email">  <a href= "mailto: fadi.eltibi@gmail.com">  <div className="contact-div"><img className="email-icon" src={email}/>  Email </div> </a></button>
                     <button className="linkedin"> <a href="https://www.linkedin.com/in/fadi-el-tibi-a046973/"> <img className="linkedin-icon" src={linkedin}/> LinkedIn </a></button>
                 </div>
                <div className="about-card">
                    <h2 className="main-h2">About</h2>
                    <p className="main-body">I am a full stack JAVA/ Mainframe software developer. I am learning Blockchain development to be able to design smart contracts on the ethereum platform</p>
                </div>
                <div className="interest-card">
                    <h2 className="main-h2" >Interests</h2>
                    <p className="main-body">Blockchain, Cryptocurrency, Soccer, Martial arts, and sight seeing.</p>
                </div>
            </div>
        </div>
        
        
        
    )
    
} export default Info;