import React,{useEffect} from "react";

export default function Exec() {
  useEffect(() => {
        const scrollHandler = () => {
          const mission_IVP = document.querySelector(".mission-IVP");
          const mission_EVP = document.querySelector(".mission-EVP");
          const mission_trea = document.querySelector(".mission-treasure");
          const mission_sec = document.querySelector(".mission-sec");
          const mission_comm = document.querySelector(".mission-comm");
          const mission_advisor = document.querySelector(".mission-advisor");
          const mission_coor = document.querySelector(".mission-coor");
          
          console.log(window.pageYOffset);
          
         if(window.pageYOffset >= 100){
            mission_IVP.classList.add("mission-active-pres");
          }
          if(window.pageYOffset >= 300){
            mission_EVP.classList.add("mission-active-pres");
          }
          if(window.pageYOffset >= 500){
            mission_trea.classList.add("mission-active-pres");
          }
          if(window.pageYOffset >= 600){
            mission_advisor.classList.add("mission-active-pres");
           
          }
          if(window.pageYOffset >= 800){
            mission_sec.classList.add("mission-active-pres");
        
          }
          if(window.pageYOffset >= 1000){
            mission_comm.classList.add("mission-active-pres");
          }
          if(window.pageYOffset >= 1176){
            mission_coor.classList.add("mission-active-pres");
          }
        };
    
        document.addEventListener("scroll", scrollHandler);
      }, []);
  return (
    <div className="exec-container">

      <div className="president">
     
        <img src="me.jpg" alt="" className="alex"></img>
        <img src="nic_sh.jpg" alt="" className="lucas"></img>
        <div className="mission-active-pres">
            <h1 className="mission-header"> Our Co-Presidents</h1>
            <p className="our-mission-pres">
              Alex's Email:  <a
                  href="mailto:a.vasquezhernandez@wustl.edu"
                >a.vasquezhernandez@wustl.edu</a> <br></br>

              Nicole's Email:<a
                  href="mailto: lucas.n@wustl.edu"
                > lucas.n@wustl.edu</a> <br></br>

              Alex's LinkedIn:  <a
                  href="https://www.linkedin.com/in/avh12/"
                >https://www.linkedin.com/in/avh12/</a><br></br>

                Nicole's LinkedIn:  <a
                  href="https://www.linkedin.com/in/nickyyb/"
                >https://www.linkedin.com/in/nicolecindylucas/</a><br></br>
              
            
            </p>
          </div>
       
            
        
    </div>
      <div className="IVP">
      <img src="mir_sh.jpg" alt="" className="miranda"></img>
        
      <div className="mission-IVP">
            <h1 className="mission-header">Internal Vice President</h1>
            <p className="our-mission-pres">
            Email:  <a
                  href="mailto:g.miranda@wustl.edu"
                >g.miranda@wustl.edu</a> <br></br>

              Miranda's LinkedIn:<a
                  href="https://www.linkedin.com/in/miranda-gamino/"
                >https://www.linkedin.com/in/miranda-gamino/</a> <br></br>
            
            </p>
          </div>
      </div>

      <div className="EVP">
      <img src="NickyB.jpeg" alt="" className="nicole"></img>
      <div className="mission-EVP">
            <h1 className="mission-header">External Vice President</h1>
            <p className="our-mission-pres">
             Email:  <a
                  href="mailto:briceno@wustl.edu"
                >briceno@wustl.edu</a> <br></br>

              Nicole's LinkedIn:<a
                  href="https://www.linkedin.com/in/nickyyb/"
                >https://www.linkedin.com/in/nickyyb/</a> <br></br>
            
            </p>
          </div>
      </div>
      <div className="treasuer">
        <img src="gab_sh.jpg" alt="" className="gabbi"></img>
        <div className="mission-treasure">
            <h1 className="mission-header">Treasuer</h1>
            <p className="our-mission-pres">
            Email:  <a
                  href="mailto:a.gabbi@wustl.edu"
                >a.gabbi@wustl.edu</a> <br></br>

              Nicole's LinkedIn:<a
                  href="https://www.linkedin.com/in/gabriella-arguello-91b54a273/"
                >https://www.linkedin.com/in/gabriella-arguello-91b54a273/</a> <br></br>
            
            </p>
          </div>
      </div>

      <div className="student-advisor">
      <img src="Diana.jpeg" alt="" className="diana"></img>
      <div className="mission-advisor">
            <h1 className="mission-header">Student Advisor </h1>
            <p className="our-mission-pres">
            Email:  <a
                  href="mailto:cardenas-jara@wustl.edu"
                >cardenas-jara@wustl.edu</a> <br></br>

              Diana's LinkedIn:<a
                  href="https://www.linkedin.com/in/diana-cardenas-jara/"
                >https://www.linkedin.com/in/diana-cardenas-jara/</a> <br></br>
            
            </p>
          </div>
      </div>
      

    

      <div className="sec">
      <img src="moi_sh.jpg" alt="" className="moises"></img>
      <div className="mission-sec">
            <h1 className="mission-header">Secretary</h1>
            <p className="our-mission-pres">
            Email:  <a
                  href="mailto:a.moises@wustl.edu"
                >a.moises@wustl.edu</a> <br></br>

              Moises's LinkedIn:<a
                  href="https://www.linkedin.com/in/moises-akerman/"
                >https://www.linkedin.com/in/moises-akerman/</a> <br></br>
            
            </p>
          </div>
      </div>

      <div className="comm-serv">
      <img src="an_sh.jpg" alt="" className="angela"></img>
      <div className="mission-comm">
            <h1 className="mission-header">Community Service Chair</h1>
            <p className="our-mission-pres">
            Email:  <a
                  href="mailto:a.j.delgado@wustl.edu"
                >a.j.delgado@wustl.edu</a> <br></br>

            
            
            </p>
          </div>
      </div>

      <div className="event-coordinator">
      <img src="mel_sh.jpg" alt="" className="melita"></img>
      <div className="mission-coor">
            <h1 className="mission-header">Event Coordinator</h1>
            <p className="our-mission-pres">
            Email:  <a
                  href="mailto:melita@wustl.edu"
                >melita@wustl.edu</a> <br></br>

              melita's LinkedIn:<a
                  href="https://www.linkedin.com/in/melita-ocampo-927810287/"
                >https://www.linkedin.com/in/melita-ocampo-927810287/</a> <br></br>
            
            </p>
          </div>
      </div>


      
      


    </div>
  );
}
