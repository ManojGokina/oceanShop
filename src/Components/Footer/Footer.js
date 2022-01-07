import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
             <div className='About'>
                <h3>About Us</h3>
               <p>Contact Us</p>
               <p>About</p>
               <p>Careers</p>
               <p>Affiliate Marketing</p>
               <p>Join Us</p>
            </div>
            <div className='categories'>
                <h3>CATEGORIES</h3>
                 <p><Link to="/MenClothing" id="jewelery__category">Men's Clothing</Link></p>
                 <p><Link to="/womenClothing" id="jewelery__category">Women's Clothing</Link></p>
                 <p>Casual and Sports Shoes</p>
                 <p>T-Shirts and Casual Shirts</p>
                 <p>Laptops</p>
                 <p>Mobiles</p>
                 <p><Link to="/Jewelery" id="jewelery__category">Jewelery</Link></p>
                 <p>Home Decor Items</p>
                 <p><Link to="/Electronics" id="gadjet__category">Gadjets</Link></p>
            </div>
            <div className='contactUs'>
               <h3>CONNECT WITH US</h3>
               <p> <InstagramIcon/> </p>
               <p><FacebookIcon/></p>
               <p><YouTubeIcon/></p>
               <p><TwitterIcon/></p>
               <p><LinkedInIcon/></p>
            </div>
            <div className='policy'>
               <h3>POLICY</h3>
               <p>Return Policy</p>
               <p>Terms Of Use</p>
               <p>Security</p>
               <p>Privacy</p>
            </div>
        </div>
    )
}

export default Footer
