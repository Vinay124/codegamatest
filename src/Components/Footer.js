import React from 'react'
import "../Styles/app.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
    <div className='container'>
        <div className='footer_wrapper'>
            <div className='footer_list'>
                <h4 className='footer_heading'>Home</h4>
                    <ul>
                        <li><Link to='/Plans'> Check Availability</Link></li>
                        <li><Link to='https://live.asvish.net/customer_portal'> Change My Plans </Link></li>
                        <li><Link to='https://live.asvish.net/customer_portal'> Customer Portal </Link></li>
                        <li><Link to='https://live.asvish.net/customer_portal'> PayBills </Link></li>
                        <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> Run Internet Speed Test</a></li>
                        <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> About Us</a></li>
                        <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> Careers</a></li>
                    </ul>
            </div>
            <div className='footer_list'>
                <h4 className='footer_heading'>Quick Links</h4>
                    <ul>
                        <li><Link to=''> Referal a Friend </Link></li>
                        <li><Link to='/Plans'> Plans </Link></li>
                        <li><Link to=''> Service in my Area </Link></li>
                        <li><Link to='https://live.asvish.net/customer_portal'> Submit Feedback </Link></li>
                        <li><Link to='https://live.asvish.net/customer_portal'> Customer Support </Link></li>  
                        <li><Link to='/GetConnection'> Leased Line </Link></li>
                        <li><Link to='/GetConnection'> Corporate Internet Plans </Link></li>
                    </ul>
            </div>
            
            <div className='footer_list'>
                <h4 className='footer_heading'>Support</h4>
                    <ul>
                        <li><Link to='/XstreamFibernet'>Need Help</Link></li>
                        <li><a href='/Ott'>FAQs</a></li>
                        <li><a href='/AirFiber'>Wireless Broadband</a></li>
                        <li><Link to='/XstreamFibernet'>Fiber Broadband</Link></li>
                        <li><a href='http://asvishxfibernet.speedtestcustom.com' target="blank"> Check Internet Speed</a></li>
                        {/* <li><Link to=''>Cloud Storage</Link></li> */}
                        <li><a href='/Ott'>OTT IPTV</a></li>
                        <li><Link to='/Voip'>Voip</Link></li>
                        
                    </ul>
            </div>
            <div className='footer_list'> 
                <h4 className='footer_heading'>About</h4>
                    <ul>
                        <li><Link to=''>Who we are</Link></li>
                        <li><Link to=''>Careers</Link></li>
                    </ul>
            </div>
        <div className='footer_about'>
        <h4 className='footer_heading'>Mail Us:</h4>
                <div className='footer_info'>
                    <p className='footer_adrss'>
                    Flipkart Internet Private Limited, 
                    </p> 
                    <p>Buildings Alyssa, Begonia &</p>    
                    <p>Clove Embassy Tech Village,</p>    
                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>    
                    <p>Bengaluru, 560103,</p>    
                    <p>Karnataka, India</p>    
                </div>
        </div>
        <div className='footer_about'>
        <h4 className='footer_heading'>Registered Office Address:</h4>
                <div className='footer_info'>
                    <p className='footer_adrss'>
                    Flipkart Internet Private Limited, 
                    </p> 
                    <p>Buildings Alyssa, Begonia &</p>    
                    <p>Clove Embassy Tech Village,</p>    
                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>    
                    <p>Bengaluru, 560103,</p>    
                    <p>Karnataka, India</p>    
                    <p>CIN : U51109KA2012PTC066107</p>    
                    <p>Telephone: 044-45614700</p>    
                </div>
        </div>
        </div> 
    </div>
    <div className='footer_end'>
        <div className='container'>
            <div className='x-end'>
            <div className='social-media'>
                <ul className='flex'>
                    <li><Link to='#'> 
                    Become a Seller
                    </Link></li>
                    <li><a href='https://www.instagram.com/asvishxfibernet/'>
                    Advertise
                    </a></li>
                    <li><a href='https://in.linkedin.com/in/vishal-sp-ba773621a/es?trk=people-guest_people_search-card'>
                    Gift Cards
                    </a></li>
                    <li><a href='https://twitter.com/AsvishXFiberNet'>
                    Help Center
                    </a></li>
                    </ul>
                </div>
            <h4 className='copyright'> © 2007-2022 Flipkart.com</h4>
            </div>
        </div>     
    </div>
</footer>
  )
}
