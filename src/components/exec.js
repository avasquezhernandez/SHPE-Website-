import React,{useEffect} from "react";

export default function Exec() {
  useEffect(() => {
        const scrollHandler = () => {
          const mission = document.querySelector(".exec-text");
          console.log(window.pageYOffset);
          if (window.pageYOffset >= 190) {
            mission.classList.add(".exec-text-active");
          }
        };
    
        document.addEventListener("scroll", scrollHandler);
      }, []);
  return (
    <div className="exec-container">

      <div className="president">
      <img src="me.jpg" alt="" className="alex"></img>
      <img src="me.jpg" alt="" className="alex"></img>
        <div class= "exec-text">
          <h1>Our president</h1>
        </div>
      </div>

      <div className="treasuer">
        <img src="Gabbi.jpeg" alt="" className="gabbi"></img>
        <div className="exec-text"><h1>Our treasuer</h1></div>
      </div>

      <div className="student-advisor">
      <img src="Diana.jpeg" alt="" className="diana"></img>
        <div className="exec-text">
          <h1>Our student advisor</h1>
        </div>
      </div>
      

      <div className="IVP">
        
        <div className="exec-text">
          <h1>Our IVP</h1>
        </div>
      </div>

      <div className="EVP">
      <img src="NickyB.jpeg" alt="" className="nicole"></img>
        <div className="exec-text">
          <h1>Our EVP</h1>
        </div>
      </div>

      <div className="sec">
        <div className="exec-text">
          <h1>Our Secretary</h1>
        </div>
      </div>

      <div className="comm-serv">
        <div className="exec-text">
          <h1>Our community service chair</h1>
        </div>
      </div>

      <div className="event-coordinator">
        <div className="exec-text">
          <h1>Our event coordinator</h1>
        </div>
      </div>


      



    </div>
  );
}
