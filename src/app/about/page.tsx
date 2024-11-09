import Image from "next/image";
import React from "react";
import "../../styles/about.css"
export default function About (){
  return (
       <div className="about-content">
          <title className="title">About</title>
           <div className="about-left-container">
             <Image 
             className="profile-picture" 
             src="/img/image_2.png" 
             alt="Profile Picture" 
             width={250}  
             height={250} 
             />
           </div>
           <div className="about-right-container">
             <h1>About Me</h1>
             <p>I&apos;m an intermediate-level student. I recently completed a few steps in learning HTML, CSS, TypeScript, and JavaScript. Currently, I&apos;m learning Next.js and am on the way to exploring Artificial Intelligence.</p>
           </div> 
        </div>

  );
};


