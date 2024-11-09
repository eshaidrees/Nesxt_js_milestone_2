import Image from "next/image";
import React from "react";
import "../../styles/home.css"

export default function Home (){
  return (
     <div className="home-content">
        <title className="title">Home</title> 
        <div className="home-left-container">
           <h1>Hi,</h1>
           <h1 className="typing">I&apos;m Esha!</h1>
           <p>  Welcome to my portfolio! I&apos;m an intermediate student. I recently completed a few steps in learning HTML, CSS, TypeScript, and JavaScript. Take a look around to see my projects and learn more about my work.</p>
       </div>
        <div className="home-right-container">
           <Image 
             className="profile-picture" 
             src="/img/image_2.png" 
             alt="Profile Picture" 
             width={250}  
             height={250} 
            />
        </div>
  </div>
  );
};
