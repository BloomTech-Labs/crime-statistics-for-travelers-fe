import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Filter() {
    //Three select value menus
    // Set state to selected value
    const [state, setState] = useState()
    const [offense,setOffense] = useState();
    const [stateAbbr,setStateAbbr]= useState();
    
    function handleOffense(event) {
        setOffense(event.target.value )
    
    }
    
    function handleStateAbbr(event) {
      setStateAbbr( event.target.value )
      
    }
    console.log(offense);
    console.log(stateAbbr);
useEffect(() => {
    console.log(`${offense}`,"API");
    axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${offense}/offender/states/${stateAbbr}/COUNT?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`)
    .then((res) => {
        let data = (res.data.data);

        let currentData = data.filter((cD) => {
            return parseInt(cD.data_year) > 2010 && cD.key == "Count";
          });
        let newData = currentData.map( nD => {

            return <p>{nD.value + " Instances of "+offense +" occured in the year " + nD.data_year+ " within the state "+stateAbbr}</p>
        });
        setState(newData)
        console.log("filter res.data", newData)

    }).catch((err) => {
        console.error(err)
    })


// console.log("state",state)
    },[offense,stateAbbr])





    return (
        <div >
<select id="Offense" onChange={handleOffense} >
    <optgroup label="Offense" >
<<<<<<< HEAD
  <option>Select Crime</option>
=======

  <option>Select Crime</option>

>>>>>>> 697d5bd080b4b7508da908aeef77d10f4765c594
  <option value="arson" >Arson</option>
  <option value="rape">Rape</option>
  <option value="assault">Assault</option>
  <option value="burglary">Burglary</option>
  <option value="aggravated-assault">aggravated assault</option>
  <option value="robbery">Robbery</option>
  <option value="violent-crime">Violent-Crime</option>
  <option value="larceny">Larceny</option>
  <option value="homicide">Homicide</option>
  <option value="property-crime">Property-Crime</option>
  </optgroup>
</select>
<select id="StateAbbr" onChange={handleStateAbbr}>
    <optgroup label="State">
<<<<<<< HEAD
<option>Select State</option>
=======

<option>Select State</option>

>>>>>>> 697d5bd080b4b7508da908aeef77d10f4765c594
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>

</optgroup>
</select>
            <ul>{state}</ul>
            {/* <div>
            <option onClick={rapeToggle}>Rape</option>
            <option onClick={arsonToggle}>Arson</option>
            <option onClick={assaultToggle}>Assault</option>
            </div>
            <div>
                <option>poggers</option>
            </div> */}

        </div>
    )
}