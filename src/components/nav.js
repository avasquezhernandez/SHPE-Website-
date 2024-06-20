import "../styles/nav.css";
import React, { useEffect } from "react";

const shpe_link = () => {
  window.location.href = "https://shpe.org/";
};

export default function Nav() {
  useEffect(() => {
    const hamburger = (t) => {
      const links = document.querySelector(".header-pages");
      const burger = document.querySelector(".burger");
      const isToggled = burger.classList.contains("toggle");
      console.log(isToggled);
      if (isToggled) {
        links.classList.remove("nav-active");
        burger.classList.remove("toggle");
      } else {
        links.classList.add("nav-active");
        burger.classList.add("toggle");
      }
    };
    const handleDocumentClick = (event) => {
      console.log(event.target);
      if (
        event.target.classList.contains("burger") ||
        event.target.classList.contains("line1") ||
        event.target.classList.contains("line2") ||
        event.target.classList.contains("line3")
      ) {
        hamburger(event.target);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="header">
          <div className="shpe-pic">
            <img
              src="SHPE.png
            "
              alt="SHPE PNG"
              id="shpe"
              onClick={shpe_link}
            />
          </div>

          <div className="header-pages">
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
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
