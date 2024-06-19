import React from 'react';
import src from '../image/aboutMe.jpg';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="bd-grid about__container bd-grid">
        <div className="about__img">
          <img src={src} alt="aboutMe" />
        </div>

        <div>
          <h2 className="about__subtitle">I am Narendra Maurya</h2>
          <p className="about__text">Solution-focused Web Developer Intern with experience in web-based applications. Participated in the development and implementation of web-based solutions. Supported company business objectives and strategies while gaining real-world experience. Mentored by Senior Web Developers, learning multiple systems and efficient development techniques. Resourceful Web Developer lends a hands-on approach to customizing web presence strategy. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Speciality supporting intricate backend needs and lending assistance throughout webpage lifecycle</p>
        </div>
      </div>
    </section>
  );
};

export default About;
