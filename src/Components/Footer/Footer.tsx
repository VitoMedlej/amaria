"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer bg2 " style={{color:'black',background:'white'}}>
    <div className="container bg2" style={{color:'black',background:'white'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='https://ucarecdn.com/d0533aac-5ae0-4ed5-836f-827bb7428c5a/WhatsApp_Image_20240131_at_151932__1_removebg.png' alt="Pets Town Lebanon Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.95em',color:"2b2b2b" }}  className='footer-p '>
          Indulge in our selection of skincare essentials, all formulated with carefully chosen organic ingredients. From rejuvenating facial serums to nourishing body butters, each product is designed to promote healthy, radiant skin.
          </Typography>

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className=' ul-white'>
            <li className='link-title'>
              <h1>

              Site links
              </h1>
              </li>
            <li><Link  href="/">
              Home</Link></li>
            <li><Link href="/collection/products">Collections</Link></li> 
            <li><Link href="/about">About</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>

          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>
            <h1>

              Contact
            </h1>
            
              </li>
            {/* <li><Link href="mailto:sales@thecraftroom-lb.com">sales@petstown.com</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/amaria.organicbeauty/" target="_blank" rel="noreferrer" >@Amaria.organicbeauty</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+961 78 906 134</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
            <SMicons/>
        
          </ul>
        </div>
  
      </div>
    </div>

    <div className="site-footer__bottom bg2 " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container bg2" style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer

