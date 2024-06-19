import React from 'react';
import src from '../image/work.jpg';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text"></p>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fa-brands fa-html5"></i>
              <span className="skills-name">HTML5</span>
            </div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
            <div className="skills__bar skills__html"></div>
          </div>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fa-brands fa-css3"></i>
              <span className="skills-name">CSS</span>
            </div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
            <div className="skills__bar skills__css"></div>
          </div>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fa-brands fa-js"></i>
              <span className="skills-name">JavaScript</span>
            </div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
            <div className="skills__bar skills__js"></div>
          </div>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fa-brands fa-react"></i>
              <span className="skills-name">React</span>
            </div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
            <div className="skills__bar skills__react"></div>
          </div>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fa-brands fa-node-js"></i>
              <span className="skills-name">Node.js</span>
            </div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
            <div className="skills__bar skills__nodejs"></div>
          </div>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fas fa-layer-group"></i>
              <span className="skills-name">Express</span>
            </div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
            <div className="skills__bar skills__express"></div>
          </div>
          <div className="skills__data">
            <div className="skills_names">
              <i className="fas fa-layer-group"></i>
              <span className="skills-name">MongoDB</span>
            </div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
            <div className="skills__bar skills__mongo"></div>
          </div>
        </div>
        <div>
          <img src={src} alt="work" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
