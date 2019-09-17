import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Demogrphics= props => {

    const [age, setAge] = useState({selectedOption:'18-24'})
    const [sex, setSex] = useState({selectedOption:'Male'})

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;

        setAge({
            selectedOption: e.target.value
        });
    }
    


    return (
        <div className="DemoForm">
            <div className="ageField">
                <h2>Age</h2>
                    <label>
                        <input type="radio" value="18-24" checked={age.selectedOption === '18-24'} onChange={changeHandler} />
                        18-24
                    </label>
                    <label>
                        <input type="radio" value="25-30" checked={age.selectedOption === '25-30'} onChange={changeHandler} />
                        25-30
                    </label>
                    <label>
                        <input type="radio" value="31-55" checked={age.selectedOption === '31-55'} onChange={changeHandler} />
                        31-55
                    </label>
                    <label>
                        <input type="radio" value="55 +" checked={age.selectedOption === '55 +'} onChange={changeHandler} />
                        55 +
                    </label>
            </div>
            <div className="sexField">
                <h2>Sex</h2>
                    <label>
                        <input type="radio" value="Male" checked={sex.selectedOption === 'Male'} onChange={changeHandler} />
                        Male
                    </label>
                    <label>
                        <input type="radio" value="Female" checked={sex.selectedOption === 'Female'} onChange={changeHandler} />
                        Female
                    </label>
                    <label>
                        <input type="radio" value="Other" checked={sex.selectedOption === 'Other'} onChange={changeHandler} />
                        Other
                    </label>
            </div>
        </div>
    )
}

export default Demogrphics;
