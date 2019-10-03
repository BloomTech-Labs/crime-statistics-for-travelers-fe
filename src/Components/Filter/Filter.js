import React,{useEffect,useState} from 'react'
import axiosWithAuth from '../../Utillities/axioswithauth';

export default function Filter() {
    const [state, setState] = useState();
const offense;
const variable;
const stateAbbr;
    useEffect(() => {
axios.get(`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${offense}/offender/states/${stateAbbr}/${variable}?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`)
.then((res) => {
    setState(res.data)
}).catch((err) => {
    console.error(err)
})
    },[])
    return (
        <div>
            
        </div>
    )
}
