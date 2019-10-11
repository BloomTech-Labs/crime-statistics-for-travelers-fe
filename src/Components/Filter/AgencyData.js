import React,{useEffect,useState} from 'react'
import { Spinner } from "@chakra-ui/core"
import axios from 'axios';
import styled from 'styled-components';

const PrettyDiv = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 5px;
    margin: 10px auto;
    box-shadow: 11px 11px 12px -10px rgba(217,217,217,1);

`


export default function AgencyData() {

    const [state, setState] = useState()
    const [offense,setOffense] = useState();
    const [stateAbbr,setStateAbbr]= useState();
    const [since,setSince] = useState();
    const [until,setUntil] = useState();
    
    const handleSince = (event) => {
        setSince(parseInt(event.target.value))
        setState(undefined)
    } 
    const handleUntil = (event) => {
        setUntil(parseInt(event.target.value))
        setState(undefined)
    }

    function handleOffense(event) {
        setOffense(event.target.value )
        setState(undefined)
    }
    
    function handleStateAbbr(event) {
      setStateAbbr( event.target.value)
      setState(undefined)
    }
    console.log(offense);
    console.log(stateAbbr);
    useEffect(() => {
    
        //https://api.usa.gov/crime/fbi/sapi/api/summarized/state/${stateAbbr}/${offense}/${since}/${until}?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv
        axios.get(`https://api.usa.gov/crime/fbi/sapi/api/summarized/state/${stateAbbr}/${offense}/${since}/${until}?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`)
        .then((res) => {
            let data = (res.data.results);
            let actual = 0;
            data.forEach((x => {
                actual += x.actual
            }))
        const render = () => {
            return <PrettyDiv><p>{offense+" occured "+actual+" times within selected timeframe"}</p></PrettyDiv>
        }
        setState(render)
        }).catch((err) => {
            console.error(err)
        })


    // console.log("state",state)
        },[offense,stateAbbr,until,since])

if(offense === undefined && stateAbbr === undefined && until === undefined && since === undefined){
    return(
    <div >
        <select id="Offense" onChange={handleOffense} >
            <optgroup label="Offense" >
                <option>Select Crime</option>
                <option value="arson" >Arson</option>
                <option value="rape">Rape</option>
                <option value="motor-vehicle-theft">Vehicle Theft</option>
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
                <option>Select State</option>
                <option value="AL">Alabama</option>
                {/* <option value="AK">Alaska</option> */}
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                {/* <option value="CA">California</option> */}
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
                {/* <option value="NV">Nevada</option> */}
                <option value="NH">New Hampshire</option>
                {/* <option value="NJ">New Jersey</option> */}
                <option value="NM">New Mexico</option>
                {/* <option value="NY">New York</option> */}
                {/* <option value="NC">North Carolina</option> */}
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
                {/* <option value="WY">Wyoming</option> */}

            </optgroup>
        </select>

        <select id="since" onChange={handleSince}>
            <optgroup label="Since">
                <option>Select Start Date</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
            </optgroup>
        </select>


        <select id="until" onChange={handleUntil}>
            <optgroup label="Until">
                <option>Select End Date</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
            </optgroup>
        </select>
    </div>
            )
}else if(offense !== undefined  && stateAbbr !== undefined && until !== undefined && since !== undefined && state === undefined){
    return(
    <div >
        <select id="Offense" onChange={handleOffense} >
            <optgroup label="Offense" >
                <option value="null">Select Crime</option> 
                <option value="arson" >Arson</option>
                <option value="rape">Rape</option>
                <option value="motor-vehicle-theft">Vehicle Theft</option>
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
                <option value="null">Select State</option>
                <option value="AL">Alabama</option>
                {/* <option value="AK">Alaska</option> */}
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                {/* <option value="CA">California</option> */}
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
                {/* <option value="NV">Nevada</option> */}
                <option value="NH">New Hampshire</option>
                {/* <option value="NJ">New Jersey</option> */}
                <option value="NM">New Mexico</option>
                {/* <option value="NY">New York</option> */}
                {/* <option value="NC">North Carolina</option> */}
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
                {/* <option value="WY">Wyoming</option> */}
            </optgroup>
        </select>

        <select id="since" onChange={handleSince}>
            <optgroup label="Since">
                <option value="null">Select Start Date</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
            </optgroup>
        </select>


        <select id="until" onChange={handleUntil}>
            <optgroup label="Until">
                <option value="null">Select End Date</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
            </optgroup>
        </select>
        <div>
            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />
        </div>
    </div>
    )

}else{
    return (
    <div >
        <select id="Offense" onChange={handleOffense} >
            <optgroup label="Offense" >
                <option>Select Crime</option>
                <option value="arson" >Arson</option>
                <option value="rape">Rape</option>
                <option value="motor-vehicle-theft">Vehicle Theft</option>
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
                <option>Select State</option>
                <option value="AL">Alabama</option>
                {/* <option value="AK">Alaska</option> */}
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                {/* <option value="CA">California</option> */}
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
                {/* <option value="NV">Nevada</option> */}
                <option value="NH">New Hampshire</option>
                {/* <option value="NJ">New Jersey</option> */}
                <option value="NM">New Mexico</option>
                {/* <option value="NY">New York</option> */}
                {/* <option value="NC">North Carolina</option> */}
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
                {/* <option value="WY">Wyoming</option> */}

            </optgroup>
        </select>

        <select id="since" onChange={handleSince}>
            <optgroup label="Since">
                <option>Select Start Date</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
            </optgroup>
        </select>


        <select id="until" onChange={handleUntil}>
            <optgroup label="Until">
                <option>Select End Date</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
            </optgroup>
        </select>

        <ul>{state}</ul>


    </div>
    )
}
}