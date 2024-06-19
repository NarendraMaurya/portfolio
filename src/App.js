import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';

function App() {


  useEffect(() => {
    // SCROLL REVEAL ANIMATION
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    // SCROLL HOME
    sr.reveal('.home__title', {});
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });

    // SCROLL ABOUT
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', { delay: 200 });
    sr.reveal('.about__text', { delay: 400 });

    //Education 
    sr.reveal('.section-title', {});
    sr.reveal('timeline', { delay: 100 });
    sr.reveal('.container left', { delay: 200 });
    sr.reveal('.container right', { delay: 200 });
    sr.reveal('.content', { delay: 400 });

    // SCROLL SKILLS
    sr.reveal('.skills__subtitle', {});
    sr.reveal('.skills__text', { delay: 200 });
    sr.reveal('.skills__data', { interval: 200 });
    sr.reveal('.skills__img', { delay: 400 });

    // SCROLL WORK
    sr.reveal('.work__img', { interval: 200 });


  }, []);

  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Education />
        <Skills />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
