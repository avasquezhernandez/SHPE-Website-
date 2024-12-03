import React, { useEffect } from "react";
export default function Chapter() {
  const join_button = () => {
    window.location.href =
      "https://wustl.presence.io/organization/society-of-hispanic-professional-engineers";
  };
  useEffect(() => {
    const scrollHandler = () => {
      const mission = document.querySelector(".mission");
      if (window.pageYOffset >= 155) {
        mission.classList.add("mission-active");
      }
    };

    document.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div className="home-join-container">
        <h1 className="home-join-header">WashU SHPE Chapter</h1>
        <button className="home-join-button" onClick={join_button}>
          <span className="text">Join WashU SHPE!</span>
        </button>
      </div>

      <div className="mission">
        <h1 className="mission-header">OUR MISSION</h1>
        <p className="our-mission">
          SHPE changes lives by empowering the Hispanic community to realize its
          fullest potential and to impact the world through STEM awareness,
          access, support, and development
        </p>
      </div>
    </>
  );
}
