import React from "react";
import '../About/about.css';
import map from '../../assets/web/about/map.png'
import travelglobe from '../../assets/web/about/travelglobe.png';

function About() {
    return(
        <>
        <header class="header">
            <ul class="main-nav">
                <li><a href="#">MAP</a></li>
                <li><a href="#">ABOUT THE DATA</a></li>
                <li><a href="#">WHO WE SERVE</a></li>
                <li className='login'><a href="#">LOGIN</a></li>
            </ul>
        </header>
        <div className='mainMap'>
        <div className='image'>
            <img width={1500} height={500} alt="" src={map} /> 
        </div>
            <div className='search'>
                <div className='searchText'>
                    Start Your Search
                </div>
                <input type='text' size="50" placeholder='Zip code'></input>
            </div>
        </div>
        <div className='middleContent'>
            <div className='middleText'>
                Making it Safe to Go<br/>
                from One Place to <br/>Another 
            </div>
            <div className='middleText1'>
                Travel safe makes it convenient to learn about crime in the<br/> places you're headed to.
            </div>
            <div className='travelGlobe'>
                <img alt="" src={travelglobe} /> 
            </div>
        </div>
        </>
    )
}

export default About;
