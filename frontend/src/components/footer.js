import "C:/Users/alexv/OneDrive/Desktop/SHPE/SHPE-Website-/frontend/src/styles/footer.css";
import React, { useState } from "react";

export default function Footer() {
  const [isOpen,setIsOpen] = useState(false);
  const overlay = () => setIsOpen(prev=>!prev);

    
  return (
    <>
       <div className={isOpen ?  "newsletter-trans-active" : "newsletter-trans"}> 
       
       </div>

       <div className={isOpen ? "newsletter-form-active" : "newsletter-form"}>
         <div className="x" onClick={overlay}>
         <div className="new-line1"></div>
         <div className="new-line3"></div>
          </div>
         
          <form action="http://localhost:5000/api/subscribe" method="POST">
             <h3>SUBSCRIBE TO NEWSLETTER</h3>
          <input type="email" placeholder="Email" name="email" className="shpe-email"></input>
          <input type="submit" className="subscribe"></input>
          <img src="newsletter.png" className=""></img>


          </form>
          
         
        
       </div>
      <footer className="foot">

         <div className="contactus-footer">
          <ul>
            <p>Contact Us</p>
            <li>
              <p>WashU SHPE Social Media:</p>

              <a
                href="https://www.linkedin.com/groups/14302526"
                className="fa fa-linkedin"
              ></a>{" "}

              <a
                href="https://www.instagram.com/washushpe/"
                className="fa fa-instagram"
              ></a>
            </li>

              <li>
                <p>WashU SHPE Email: </p>
                <a href="mailto:shpe@wustl.edu" className="SHPE-email">
                  shpe@wustl.edu
                </a>
              </li>
          </ul>
          </div>
          <div className="link-footer">
          <li>
              <a href="http://localhost:3000/" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/photos" className="photos">
                Photos
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/events" className="events">
                Events
              </a>
            </li>
            <li>
              {" "}
              <a href="http://localhost:3000/contact" className="contact">
                Contact Us
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="http://localhost:3000/sponsorship" className="sponsorship">
                Sponsorship
              </a>{" "}
            </li>
          </div>
        
          <div className="newsletter-footer">
              <p> Do you want to keep up with our Washu SHPE chapter? <br></br> <br></br>
                SUBSCRIBE to our SHPE newsletter!!! <br></br><br></br>
                <button className="newsletter-button" onClick={overlay}>Click here to SUBSCRIBE</button></p>
          </div>

      </footer>
      
    </>
  );
}
