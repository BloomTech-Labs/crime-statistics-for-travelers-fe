import React, {useState} from 'react';
import CheckBox from "./checkbox";


export default function FilterList() {

    const [filter, setFilter] = useState([{id:1, value: "Rape", isChecked: false},
    {id:2, value: "Assault", isChecked: false},
    {id:3, value: "Burglary", isChecked: false},
    {id:4, value: "Arson", isChecked: false},
    {id:5, value: "Robbery", isChecked: false}])

    const handleAllChecks = (event) => {
        filter.forEach(filters => filters.isChecked = event.target.checked)
        setFilter({filter:filter})
    }
    
    const handleChecks = (event) => {
        filter.forEach(filters => {
            if(filters.value === event.target.value)
            filters.isChecked = event.target.checked
        })
        setFilter({filter:filter})
    }
    const filterMap = () => {
        {filter.map((filters) => {
            return(<CheckBox{...filters} />)
        })}
    }
    
    return (
        <div>
            <input type="checkbox" value="checkedall" /> Check / Uncheck All
            <ul>
            {filterMap}
            </ul>
        </div>
    )
}