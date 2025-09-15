import "../styles/photos.css";
import React, { useEffect } from "react";

export default function PhotoCarousel() {
  const imgArray = [];
  useEffect(() => {
    let count = 0;
    const fpic = document.querySelector(".forward");
    const bpic = document.querySelector(".backward");
    imgArray.push(document.querySelector(".first"));
    imgArray.push(document.querySelector(".second"));
    imgArray.push(document.querySelector(".third"));
    imgArray.push(document.querySelector(".fourth"));
    imgArray.push(document.querySelector(".fifth"));

    

    imgArray[0].classList.add("appear");
    const PicFChange = () => {
      count++;
      if (count !== 0) {
        imgArray[count - 1].classList.remove("appear");
      }

      if (count < imgArray.length) {
        imgArray[count].classList.add("appear");
      } else {
        count = 0;
        imgArray[count].classList.add("appear");
      }
    };
    const PicBChange = () => {
      count--;
      if (count !== imgArray.length - 1) {
        imgArray[count + 1].classList.remove("appear");
      }

      if (count >= 0) {
        imgArray[count].classList.add("appear");
      } else {
        count = imgArray.length - 1;
        imgArray[count].classList.add("appear");
      }
    };

    fpic.addEventListener("click", PicFChange);
    bpic.addEventListener("click", PicBChange);
    return () => {
      fpic.removeEventListener("click", PicFChange);
      bpic.removeEventListener("click", PicBChange);
    };
  });

  return (
    <>
     <h1 className="photo-title">
        
            SHPE Washu Photo Carousel
       
        </h1>
      <div className="carousel">
       
        <img src="photo1.jpg" alt="" className="first"></img>
        <img src="photo2.jpg" alt="" className="second"></img>
        <img src="photo3.jpg" alt="" className="third"></img>
        <img src="photo4.jpg" alt="" className="fourth"></img>
        <img src="photo6.jpg" alt="" className="fifth"></img>
        
        <button className="forward">{"→"}</button>
        <button className="backward">{"←"}</button>
      </div>
    </>
  );
}
