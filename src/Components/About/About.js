import React from "react";
import '../About/about.css';

function About() {
    return(
        <header class="header">
            <ul class="main-nav">
                <li><a href="#">MAP</a></li>
                <li><a href="#">ABOUT THE DATA</a></li>
                <li><a href="#">WHO WE SERVE</a></li>
                <li className='login'><a href="#">LOGIN</a></li>
            </ul>
        </header>
    )
}

export default About;
