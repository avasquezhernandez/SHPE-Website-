import Nav from "../components/nav";
import PhotoCarousel from "../components/photosCar";
import Footer from "../components/footer";
import Familia from "../components/familia";
import React, { useEffect } from "react";

export default function Photos() {
  useEffect(() => {
    let photo_link = document.querySelector(".photos");

    photo_link.innerHTML = "Home";
    photo_link.href = "http://localhost:3000/";
  }, []);
  return (
    <>
      <Nav />
      <PhotoCarousel />
      <Familia />
      <Footer />
    </>
  );
}
