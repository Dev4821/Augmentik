import React from 'react'
import './footer.css'
import logo from './assests/monday-logo-x2.png'
import world from './assests/internet_814224.png'
import icon from'./assests/icon.png'
import icons from'./assests/icon2.png'
import icon3 from './assests/icon3.png'
import google from'./assests/google.png'
function Footer() {
  return (
    <div style={{background:"white"}}>
<div className="grid-container"style={{background:"white"}}  >
    <div>
        
            <div>
                <a href="#" >   <img  src={logo} className='image' /></a>
            </div>
            <div>
                <a href="#">Pricing</a>
            </div>
            <div>
                <a href="#">Contact us</a>
            </div>
            <div>
                <a href="#">Templates</a>
            </div>
            <div>
                <a href="#">SMB</a>
            </div>
            <div>
                <a href="#">Enterprise</a>
            </div>
            <div>
                <a href="#">Nonprofits</a>
            </div>
            <div>
                <a href="#">App Marketplace</a>
            </div>
            <div>
                <a href="#">24/7 Support</a>
            </div>
        
    </div>

    <div>
        <h2>Features</h2>
        <div>
            <a href="#">Docs</a>
        </div>
        <div>
            <a href="#">Integrations</a>
        </div>
        <div>
            <a href="#">Automations</a>
        </div>
        <div>
            <a href="#">Files</a>
        </div>
        <div>
            <a href="#">Dashboards</a>
        </div>
        <div>
            <a href="#">Kanban</a>
        </div>
        <div>
            <a href="#">Gantt</a>
        </div>
    </div>

    <div>
        <h2>Monday Products</h2>
        <div>
            <a href="#">Monday Work Management</a>
        </div>
        <div>
            <a href="#">Monday Sales CRM</a>
        </div>
        <div>
            <a href="#">Monday Dev</a>
        </div>
        <h2>More by Monday.com</h2>
        <div>
            <a href="#">WorkCanvas</a>
        </div>
        <div>
            <a href="#">WorkForms</a>
        </div>
    </div>

    <div>
        <h2>Use Cases</h2>
        <div>
            <a href="#">Marketing</a>
        </div>
        <div>
            <a href="#">Project Management</a>
        </div>
        <div>
            <a href="#">Sales</a>
        </div>
        <div>
            <a href="#">Developers</a>
        </div>
        <div>
            <a href="#">HR</a>
        </div>
        <div>
            <a href="#">IT</a>
        </div>
        <div>
            <a href="#">Operations</a>
        </div>
        <div>
            <a href="#">Construction</a>
        </div>
    </div>

    <div>
        <h2>Company</h2>
        <div>
            <a href="#">About Us</a>
        </div>
        <div>
            <a href="#">Careers - We're Hiring!</a>
        </div>
        <div>
            <a href="#">Monday-U</a>
        </div>
        <div>
            <a href="#">Press</a>
        </div>
        <div>
            <a href="#">Customer Stories</a>
        </div>
        <div>
            <a href="#">Become a Partner</a>
        </div>
        <div>
            <a href="#">Sustainability & ESG</a>
        </div>
        <div>
            <a href="#">Affiliates</a>
        </div>
        <div>
            <a href="#">Digital Lift</a>
        </div>
        <div>
            <a href="#">Investor Relations</a>
        </div>
    </div>

    <div>
        <h2>Resources</h2>
        <div>
            <a href="#">Help Center</a>
        </div>
        <div>
            <a href="#">Community</a>
        </div>
        <div>
            <a href="#">Blog</a>
        </div>
        <div>
            <a href="#">What's New</a>
        </div>
        <div>
            <a href="#">Monday Spaces</a>
        </div>
        <div>
            <a href="#">Webinars</a>
        </div>
        <div>
            <a href="#">Startup for Startup</a>
        </div>
        <div>
            <a href="#">Global Events</a>
        </div>
        <div>
            <a href="#">App Development</a>
        </div>
        <div>
            <a href="#">Find a Partner</a>
        </div>
        <div>
            <a href="#">Compare</a>
        </div>
    </div>
</div>
<hr style={{ margin: '0 50px', color:"grey" }} />
<div className='footer-bottom' style={{marginTop:"20px"}}>
    <div className='footer-bottom-1'>
        <div style={{marginLeft:"50px"}}> <img  src={world} className='imageicon' /> English </div>
    <div  style={{marginLeft:"100px"}}className='icons'>
        <div>
        <img  src={icon} className='imageicon2' />
        </div>
        
        
        
    </div>
    <div style={{marginLeft:"800px"}}>
    <img  src={google} className='imageicon' /> 
    </div>

    </div>
    <div className='footer-bottom-2'>
    <div className='footer-bottom-1' style={{marginTop:"20px"}}>
        <div style={{marginLeft:"30px"}}> <img  src={icons} className='imageicon' /> </div>
    </div>
     <div >
     <div style={{marginLeft:"30px"}}> <img  src={icon3} className='imageicon3' /> </div>
    </div>

    
    </div>
</div>
</div>
  )
}

export default Footer