import React from 'react';
import '../Contact/contact.css';

function Contact() {
    return(
        <>
        <header class="header">
         <ul class="main-nav">
             <li><a href="#">HOME</a></li>
             <li><a href="#">MAP</a></li>
             <li><a href="#">ABOUT THE DATA</a></li>
             <li><a href="#">WHO WE SERVE</a></li>
             <li className='login'><a href="#">LOGIN</a></li>
         </ul>
     </header>
     <div className='mainContent'>
         <div className='mainHeader'>
            We Want to Hear From You!
         </div>
         <div className='mainText'>
            Comments? Questions? Got ideas to make TravelSafe<br/> 
            better? We love hearing from our users! Please take a<br/> 
            moment to fill out the form below, and a member of<br/> 
            the TS team will get back ASAP. We respect your<br/> 
            privacy and will NOT share your data with anyone.
         </div>
     </div>
     <div className='mainForms'>
            <div className='nameForm'>
                Name
            </div>
            <div className='inputName'>
                <input type='text' size='110'></input>
            </div>
            <div className='phoneForm'>
                Phone
            </div>
            <div className='inputPhone'>
                <input type='text' size='110'></input>
            </div>
            <div className='titleForm'>
                Title
            </div>
            <div className='inputTitle'>
                <input type='text' size='110'></input>
            </div>
            <div className='emailForm'>
                Email
            </div>
            <div className='inputEmail'>
                <input type='text' size='110'></input>
            </div>
            <div className='blueForm'></div>
            <div className='inputContact'>
            <textarea rows="12" cols="109" placeholder="What Can We Do For You?" spellcheck="false"></textarea>
            </div>
            <button className='submitButton'>SUBMIT</button>
            <div className='spaceArea'></div>
    </div> 
</>
)
}

export default Contact;
