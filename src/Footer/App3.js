import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook , } from '@fortawesome/free-brands-svg-icons';
import {  faTwitter , } from '@fortawesome/free-brands-svg-icons';
import {  faGoogle , } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram , } from '@fortawesome/free-brands-svg-icons';
import {  faPinterest , } from '@fortawesome/free-brands-svg-icons';

function App3(){
  return(
    <>
      <div className="three">
      <img src="Lopard/6.png"/>
        <br /><br />
        <span className="tfd">Are you looking for new professional advice for your business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.
        </span>
        <br /><br />
        <input className="inn" type="text" placeholder="Type Email" />
        <button className="buu">Subscribe</button>
      </div>
      <div className="three">
        <h2 className="hed1">Services</h2>
        <br />
        <ul className="ll">
          <li>Bussiness</li>
          <li>Agency</li>
          <li>Social Media</li>
          <li>Branding</li>
          <li>Design</li>
        </ul>
        <ul className="ll">
          <li>Search Engine</li>
          <li>Online Support</li>
          <li>Development</li>
          <li>Pay Per Click</li>
          <li>Event</li>
        </ul>
      </div>
      <br />
      <div className="three">
      <h2 className="hed1">Information</h2>
      <br />
      <div><span style={{color:"blue"}}>Tel</span> : +0890-564-5644
            <br /> <span style={{color:"blue"}}>Email</span> : info@lopard3.com
            <br /><span style={{color:"blue"}}>Location</span> : House- 65/4, London
      </div>
      <br /><br />
      <button className="buu2" >
      <FontAwesomeIcon icon={faFacebook} style={{color:"white"}}/>
      </button>
      <button className="buu2">
      <FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/>
      </button>
      <button className="buu2">
      <FontAwesomeIcon icon={faGoogle} style={{color:"white"}}/>
      </button>
      <button className="buu2">
      <FontAwesomeIcon icon={faInstagram} style={{color:"white"}}/>
      </button>
      <button className="buu2">
      <FontAwesomeIcon icon={faPinterest} style={{color:"white"}} />
      </button>
      </div>
    </>
    );
}
export default App3;