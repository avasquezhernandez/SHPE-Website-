import React, { useEffect } from "react";
export default function Familia() {
  useEffect(() => {
    const scrollHandler = () => {
      const mission = document.querySelector(".mission");
      console.log(window.pageYOffset);
      if (window.pageYOffset >= 190) {
        mission.classList.add("mission-active");
      }
    };

    document.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div className="mission">
        <h1 className="mission-header">CORE VALUES</h1>
        <p className="our-mission">
          SHPE WashU radiates their cores values, embodying professionalism
          elegantly through every setting. Creating a fun and loving
          enviornment, our chapter guides our members to many doors of
          oppurtunity paving an entrance into the professional world. <br />
          we are professionals, we are leaders, and most importantly WE ARE
          FAMILIA!
        </p>
      </div>
    </>
  );
}
