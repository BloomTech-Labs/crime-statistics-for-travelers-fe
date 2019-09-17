import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Demogrphics= props => {

    const [state, setState] = useState({selectedOption:'18-24'})

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;

        setState({
            selectedOption: e.target.value
        });
    }
    


    return (
        <div className="DemoForm">
            <div className="ageField">
                <h2>Age</h2>
                    <label>
                        <input type="radio" value="18-24" checked={state.selectedOption === '18-24'} onChange={changeHandler} />
                        18-24
                    </label>
                    <label>
                        <input type="radio" value="25-30" checked={state.selectedOption === '25-30'} onChange={changeHandler} />
                        25-30
                    </label>
                    <label>
                        <input type="radio" value="31-55" checked={state.selectedOption === '31-55'} onChange={changeHandler} />
                        31-55
                    </label>
                    <label>
                        <input type="radio" value="55 +" checked={state.selectedOption === '55 +'} onChange={changeHandler} />
                        55 +
                    </label>
            </div>
        </div>
    )
}

export default Demogrphics;
