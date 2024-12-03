import Nav from "../components/nav";
import Footer from "../components/footer";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Exec from "../components/exec";
import "../styles/contact.css";
import Newsletter from "../components/newsletter";

Modal.setAppElement("#root");

export default function Contact() {
  useEffect(() => {
  
    let photo_link = document.querySelector(".photos");
    let events_link = document.querySelector(".events");
    let contact_link = document.querySelector(".contact");
    
    events_link.innerHTML = "Photos";
    events_link.href = "http://localhost:3000/photos";
    photo_link.innerHTML = "Home";
    photo_link.href = "http://localhost:3000/";
    contact_link.innerHTML="Events"
    contact_link.href="http://localhost:3000/events";
  }, []);
  return (
    <>
    
     

      
    
      <Newsletter/>
     <div className="contact-page">
      
      <Nav />
      <Exec />
      <Footer />
      </div>
    </>
  );
}
