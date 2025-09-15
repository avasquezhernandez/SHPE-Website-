import Nav from "../components/nav";
import Footer from "../components/footer";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Exec from "../components/exec";
import "C:/Users/alexv/OneDrive/Desktop/SHPE/SHPE-Website-/frontend/src/styles/contact.css";

Modal.setAppElement("#root");

export default function Contact() {
  useEffect(() => {
    const button = document.querySelector(".newsletter-button");
    
  
    let photo_link = document.querySelector(".photos");
    let events_link = document.querySelector(".events");
     let contact_link = document.querySelector(".contact");

    events_link.innerHTML = "Events";
    events_link.href = "http://localhost:3000/events";
    photo_link.innerHTML = "Home";
    photo_link.href = "http://localhost:3000/";

    contact_link.innerHTML = "Photos";
    contact_link.href = "http://localhost:3000/photos";
   
  }, []);

  return (
    <>
    
     <div className="contact-page">
      
      <Nav />
      <Exec />
      <Footer />
      </div>
    </>
  );
}
