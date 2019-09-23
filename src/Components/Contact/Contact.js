import React from 'react';
import '../Contact/contact.css';
import axios from 'axios';

class Contact extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          name : '',
          phone: '',
          title: '',
          email: '',
          text : '',
          requestsuccess: 'false'
      }  
    }

    handleSubmit = () => {
    //console.log('handleSubmit fired!')
      axios
        .post('https://reqres.in/api/users', {name: this.state.name, phone: this.state.phone, title: this.state.title, email: this.state.email, text: this.state.text })
        .then(res => {
          this.setState({name: res.data.name, phone: res.data.phone, title: res.data.title, email: res.data.email,  text: res.data.text })
          console.log(res);
          this.setState({requestsuccess: true})
          this.setState({name: '', phone: '', title: '', email: '',  text: '' })
          alert("Thanks for contacting us!");
        })
        .catch(err => console.log(err));
    }

    handleChanges = e => {
        this.setState( { [e.target.name] : e.target.value } )
    }


render() {
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
                <input type='text' onChange={this.handleChanges} value={this.state.name} name='name' size='110' ></input>
            </div>
            <div className='phoneForm'>
                Phone
            </div>
            <div className='inputPhone'>
                <input type='text' onChange={this.handleChanges} value={this.state.phone} name='phone' size='110'></input>
            </div>
            <div className='titleForm'>
                Title
            </div>
            <div className='inputTitle'>
                <input type='text' onChange={this.handleChanges} value={this.state.title} name='title' size='110'></input>
            </div>
            <div className='emailForm'>
                Email
            </div>
            <div className='inputEmail'>
                <input type='text' onChange={this.handleChanges} value={this.state.email} name='email' size='110'></input>
            </div>
            <div className='blueForm'></div>
            <div className='inputContact'>
            <textarea onChange={this.handleChanges} value={this.state.text} name="text"  rows="12" cols="109" placeholder="What Can We Do For You?"></textarea>
            </div>
            <button onClick={this.handleSubmit} className='submitButton'>SUBMIT</button>
            <div className='spaceArea'></div>
    </div> 
</>
)
 }
}

export default Contact;
