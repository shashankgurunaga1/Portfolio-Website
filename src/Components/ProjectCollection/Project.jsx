import React from 'react'
import './Project.css'
import PROJ1 from '../../Assets/clock.jpg'
import PROJ2 from '../../Assets/multil.jpg'
import PROJ3 from '../../Assets/AgriculturalSolutionsApp.jpg'
import PROJ4 from '../../Assets/Startupweb.jpg'
import PROJ5 from '../../Assets/weatherdome.jpg'
import PROJ6 from '../../Assets/bmicalculatorapp.jpg'
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
       
       <h3>Source Code and Description is present in <b>Github</b></h3>
      <br/>
      
      <p align='center'>
       <div className='card1' >
        
       <a href="#" rel="nofollow">
  <img src={PROJ2} alt="News Source portal" />
    </a>
       </div>
       <div className='card1' >
       <a href="http://65.0.104.120:8080/" rel="nofollow">
  <img src={PROJ4} alt="Website for startup made using Flask and MySQL" />
    </a>
    </div>
       <div className='card1' >
       <a href="https://shashankgurunaga1.github.io/weatherdome/" rel="nofollow">
  <img src={PROJ5} alt="Weatherdome-Website for checking the weather of a city" />
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
