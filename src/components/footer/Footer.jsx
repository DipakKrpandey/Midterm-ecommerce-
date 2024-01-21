import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
          <footer>
        
        <div class="foot-panel1"><a href="#" style={{color:"white",textDecoration:"none"}} >Back to Top</a></div>
        <div class="foot-panel2">
            <div className="footcol1">
            <ul className='footer'>
                <p>We serve more</p>
                <a href="#">Online Shop</a>
                <a href="#">Online Solution</a>
                <a href="#">Online Edutech</a>
                <a href="#">Online Investor</a>
                <a href="#">Online Advisor</a>
                <a href="#">Online Social media</a>
            </ul>
            <ul className='footer' >
            <p>Get to Know Us</p>
            <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">About GroMart</a>
                <a href="#">Investor Relations</a>
                <a href="#">GroMart Devices</a>
                <a href="#">GroMart Services</a>
            </ul>
            </div>
           <div className="footcol2">
           <ul className='footer'>
           <p>Work with us</p>
           <a href="#">Careers</a>
                <a href="#">Opening</a>
                <a href="#">Apply</a>
                <a href="#">Training</a>
                <a href="#">Workshop</a>
                <a href="#">Outsource</a>
            </ul>
            <ul className='footer'>
            <p>Buisness in other coutnries</p>
                <a href="#">India</a>
                <a href="#">USA</a>
                <a href="#">Germany</a>
                <a href="#">Japan</a>
                <a href="#">Malasia</a>
                <a href="#">South Africa</a>
            </ul>
           </div>
        </div>

        <div class="foot-panel3">
            <div class="logo"></div>
        </div>

        <div class="foot-panel4">
            <div class="pages">
                <a href="#">Condition of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Your Ads privacy Choices</a>
            </div>
            <div class="copyright">
                ©️ 2024, GroMart.com
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
