/* eslint-disable jsx-a11y/anchor-has-content */

export default function Footer() {

  return (
    <>
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
                <button className="newsletter-button">Click here to SUBSCRIBE</button></p>
          </div>

      </footer>
    </>
  );
}
