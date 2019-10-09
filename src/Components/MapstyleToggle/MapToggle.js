import React from 'react'

export default function MapToggle() {
    function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
        }
         
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
        }


    return (
        <div>
<input id='streets-v11' type='radio' name='rtoggle' value='streets' checked='checked'/>
<label for='streets'>streets</label>
<input id='light-v10' type='radio' name='rtoggle' value='light'/>
<label for='light'>light</label>
<input id='dark-v10' type='radio' name='rtoggle' value='dark'/>
<label for='dark'>dark</label>
<input id='outdoors-v11' type='radio' name='rtoggle' value='outdoors'/>
<label for='outdoors'>outdoors</label>
<input id='satellite-v9' type='radio' name='rtoggle' value='satellite'/>
<label for='satellite'>satellite</label>
        </div>
    )
}
