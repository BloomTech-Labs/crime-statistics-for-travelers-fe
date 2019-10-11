import React from 'react'

export default function Legend() {
    return (
        <div>
                <div className="map-overlay" id="legend">
                    <div><span class="legend-key" 
                style="background-color: #79c8e6;"></span>
                    <span>0-3000</span></div>
                    <div><span class="legend-key" 
                    style="background-color:#5b7080"></span>
                    <span>3000-3750</span></div><div><span class="legend-key" 
                    style="background-color:#5b7080">
                    </span><span></span></div>
                    <div><span class="legend-key" 
                    style="background-color:#1163b6;"></span>
                    <span>3750-5000</span></div>
                    <div><span class="legend-key" 
                    style="background-color:#3e6284;"></span>
                    <span>5000-6250</span></div>
                    <div><span class="legend-key" 
                    style="background-color: #3e6284;"></span>
                    <span>6250-7500</span></div><div><span class="legend-key" 
                    style="#1d2e3e;"></span>
                    <span>7500-8500</span></div><div><span class="legend-key" 
                    style="background-color: 0d0d0d;"></span>
                    <span>8500-10000+</span></div></div>
        </div>
    )
}
