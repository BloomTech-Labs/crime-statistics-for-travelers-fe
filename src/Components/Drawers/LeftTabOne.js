import React, {useState} from 'react';
import CheckBox from "./checkbox";


export default function FilterList() {

    const [filter, setFilter] = useState([{id:1, value: "Rape", isChecked: false},
    {id:2, value: "Assault", isChecked: false},
    {id:3, value: "Burglary", isChecked: false},
    {id:4, value: "Arson", isChecked: false},
    {id:5, value: "Robbery", isChecked: false}])

    const handleAllChecks = event => {
        const newFilter = filter.map(({ id, value, isChecked }) => ({
            id,
            value,
            isChecked: event.target.checked
        }));
        setFilter(newFilter)
        console.log("setFilter", filter);
    };
    
    const handleChecks = (event, currentId) => {
        const newFilter = filter.map(({ id, value, isChecked }) => ({
            id,
            value,
            isChecked: id === currentId ? event.target.checked : isChecked
        }));
        setFilter(newFilter);
    };

    // let filtered = () => {
    //     filter.map((filters) => {
    //         console.log(filters);
    //         return(<CheckBox handleChecks={handleChecks} {...filters}  />)
    //     })
    // }

    
    return (
        <div>
            <input type="checkbox" onClick={handleAllChecks} value="checkedall" /> Check / Uncheck All
            <ul>
                {
                    filter.map(currentFilter => {
                    console.log(currentFilter);
                    return(<CheckBox key={currentFilter.id} handleChecks={e => handleChecks(e, currentFilter.id)} {...currentFilter}  />)
                })
                }
            </ul>
        </div>
    )
}