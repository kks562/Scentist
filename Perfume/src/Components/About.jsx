import React from 'react';
import './About.css';
import back from '../assets/l.jpg';

const About = () => {
  return (
    <>
      <div className="image">
        <img src={back} alt="Background Image" />
      </div>
    <div className="about-container">
      
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="about-content">

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to Scentist, where we believe that a fragrance is more than just a scent; it's a journey through memory, emotion, and identity. Founded in [Year], our brand has been dedicated to crafting unique and luxurious fragrances that capture the essence of beauty and individuality.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>
            At Scentist, we are passionate about using only the finest ingredients sourced from around the world. Each of our perfumes is meticulously crafted by our expert perfumers to ensure a harmonious blend of notes that tell a unique story.
          </p>
        </div>
        <div className="about-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="path/to/team-member1.jpg" alt="Team Member 1" />
              <h3>Jane Doe</h3>
              <p>Founder & Master Perfumer</p>
            </div>
            <div className="team-member">
              <img src="path/to/team-member2.jpg" alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
        <div className="about-section">
          <h2>Our Promise</h2>
          <p>
            We promise to deliver exceptional quality and unforgettable experiences with each of our products. Our commitment to sustainability and ethical practices ensures that you can indulge in luxury with a clear conscience.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
