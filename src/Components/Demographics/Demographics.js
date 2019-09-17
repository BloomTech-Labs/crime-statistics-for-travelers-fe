import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Demogrphics= props => {

    const [age, setAge] = useState({selectedOption:'18-24'})
    const [sex, setSex] = useState({selectedOption:'Male'})
    const [race, setRace] = useState({selectedOption:'White'})

    const ageHandler = e => {
        e.persist();
        setAge({
            selectedOption: e.target.value
        });
    }
    const sexHandler = e => {
        e.persist();
        setSex({
            selectedOption: e.target.value
        });
    }
    const raceHandler = e => {
        e.persist();
        setRace({
            selectedOption: e.target.value
        });
    }
    


    return (
        <div className="DemoForm">
            <div className="ageField">
                <h2>Age</h2>
                    <label>
                        <input type="radio" value="18-24" checked={age.selectedOption === '18-24'} onChange={ageHandler} />
                        18-24
                    </label>
                    <label>
                        <input type="radio" value="25-30" checked={age.selectedOption === '25-30'} onChange={ageHandler} />
                        25-30
                    </label>
                    <label>
                        <input type="radio" value="31-55" checked={age.selectedOption === '31-55'} onChange={ageHandler} />
                        31-55
                    </label>
                    <label>
                        <input type="radio" value="55 +" checked={age.selectedOption === '55 +'} onChange={ageHandler} />
                        55 +
                    </label>
            </div>
            <div className="sexField">
                <h2>Sex</h2>
                    <label>
                        <input type="radio" value="Male" checked={sex.selectedOption === 'Male'} onChange={sexHandler} />
                        Male
                    </label>
                    <label>
                        <input type="radio" value="Female" checked={sex.selectedOption === 'Female'} onChange={sexHandler} />
                        Female
                    </label>
                    <label>
                        <input type="radio" value="Other" checked={sex.selectedOption === 'Other'} onChange={sexHandler} />
                        Other
                    </label>
            </div>
            <div className="raceField">
                <h2>Race</h2>
                    <lable>
                        <input type="radio" value="White" checked={race.selectedOption === 'White'} onChange={raceHandler} />
                        White
                    </lable>
                    <lable>
                        <input type="radio" value="Black" checked={race.selectedOption === 'Black'} onChange={raceHandler} />
                        Black
                    </lable>
                    <lable>
                        <input type="radio" value="Hispanic" checked={race.selectedOption === 'Hispanic'} onChange={raceHandler} />
                        Hispanic
                    </lable>
                    <lable>
                        <input type="radio" value="Asian" checked={race.selectedOption === 'Asian'} onChange={raceHandler} />
                        Asian
                    </lable>
            </div>
        </div>
    )
}

export default Demogrphics;
