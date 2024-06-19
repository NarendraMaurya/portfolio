import React from 'react';
import concetto from '../image/concetto.png';
import docapp from '../image/docApp.png';
import todo from '../image/todo.png';
const Project = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        <a style={{display:''}} href='https://concetto.in/' target='_blank' rel="noreferrer">
        <div className="work__img">
          <img src={concetto} alt="work" className='image' />
          <div class="overlay">
            <div class="text">
              <p>Concetto IIT(ISM) Dhanbad</p>
              <p className='text_description'>This is official website of concetto where you can see their events and registers</p></div>
          </div>
        </div>
        </a>
        <a style={{display:''}} href='http://doctor-appointment-system-uhl1.onrender.com/' target='_blank' rel="noreferrer">
          <div className="work__img">
          <img src={docapp} alt="work" />
          <div class="overlay">
            <div class="text">
              <p>Doc App</p>
              <p className='text_description'>This is web app where you can book appointments and doctor can see appointments</p>
            </div>
          </div>
        </div>
        </a>
        <a style={{display:''}} href='https://my-todo-app-pyfp.onrender.com/' target='_blank' rel="noreferrer">
        <div className="work__img">
          <img src={todo} alt="work" />
          <div class="overlay">
            <div class="text">
              <p>Todo List</p>
              <p className='text_description'>This is web app where you can make your plan of daily task and track progress</p>
            </div>
          </div>
        </div>
        </a>
        {/* <div className="work__img">
          <img src={src} alt="work" />
        </div>
        <div className="work__img">
          <img src={src} alt="work" />
        </div>
        <div className="work__img">
          <img src={src} alt="work" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;
