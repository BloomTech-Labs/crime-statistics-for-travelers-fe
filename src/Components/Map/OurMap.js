import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl';
import dotenv from 'dotenv';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
// import 'mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.1/mapbox-gl-geocoder.css';
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');


//Public mapbox token used in api documentation. This key is available to everyone.
mapboxgl.accessToken ='pk.eyJ1IjoiYnNvZ2hpZ2lhbiIsImEiOiJjazBhOTUxam4wMDNtM2RvNXJzbjQ5aGV6In0.eL8NJ0-ikx_5Dl49994bGw';

// const styledMap = styled.div`
//   @media(max-width: 600px){
//     border: 5px dashed red;
//   }

// `

class OurMap extends Component {
    constructor(props) {
        super(props);
        //Within state define your map center
        this.state = {
          lng: -96,
          lat: 37,
          zoom: 3.5
        };
      }
    //Setting bounds in our mount allows our map to exlusively show only the united states.
      componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const bounds = [
            [-170, 9], // Southwest coordinates
            [-24, 75] 
        ]

        //Generating our map======================================================================
        const map = new mapboxgl.Map({
          container: this.mapContainer,
         style:'mapbox://styles/bsoghigian/ck0pnu0fmb4i41co6azcmgrn8/draft',//Dynamic Style URL for our map style
          center: [lng, lat],//Center of where the mapbox map 
          zoom:zoom,//State value that allows you to set a default application zoom.
          maxBounds: bounds//it takes the SW coordinates and the NE coorinates and sets teh map in place
        });

        //GeoLocation =========================================================================================
        // map.addControl(new MapboxGeocoder({
        //     accessToken: mapboxgl.accessToken,//Passes in public token to authorize geolocation
        //     mapboxgl: mapboxgl
        //     }));
        var geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
          });
          document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
       //Adding Overlay=========================================================================
       map.on('load', function() {
        // the rest of the code will go in here
      });
      map.on('mousemove', function(e) {
        var states = map.queryRenderedFeatures(e.point, {
          layers: ['statedata']
        });
      
        if (states.length > 0) {
          document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' + states[0].properties.density + '</strong> Crime Rate per 100k</em></p>';
        } else {
          document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
        }
      });
      const onLoad = () => {
var layers = ['0-10', '10-50', '50-100', '100-250', '250-499', '499-1000'];
var colors = ['#d5f26d','#a7bf50','#738c3f','#495931','2c4b0c','#0c0c0c'];
      }

      map.on(onLoad, function() {
        var layers = ['0-10', '10-50', '50-100', '100-250', '250-499', '499-1000'];
        var colors = ['#d5f26d','#a7bf50','#738c3f','#495931','2c4b0c','#0c0c0c'];
        // the rest of the code will go in here
        for (let i = 0; i < layers.length; i++) {
          var layer = layers[i];
          var color = colors[i];
          var item = document.createElement('div');
          var key = document.createElement('span');
          key.className = 'legend-key';
          key.style.backgroundColor = color;
        
          var value = document.createElement('span');
          value.innerHTML = layer;
          item.appendChild(key);
          item.appendChild(value);
          // legend.appendChild(item);
        }
      });



        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl(), "bottom-left");


        map.on('move', () => {
          const { lng, lat } = map.getCenter();
    
          this.setState({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
          });
        });
      }
    
      render() {
        const { lng, lat, zoom } = this.state;//Deconstucting your state object.
    
    return (
      <div>
        <div>
        {/* <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold"> */}
          {/* <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div> */}
        </div>
       
        
        <div ref={el => this.mapContainer = el}
        //  className="absolute top right left bottom"
          id="map" className='map'/>
          <div id='geocoder' class='geocoder'></div>
        <div className='map-overlay' id='features'><h2>State Crime Data</h2><div id='pd'><p>Hover over a state!</p></div></div>
        <div className='map-overlay' id='legend'></div>
      </div>
    );
  }
}

export default OurMap; 