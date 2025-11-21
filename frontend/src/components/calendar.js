export default function Calendar() {
  return (
    <div className="calendar-container">
      <div className="calendar-with-card">
        <iframe 
          src="https://outlook.office365.com/owa/calendar/f8241a43c9054867871293ed9595feca@wustl.edu/9f1b50bdd6934c41977034651bbb2e7b2332332838884438037/calendar.html" 
          className="Calendar">
        </iframe>

        <div className="event-point-container">
        <div className="event-container">
        <div className="event-card">
          <h3 className="event-title">SHPE National Convention</h3>
         
          <p className="event-description">
            Nation’s largest Hispanic STEM convention for networking, careers, and empowerment!
          </p>
          <button className="event-button">Learn More</button>
        </div>
        <div className="event-card">
          <h3 className="event-title">Noche de Ciencias</h3>
          <p className="event-description">
            STEM outreach event inspiring Hispanic youth through science, technology, and education!
          </p>
          <button className="event-button">Learn More</button>
          
        </div>
        <div className="event-card">
          <h3 className="event-title">Half & Half Workshop</h3>
          <p className="event-description">
            Half career workshop, half dance workshop, integrating professional growth with some groovy moves!
          </p>
          <button className="event-button">Learn More</button>
          
        </div>
        </div>
         
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRuu8moPX-8Il5wqSSq9IvUcrSJRwliKOJH9MFuJD4bGGWEboKFjM66-C6xCyF68b7EGZmxAtE81NR8/pubhtml?widget=true&amp;headers=false" className="spoint">
        </iframe>
      </div>
        
      </div>

    </div>
  )
}
