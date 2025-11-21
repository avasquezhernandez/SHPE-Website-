import React,{useEffect} from "react";

export default function Exec() {
  
      
  return (
    <div className="exec-container">
      <div className="exec-row">
        <div className="president exec-card">
          <img src="diego_shpe.png" alt="Portrait of Diego Gonzalez, SHPE President" className="exec-img" />
          <div className="exec-text">
            <div className="exec-role">SHPE President</div>
            <div className="exec-name">Diego Gonzalez</div>
            <a className="exec-email" href="mailto:d.gonzalez@wustl.edu">d.gonzalez@wustl.edu</a>
          </div>
        </div>
        <div className="treasuer exec-card">
          <img src="gabbi_shpe.png" alt="Portrait of Gabriella Arguello, SHPE Vice President" className="exec-img" />
          <div className="exec-text">
            <div className="exec-role">SHPE Vice President</div>
            <div className="exec-name">Gabriella Arguello</div>
            <a className="exec-email" href="mailto:a.gabbi@wustl.edu">a.gabbi@wustl.edu</a>
          </div>
        </div>
        <div className="student-advisor exec-card">
          <img src="anette_shpe.png" alt="Portrait of Anette Martinez Vasquez, SHPE Treasurer" className="exec-img" />
          <div className="exec-text">
            <div className="exec-role">SHPE Treasurer</div>
            <div className="exec-name">Anette Martinez Vasquez</div>
            <a className="exec-email" href="mailto:a.gabbi@wustl.edu">a.gabbi@wustl.edu</a>
          </div>
        </div>
      </div>
      <div className="exec-row">
        <div className="IVP exec-card">
          <img src="melita_shpe.png" alt="Portrait of Melita Ocampo, SHPE Internal Representative" className="exec-img" />
          <div className="exec-text">
            <div className="exec-role">SHPE Internal Representative</div>
            <div className="exec-name">Melita Ocampo</div>
            <a className="exec-email" href="mailto:melita@wustl.edu">melita@wustl.edu</a>
          </div>
        </div>
        <div className="EVP exec-card">
          <img src="Diana.jpeg" alt="Portrait of Diana Cardenas-Jara, SHPE Event Coordinator" className="exec-img img-lower" />
          <div className="exec-text">
            <div className="exec-role">SHPE Event Coordinator</div>
            <div className="exec-name">Diana Cardenas-Jara</div>
            <a className="exec-email" href="mailto:cardenas-jara@wustl.edu">cardenas-jara@wustl.edu</a>
          </div>
        </div>
        <div className="sec exec-card">
          <img src="miguel_shpe.png" alt="Portrait of Miguel Lopez, SHPE External Representative" className="exec-img img-lower" />
          <div className="exec-text">
            <div className="exec-role">SHPE External Representative</div>
            <div className="exec-name">Miguel Lopez</div>
            <a className="exec-email" href="mailto:lmiguel@wustl.edu">lmiguel@wustl.edu</a>
          </div>
        </div>
      </div>
      <div className="exec-row">
        <div className="comm-serv exec-card">
          <img src="anthony_shpe.png" alt="Portrait of Anthony Vidal, SHPE Secretary" className="exec-img" />
          <div className="exec-text">
            <div className="exec-role">SHPE Secretary</div>
            <div className="exec-name">Anthony Vidal</div>
            <a className="exec-email" href="mailto:anthony@wustl.edu">anthony@wustl.edu</a>
          </div>
        </div>
        <div className="event-coordinator exec-card">
          <img src="angela_shpe.png" alt="Portrait of Angela Delgado, SHPE Community Service Chair" className="exec-img" />
          <div className="exec-text">
            <div className="exec-role">SHPE Community Service Chair</div>
            <div className="exec-name">Angela Delgado</div>
            <a className="exec-email" href="mailto:a.j.delgado@wustl.edu">a.j.delgado@wustl.edu</a>
          </div>
        </div>
      </div>
    </div>
  );
}
