import React from "react";

import '../css/index.css'
import face from '../Assets/Img/Zack_Headshot 2.jpg'
import PythonLogo from "./Logos/PythonLogo";
import Javascript_logo from "./Logos/Javascript_logo";
import React_logo from "./Logos/React_logo";


const About = () => (
    <div className="group">
        <div className="container">
        <div className="main-about">
        </div>
        <div className="body-about">
            <body>
                <h1 className="header-about">About Me</h1>
                <img src={face} className="about-image" alt="Zack Coursen's Face"></img>
                <p className="statement"> I am a Rhode Island College graduate, I recieved my Computer Science Degree in 2012 Working for AGMednet building custom forms for customers and custom reports in postgresql, building custom projects for work in python. 
                On the side I focus on learning React, this website was built in React with React Router. Learning Unity and C#, and using photoshop.</p>
                <PythonLogo className="python_logo" />
                <Javascript_logo className="javascript_logo" />
                <React_logo className="react_logo" />
            </body>
        </div>
            <footer className="about-footer">
                <h6>Made by Zachary Coursen</h6>
            </footer>
        </div>
    </div>

);

export default About;