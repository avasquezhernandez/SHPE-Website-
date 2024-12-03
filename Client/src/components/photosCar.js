import "../styles/photos.css";
import React, { useEffect } from "react";

export default function PhotoCarousel() {
  
  useEffect(() => {
    const imgArray = [];
    let count = 0;
    const fpic = document.querySelector(".forward");
    const bpic = document.querySelector(".backward");
    imgArray.push(document.querySelector(".f"));
    imgArray.push(document.querySelector(".second"));
    imgArray.push(document.querySelector(".third"));
    imgArray.push(document.querySelector(".fourth"));
    imgArray.push(document.querySelector(".fifth"));
    imgArray.push(document.querySelector(".sixth"));
    imgArray.push(document.querySelector(".seventh"));
    imgArray.push(document.querySelector(".eigth"));
    imgArray.push(document.querySelector(".ninth"));
    imgArray.push(document.querySelector(".tenth"));
    imgArray[count].classList.add("appear");
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
      console.log(count);
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
      <div className="carousel">
        <h1 className="photo-title">
          
            The Professional Unity: Familia Carousel of Success
            
        </h1>
     
        <img src="DSC_0149.JPG" alt="" className="f"></img>
        <img src="DSC_0065.JPG" alt="" className="second"></img>
        <img src="DSC_0092.JPG" alt="" className="third"></img>
        <img src="DSC_0019.JPG" alt="" className="fourth"></img>
        <img src="DSC_0155.JPG" alt="" className="fifth"></img>
        <img src="event5.jpg" alt="" className="sixth"></img>
        <img src="IMG_8013.jpg" alt="" className="seventh"></img>
        <img src="IMG_8015.jpg" alt="" className="eigth"></img>
        <img src="IMG_8020.jpg" alt="" className="ninth"></img>
        <img src="event3.jpeg" alt="" className="tenth"></img>
        <button className="forward">{"→"}</button>
        <button className="backward">{"←"}</button>
      </div>
    </>
  );
}
