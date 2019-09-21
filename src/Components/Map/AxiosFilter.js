import React,{useState,useEffect} from 'react'
import Axios from 'axios';
export default function AxiosFilter() {
    const [cityCrime,setCityCrime] = useState();
    const [arson, setArson] = useState();
    const [violentCrime,setViolentCrime] = useState();
    const [homicide, setHomicide] = useState();
    const [rape, setRape] =useState();
    const [robbery,setRobbery] = useState();
    const [property, setProperty]=useState();
    const [aggroAssault,setAggroAssault] = useState();
    const [burglary,setBurglary] = useState();
//Crime
useEffect(() => {
Axios.get("cityCrimeRating")
.then(obj =>{
setCityCrime(obj.data)
}).catch(err => {
    console.log(err);
})
},[])

    return (
        <div>
            
        </div>
    )
}
