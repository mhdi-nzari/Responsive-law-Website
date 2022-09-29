import React from "react";
import logo from '../../img/f_logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <footer>
          <div className="container text-center top">
               <div className="img">
                    <img src={logo} alt="" />
               </div>
               <p>©1401 . All Right Reversed By Mahdi Nazari</p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
