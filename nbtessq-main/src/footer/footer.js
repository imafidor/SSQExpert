import React from 'react'
import './footer.css'
import Radium from 'radium';


const footer = () =>{
 
return<footer className = "footer" style ={{'@media (min-width:320px)':{display:'block'}}}  >
    <div className = "contactInfo" >
       
        <h2>CONTACT INFO</h2>
        
        <b>NBTE SECRETARIAT</b>
        <br/>Plot B Bida Road
        <br/>PMB 2239,
        <br/>Kaduna-Nigeria
        
        
        
          <h4>NBTE Liason Office:</h4>
          Plot 644 Zambezi Crescent,
        <br/>Off Aguiyi Ironsi Way,Maitama,
        <br/>Abuja - Nigeria
      <br/><a href="mailto:enquiries@nbte.gov.ng"> Email:enquiries@nbte.gov.ng</a> 
        <br/>Phone:+234 813-729-1819    
    </div>
    
    <div className = "goToMail"  >
<strong><a href="http://nbte.gov.ng/webmail">Go To My Mailbox</a> </strong>
    </div>

<div className = "usefulLink"  >
    <h2>USEFUL LINK</h2>
    
    <ul>
        <li>><b><a href="http://www.education.gov.ng/">Federal Ministry of Education</a></b></li>
        <li>><b><a href="https://web.facebook.com/NationalBoardforTechnicalEducationNBTE/">NBTE Facebook Page</a></b></li>
        <li>><b><a href="https://twitter.com/nbtekaduna">NBTE Twitter Handle</a></b></li>
    </ul>

</div>
</footer>
}
export default Radium(footer);