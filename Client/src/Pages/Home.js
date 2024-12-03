import Nav from "../components/nav";
import Chapter from "../components/chapter";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  

  let photo_link = document.querySelector(".photos");
  let events_link = document.querySelector(".events");

  events_link.innerHTML = "Photos";
  events_link.href = "http://localhost:3000/photos";
  photo_link.innerHTML = "Events";
  photo_link.href = "http://localhost:3000/events";
}, []);
  return (
    <>
    
    <Newsletter/>
    <div className="contact-page">
      <Nav />
      <Chapter />
      <Footer />
   
 
    </div>
    </>
  );
}
