import Nav from "../components/nav";
import Footer from "../components/footer";
import Packet from "../components/packet";
import React, { useEffect } from "react";


export default function Sponsorship() {
    useEffect(() => {
      let photo_link = document.querySelector(".photos");
      let sponsorship_link = document.querySelector(".sponsorship");
      
  
      photo_link.innerHTML = "Home";
      photo_link.href = "http://localhost:3000/";

      sponsorship_link.innerHTML = "Photos";
      sponsorship_link.href = "http://localhost:3000/photos";
    }, []);

 
    return (
      <>
        <Nav />
        <Packet/>
        <Footer />
      </>
    );
  }