import React from 'react';


export default function FilterList() {
    return (
        <div>
            <div>
                <input type="checkbox" id="rape" name="rape" value="rape"/>
                <label for="rape">Rape</label>
            </div>
            <div>
                <input type="checkbox" id="assault" name="assault" value="assault"/>
                <label for="assault">Assault</label>
            </div>
            <div>
                <input type="checkbox" id="burglary" name="burglary" value="burglary"/>
                <label for="burglary">Burglary</label>
            </div>
            <div>
                <input type="checkbox" id="arson" name="arson" value="arson"/>
                <label for="arson">Arson</label>
            </div>
            <div>
                <input type="checkbox" id="robbery" name="robbery" value="robbery"/>
                <label for="robbery">Robbery</label>
            </div>
        </div>
    )
}