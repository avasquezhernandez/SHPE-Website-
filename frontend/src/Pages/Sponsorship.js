import Nav from "../components/nav";
import Footer from "../components/footer";
import Packet from "../components/packet";
import React, { useEffect } from "react";
import "../styles/sponsorship.css";

export default function Sponsorship() {
    useEffect(() => {
      let photo_link = document.querySelector(".photos");
      let sponsorship_link = document.querySelector(".sponsorship");
      
      if (photo_link && sponsorship_link) {
        photo_link.innerHTML = "Home";
        photo_link.href = "http://localhost:3000/";

        sponsorship_link.innerHTML = "Photos";
        sponsorship_link.href = "http://localhost:3000/photos";
      }
    }, []);

    return (
      <>
        <Nav />
        <div className="sponsorship-container">
        
          <section className="sponsorship-hero">
            <div className="hero-content">
              <h1 className="hero-title">Partner with WashU SHPE</h1>
              <p className="hero-subtitle">
                Join us in empowering Hispanic and Latino engineering students to achieve their full potential
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Active Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Annual Events</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Committed</span>
                </div>
              </div>
            </div>
          </section>

         
          <section className="sponsorship-benefits">
            <div className="benefits-container">
              <h2 className="section-title">Why Partner With Us?</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h3>Target Audience</h3>
                  <p>Connect directly with diverse, talented engineering students ready to enter the workforce.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🤝</div>
                  <h3>Network Building</h3>
                  <p>Build lasting relationships with future engineers and current industry professionals.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📈</div>
                  <h3>Brand Visibility</h3>
                  <p>Increase your company's visibility among students, faculty, and the broader community.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💼</div>
                  <h3>Recruitment</h3>
                  <p>Access to a pipeline of qualified, motivated candidates for internships and full-time positions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Benefits Section */}
          <section className="partnership-benefits-section">
            <div className="benefits-container">
              <h2 className="section-title">Partnership Benefits</h2>
              <p className="section-subtitle">Join WashU SHPE as a sponsor and gain access to exceptional talent while supporting diversity in STEM.</p>
              
              <div className="benefits-tiers">
                <div className="tier superheroe">
                  <div className="tier-header">
                    <h3>Superhéroe<br/><span className="tier-subtitle">(Superhero)</span></h3>
                    <div className="tier-amount">$250</div>
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Announced as sponsor in our newsletter</li>
                      <li>Invitation to SHPE WashU events</li>
                    </ul>
                  </div>
                </div>

                <div className="tier hermanos">
                  <div className="tier-header">
                    <h3>Hermanos<br/><span className="tier-subtitle">(Kin)</span></h3>
                    <div className="tier-amount">$500</div>
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Announced as sponsor in our newsletter</li>
                      <li>Invitation to SHPE WashU events</li>
                      <li>Accessibility to SHPE member resumes</li>
                    </ul>
                  </div>
                </div>

                <div className="tier padrinos">
                  <div className="tier-header">
                    <h3>Padrinos<br/><span className="tier-subtitle">(Godparents)</span></h3>
                    <div className="tier-amount">$750</div>
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Announced as a sponsor in our newsletter and newsletter</li>
                      <li>Accessibility to SHPE member resumes</li>
                      <li>One private sponsor-led event</li>
                      <li>Logo promotion: merch, events funded by sponsors, etc.</li>
                    </ul>
                  </div>
                </div>

                <div className="tier estrellas">
                  <div className="tier-header">
                    <h3>Estrellas<br/><
                      span className="tier-subtitle">(Stars)</span>
                      </h3>
                    <div className="tier-amount">$1000+</div>
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Announced as an investor in our newsletter, and social media</li>
                      <li>Accessibility to SHPE member resumes</li>
                      <li>One private sponsor-led event</li>
                      <li>Accessibility to three lunch-ins in the newsletter</li>
                      <li>Logo promotion: website, merch, events funded by sponsors, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="custom-partnerships">
                <div className="custom-card">
                  <h3>Custom Partnerships</h3>
                  <p>Looking for a unique partnership opportunity? We're open to creating customized sponsorship packages that align with your company's goals and our students' needs.</p>
                  <div className="custom-options">
                    <span className="custom-tag">Workshop Sponsorship</span>
                    <span className="custom-tag">Scholarship Programs</span>
                    <span className="custom-tag">Mentorship Initiatives</span>
                    <span className="custom-tag">Project Collaborations</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

         
          <section className="sponsorship-packet-section">
            <div className="packet-container">
              <h2 className="section-title">Sponsorship Package</h2>
              <p className="packet-description">
                Download our comprehensive sponsorship package to learn more about partnership opportunities and benefits.
              </p>
              <Packet/>
              <div className="packet-actions">
                <a href="WashU_SHPE_Sponsorship_Package.pdf" download className="download-btn">
                  📄 Download PDF
                </a>
                <a href="mailto:washushpe@gmail.com" className="contact-btn">
                  ✉️ Contact Us
                </a>
              </div>
            </div>
          </section>

        
          <section className="sponsorship-contact">
            <div className="contact-container">
              <h2 className="section-title">Ready to Partner?</h2>
              <p className="contact-description">
                We'd love to discuss how we can work together to support our students and your organization.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Email:</strong> washushpe@gmail.com
                </div>
                <div className="contact-item">
                  <strong>External Vice President:</strong> Miguel Lopez - lmiguel@wustl.edu
                </div>
              </div>
              <div className="contact-actions">
                <a href="mailto:washushpe@gmail.com?subject=Sponsorship Inquiry" className="primary-btn">
                  Get in Touch
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }