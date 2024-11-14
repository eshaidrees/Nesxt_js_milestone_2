import React from 'react';
import Image from 'next/image';
import "../../styles/projects.css"

export default function About (){
  return (
    <div className='containers'>
        <title>Projects</title>
        <h1 className="heading">My Projects</h1>
    <div className="projects">
        <div className="card">
         <h3 className="project-title">Static Interactive Resume</h3>
         <Image 
            src="/img/project-1.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           /> 
            <button className="button">
               <a href="https://hachathone-milestone-1-2.vercel.app/" target="_blank" rel="noopener noreferrer">
               Click to View 
               </a>
            </button>
        </div>
        
        <div className="card">
        <h3 className="project-title">Dynamic Resume</h3>
        <Image 
            src="/img/project-2.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           />
            <button className="button">
               <a href="https://hackathon-milestone-5-omega-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
               Click to View.
               </a>
            </button>
        </div>

        <div className="card">
        <h3 className="project-title">Count Down Timer </h3>
        <Image 
            src="/img/project-4.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           />
            <button className="button">
               <a href="https://github.com/eshaidrees/count-down-timer.git" target="_blank" rel="noopener noreferrer">
               Click to View
               </a>
            </button>           
        </div>
        <div className="card">
        <h3 className="project-title">Wheather Widget App </h3>
        <Image 
            src="/img/project-3.png" 
            alt="Profile Picture" 
            width={350}  
            height={350} 
           />
            <button className="button">
               <a href="https://github.com/eshaidrees/weather-widget-app.git" target="_blank" rel="noopener noreferrer">
               Click to View
               </a>
            </button>           
        </div>
        </div>
        </div>


  )   

}
