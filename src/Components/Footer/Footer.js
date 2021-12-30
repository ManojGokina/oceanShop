import React from 'react';
import './Footer.css';
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
                 <p>Men's Clothing</p>
                 <p>Women's Clothing</p>
                 <p>Casual and Sports Shoes</p>
                 <p>T-Shirts and Casual Shirts</p>
                 <p>Laptops</p>
                 <p>Mobiles</p>
                 <p>Mobile Accesories</p>
                 <p>Home Decor Items</p>
                 <p>Electronics</p>
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
