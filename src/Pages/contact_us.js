import Nav from "../components/nav";
import Footer from "../components/footer";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Exec from "../components/exec";
import "C:/Users/alexv/OneDrive/Desktop/shpe/Client/src/styles/contact.css";

Modal.setAppElement("#root");

export default function Contact() {
  useEffect(() => {
    const button = document.querySelector(".newsletter-button");
      const clickButton = () => {
        
        const contact = document.querySelector(".contact-page");
        contact.classList.add("newsletter-page");
      };
  
      button.addEventListener("click", clickButton);
  
    let photo_link = document.querySelector(".photos");
    let events_link = document.querySelector(".events");

    events_link.innerHTML = "Photos";
    events_link.href = "http://localhost:3000/photos";
    photo_link.innerHTML = "Home";
    photo_link.href = "http://localhost:3000/";
  }, []);

  return (
    <>
    <div className="reg"></div>
     <div className="contact-page">
      
      <Nav />
      <Exec />
      <Footer />
      </div>
    </>
  );
}
