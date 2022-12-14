import React from 'react'
import './Project.css'
import PROJ1 from '../../Assets/clock.jpg'
import PROJ2 from '../../Assets/multil.jpg'
import PROJ3 from '../../Assets/AgriculturalSolutionsApp.jpg'
import PROJ4 from '../../Assets/Startupweb.jpg'
import PROJ5 from '../../Assets/Weather_Dome.jpg'
import PROJ6 from '../../Assets/bmicalculatorapp.jpg'
import PROJ7 from '../../Assets/quiz-app-12th.jpg'
import PROJ8 from '../../Assets/gitfetch.jpg'
const Project =()=> {
  return (
    <>
    <br/>
    <br/>
    <div className='Project' id='Project'>
      <br/>
      <br/>
      <br/>
      
       <h1> MY PROJECTS </h1>
       
       <h3>Source Code and Description are present in <a href="https://github.com/shashankgurunaga1"><b>Github</b></a></h3>
      <br/>
      
      <p align='center'>
    <div className='card1' >
        
       <a href="https://github.com/shashankgurunaga1/quiz-app-12th" rel="nofollow">
  <img src={PROJ7} alt="Quiz application developed using Python,Python(tkinter),MySQL" />
    </a>
       </div>
       <div className='card1' >
        
       <a href="#" rel="nofollow">
  <img src={PROJ2} alt="News Source portal" />
    </a>
       </div>
       <div className='card1' >
       <a href="#" rel="nofollow">
  <img src={PROJ4} alt="Website for startup made using Flask and MySQL" />
    </a>
    </div>
       <div className='card1' >
       <a href="https://shashankgurunaga1.github.io/WeatherDome/" rel="nofollow">
  <img src={PROJ5} alt="Weatherdome-Website for checking the weather of a city" />
    </a>
       </div>
<div className='card1' >
       <a href="https://git-fetch-shashankgurunaga.vercel.app/" rel="nofollow">
  <img src={PROJ8} alt="GitFetch website for fetching github repositories for entered username" />
    </a>
       </div>
       <div className='card1' >
       <a href="https://analog-clock-shashankgurunaga.vercel.app/" rel="nofollow">
  <img src={PROJ1} alt="Clock developed using JavaScript and CSS" />
    </a>
       </div>
       <div className='card1' >
       <a href="https://github.com/shashankgurunaga1/AgriculturalApp" rel="nofollow">
  <img src={PROJ3} alt="E-commerce App for Agricultural Solutions" />
    </a>
       </div>
       <div className='card1' >
       <a href="https://github.com/shashankgurunaga1/BMICalculatorApp" rel="nofollow">
  <img src={PROJ6} alt="BMI Calculator App" />
    </a>
       </div>
       </p>
    </div>
    </>
  )
}
export default Project;
