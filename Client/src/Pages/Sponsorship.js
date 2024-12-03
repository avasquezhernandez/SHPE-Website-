import Nav from "../components/nav";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import React, { useEffect } from "react";


export default function Sponsorship() {  
  useEffect(() => {
  

    let photo_link = document.querySelector(".photos");
    let events_link = document.querySelector(".events");
    let sponsorship_link = document.querySelector(".sponsorship");
    
    events_link.innerHTML = "Photos";
    events_link.href = "http://localhost:3000/photos";
    photo_link.innerHTML = "Home";
    photo_link.href = "http://localhost:3000/";
    sponsorship_link.innerHTML="Events"
    sponsorship_link.href="http://localhost:3000/events";
  }, []);
    return (
      <>
      
      
      <Newsletter/>
       <div className="contact-page">
        <Nav />
        
        <iframe src="WashU_SHPE_Sponsorship_Package.pdf" className="packet"  frameBorder={0}></iframe>
        <Footer />
        </div>
      </>
    );
  }