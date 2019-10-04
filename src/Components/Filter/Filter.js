import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Filter() {
    //Three select value menus
    // Set state to selected value
    const [state, setState] = useState()
    // const [offense,setOffense] = useState();
    // const [variable,setVariable]=useState();
    // const [stateAbbr,setStateAbbr]= useState();
const variable = 'count';
const offense = 'rape';
const stateAbbr = 'IA';
// const rapeToggle = () => {
//     return setOffense("rape")
// }
// const arsonToggle = () => {
//     return setOffense("arson")
// }
// const assaultToggle = () => {
//     return setOffense("assault")
// }

// useEffect(() => {
//     setVariable("count");
//     setOffense("arson");
//     setStateAbbr("IA");
    
// }, [])
const conditionalMap =() => {
    state.map(el => {
        return (
            <span>
            <p>${el.value}</p>
            <p> Instances of {offense} occured in </p>
            <p>{el.data_year}</p>
            </span>
        )
    })
}


    useEffect(() => {
axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${offense}/offender/states/${stateAbbr}/${variable}?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`)
.then((res) => {
    let data = (res.data.data);
    // let currentData = data.filter((cD) => {
    //     return cD.data_year == "2018" && cD.key == "Count";
    //   });
      let newData = data.map( nD => {
        return <p>{nD.value + " Instances of "+offense +" occured in the year " + nD.data_year+ " within the state "+stateAbbr}</p>
      });
    setState(newData)
    console.log("filter res.data", res.data.data)

}).catch((err) => {
    console.error(err)
})
// console.log("state",state)
    },[])
console.log(state,"state")

    return (
        <div >
<select id="Offense">
  <option value="Select a Crime">Select a crime</option>
  <option value="arson">Arson</option>
  <option value="rape">Rape</option>
  <option value="assault">Assault</option>
  <option value="burglary">Burglary</option>
  <option value="aggravated-assault">aggravated assault</option>
  <option value="robbery">Robbery</option>
  <option value="violent-crime">Violent-Crime</option>
  <option value="larceny">Larceny</option>
  <option value="homicide">Homicide</option>
  <option value="property-crime">Property-Crime</option>
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
