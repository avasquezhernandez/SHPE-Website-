import React, { useEffect } from "react";
import axios from 'axios';
export default function Newsletter() {

  useEffect(() => {
    const button = document.querySelector(".newsletter-button");
    const send = document.querySelector(".sendbutton");
    const news_x = document.querySelector(".news_exit");
    const contact = document.querySelector(".contact-page");
    const reg = document.querySelector(".reg");
    const overlay = document.querySelector(".overlay");


    const clickButton1 = async () => {
      const fir = document.querySelector(".first").value;
      const las = document.querySelector(".last").value;
      const  email = document.querySelector(".email").value;
      
      try{
        const res=  await axios.post('http://localhost:5000/api/News/', { First:fir, Last:las, Email:email });
        console.log(res.data)}
      catch(error){console.error('Invalid Information:',error)}

    };

    const clickButton2 = () => {
      reg.classList.add("reg-button");
      contact.classList.add("newsletter-page");
      overlay.classList.add("overlayy");

    };
    const clickExit=()=>{

      reg.classList.remove("reg-button");
      contact.classList.remove("newsletter-page");
      overlay.classList.remove("overlayy");
   
    }
    send.addEventListener("click", clickButton1);
    button.addEventListener("click", clickButton2);
    news_x.addEventListener("click", clickExit);

    return()=>(send.removeEventListener("click", clickButton1))
  }, []);

  return (
    <>
     <div className="overlay">
    <div className="reg">
    <h1 className="news-title">SUBSCRIBE TO OUR SHPE NEWSLETTER!!!</h1>

    <div className="news_exit">
            <div className="line12"></div>
            <div className="line22"></div>
            <div className="line32"></div>
          </div>

      <div className="userinput">
      
      <p>First Name:</p>
        <input type="text" placeholder="Ex: Jon" className="first"></input>
      
      <p>Last Name:</p>
        <input type="text" placeholder="Ex: Doe" className="last"></input>
        <p>Email:</p>
        <input type="text" placeholder="Ex: jondoe@wustl.edu" className="email"></input>
        <input type="button" className="sendbutton" value="Send"></input>
        
      </div>
     <img src="newsletter.png" alt="" className="news-pic"></img>
      

      </div>
      </div>
    </>
  );
}
