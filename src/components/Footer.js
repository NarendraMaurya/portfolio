import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Narendra Maurya</p>
      <div className="foot__menu">
          <ul >
            <li className="foot__item" ><a href="#home" className="foot__link">Home</a></li>
            <li className="foot__item" ><a href="#about" className="foot__link">About</a></li>
            <li className="foot__item" ><a href="#education" className="foot__link">Education</a></li>
            <li className="foot__item" ><a href="#skills" className="foot__link">Skills</a></li>
            <li className="foot__item" ><a href="#work" className="foot__link">Work</a></li>
          </ul>
        </div>
      <div className="footer__social">
        <a href="https://www.facebook.com/NarendraMaurya1413" target="_blank" className="footer__icon" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/narendra.maurya.nm/" target="_blank" className="footer__icon" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://x.com/Narendra1411431" target="_blank" className="footer__icon" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
      </div>
      <p>&#169; 2024 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
