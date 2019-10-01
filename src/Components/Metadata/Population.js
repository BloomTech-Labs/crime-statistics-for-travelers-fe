import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function Population() {
const [pop, setPop] = useState(
    {population:"325719178"}
);
    useEffect(() => {
    axios.get("population")
    .then((res) => {
    setPop(res.data)
    console.log(res.data)
    }).catch((err) => {
        console.log(err);
    })

    }, [])
    if(pop===undefined){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }else{
    return (
        <div>
            <h1>Total Population of The United States in 2017</h1>
            {pop.population}
        </div>
    )
}}
