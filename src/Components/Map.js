import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
// import 'mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.1/mapbox-gl-geocoder.css';
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');



mapboxgl.accessToken = 'pk.eyJ1IjoiYnNvZ2hpZ2lhbiIsImEiOiJjazBhOTUxam4wMDNtM2RvNXJzbjQ5aGV6In0.eL8NJ0-ikx_5Dl49994bGw';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lng: 5,
          lat: 34,
          zoom: 1.5
        };
      }
    
      componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const bounds = [
            [-170, 9], // Southwest coordinates
[-24, 75] 
        ]

        
        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/bsoghigian/ck0eubu3v0wzj1cp3eu3khs2e',
          center: [lng, lat],
          zoom:zoom,
          maxBounds: bounds
        });
        map.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            }));
    
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
        const { lng, lat, zoom } = this.state;
    
        return (
          <div>
            <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
              <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
            </div>
            <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
          </div>
        );
      }
    }

export default Map;