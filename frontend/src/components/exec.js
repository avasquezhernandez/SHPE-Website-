import React,{useEffect} from "react";

export default function Exec() {
  useEffect(() => {
        const scrollHandler = () => {
          const mission2 = document.querySelector(".exec-text2");
          if (window.pageYOffset >= 72) {
            mission2.classList.add("exec-text-active");
          
          }
          const mission3 = document.querySelector(".exec-text3");
        
          if (window.pageYOffset >= 264) {
            mission3.classList.add("exec-text-active");
          
          }
            const mission4 = document.querySelector(".exec-text4");
        
          if (window.pageYOffset >= 465) {
            mission4.classList.add("exec-text-active");
          }

           const mission5 = document.querySelector(".exec-text5");
        
          if (window.pageYOffset >= 664) {
            mission5.classList.add("exec-text-active");
          
          }

           const mission6 = document.querySelector(".exec-text6");
  
          if (window.pageYOffset >= 866) {
            mission6.classList.add("exec-text-active");
          
          }

           const mission7 = document.querySelector(".exec-text7");
        
          if (window.pageYOffset >= 1100) {
            mission7.classList.add("exec-text-active");
          
          }
           const mission8 = document.querySelector(".exec-text8");
        
          if (window.pageYOffset >= 1146) {
            mission8.classList.add("exec-text-active");
          
          }
        };
    
        document.addEventListener("scroll", scrollHandler);
      }, []);
  return (
    <div className="exec-container">
      {/* edit the classlist roles */}
      <div className="president">
      <img src="diego_shpe.png" alt="" className="diego"></img>
        <div class= "exec-text-active">
          <h1>SHPE President</h1> 
          <h2>Diego Gonzalez | <a href="mailto:d.gonzalez@wustl.edu">d.gonzalez@wustl.edu</a></h2> 
          
        </div>
      </div>

      <div className="treasuer">
        <img src="gabbi_shpe.png" alt="" className="gabbi"></img>
        <div className="exec-text2">
          <h1>SHPE Vice President</h1>
          <h2>Gabriella Arguello | <a href="mailto:a.gabbi@wustl.edu">a.gabbi@wustl.edu</a></h2> 
          </div>
      </div>

      <div className="student-advisor">
      <img src="anette_shpe.png" alt="" className="anette"></img>
        <div className="exec-text3">
               <h1>SHPE Treasurer</h1>
          <h2>Anette Martinez Vasquez | <a href="mailto:a.gabbi@wustl.edu">a.gabbi@wustl.edu</a></h2> 
        </div>
      </div>
      

      <div className="IVP">
        <img src="melita_shpe.png" alt="" className="melita"></img>
        <div className="exec-text4">
        <h1>SHPE Internal Representative</h1>
          <h2>Melita Ocampo | <a href="mailto:melita@wustl.edu">melita@wustl.edu</a></h2> 
        </div>
      </div>

      <div className="EVP">
      <img src="Diana.jpeg" alt="" className="diana"></img>
        <div className="exec-text5">
         <h1>SHPE Event Coordinator</h1>
          <h2>Diana Cardenas-Jara | <a href="mailto:cardenas-jara@wustl.edu">cardenas-jara@wustl.edu</a></h2> 
        </div>
      </div>

      <div className="sec">
        <img src="miguel_shpe.png" alt="" className="miguel"></img>
        <div className="exec-text6">
          <h1>SHPE External Representative</h1>
          <h2>Miguel Lopez | <a href="mailto:lmiguel@wustl.edu">lmiguel@wustl.edu</a></h2> 
        </div>
      </div>

      <div className="comm-serv">
        <img src="anthony_shpe.png" alt="" className="anthony"></img>
        <div className="exec-text7">
          <h1>SHPE Secretary</h1>
          <h2>Anthony Vidal | <a href="mailto:a.vidal@wustl.edu">a.vidal@wustl.edu</a></h2> 
        </div>
      </div>

      <div className="event-coordinator">
        <img src="angela_shpe.png" alt="" className="angela"></img>
        <div className="exec-text8">
          <h1>SHPE Community Service Chair</h1>
          <h2>Angela Delgado | <a href="mailto:a.j.delgado@wustl.edu">a.j.delgado@wustl.edu</a></h2> 
        </div>
      </div>


      



    </div>
  );
}
