import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function TestGet() {


        
    const [state, setstate] = useState([])
    // {
    //     "incident_count" : 481,
    //     "offense_count" : 498,
    //     "data_year" : 1997
    //   }
    // const listItems = modelData.map((el) =>
    // <li key={el.crime}>{el.crime}</li>
      
    // );
    useEffect(() => {
axios.get("https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/rape/offense/states/IA/COUNT?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")

.then((res) => {
    setstate(res.data[1])
    console.log(res,"res")
    console.log(res.data,"res.data")
})
.catch((err) => {
    console.error(err)
})
    }, [])
const rapeCount = () => {
    state.map((el) => {
        return(<li>{el.offense_count}</li>)
    })}

    return (
        <div>
            {rapeCount}
        </div>
    )
}
