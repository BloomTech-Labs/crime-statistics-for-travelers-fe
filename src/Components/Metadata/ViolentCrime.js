import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function ViolentCrime() {
    const [violent,SetViolent] = useState(
{violentrate:"1283220"}
    )
    useEffect(() => {
axios.get("violentendpoint")
.then((res) => {
    SetViolent(res.data)
    console.log(res.data)
})
    }, [])
    
    return (
        <div>
            {violent.violentrate}
        </div>
    )
}
