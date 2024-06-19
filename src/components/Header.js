import React,{useEffect} from 'react';

const Header = () => {

  useEffect(() => {
    // SHOW MENU
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }
    };
    showMenu('nav-toggle', 'nav-menu');

    // ACTIVE AND REMOVE MENU
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));

  }, []);


  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Narendra Maurya</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#education" className="nav__link">Education</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
