import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaDice } from "react-icons/fa";
import { IconButton } from "@chakra-ui/core";
import RightDrawer from "../Drawers/RightDrawer";
import LeftDrawer from "../Drawers/LeftDrawer";
import image from "./legend.png";
// import 'mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.1/mapbox-gl-geocoder.css';
var MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");

//Public mapbox token used in api documentation. This key is available to everyone.
mapboxgl.accessToken =
  "pk.eyJ1IjoiYnNvZ2hpZ2lhbiIsImEiOiJjazBhOTUxam4wMDNtM2RvNXJzbjQ5aGV6In0.eL8NJ0-ikx_5Dl49994bGw";

class OurMap extends Component {
  constructor(props) {
    super(props);
    // Checks whether location is saved, if yes -- sets the state to the user's location
    if (localStorage.getItem("myLocation") !== null) {
      //console.log(localStorage.getItem("myLocation"));
      let location = localStorage.getItem("myLocation").split(",");
      //console.log("location", location);
      this.state = {
        lng: location[0],
        lat: location[1],
        zoom: 9
      };
    } else {
      //Within state define your map center
      this.state = {
        lng: -96,
        lat: 40,
        zoom: 3.5
      };
    }
  }

  //Setting bounds in our mount allows our map to exclusively show only the united states.
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const bounds = [
      [-170, 9], // Southwest coordinates
      [-24, 75]
    ];

    //Generating our map======================================================================
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/bsoghigian/ck0pnu0fmb4i41co6azcmgrn8", //Dynamic Style URL for our map style
      center: [lng, lat], //Center of where the mapbox map
      zoom: zoom, //State value that allows you to set a default application zoom.
      maxBounds: bounds //it takes the SW coordinates and the NE coordinates and sets teh map in place
    });
    // Calls flyTo function which smoothly interpolates between locations.
    this.handleClick = () => {
      map.flyTo({
        center: [
          -96 + (Math.random() - 0.5) * 10,
          40 + (Math.random() - 0.5) * 10
        ],
        zoom: 9
      });
    };
    //URL SWAPPER FUNCTIONS====================================================================
    var layerList = document.getElementById("menu");
    var inputs = layerList.getElementsByTagName("input");
    function switchLayer(layer) {
      var layerId = layer.target.id;
      map.setStyle("mapbox://styles/bsoghigian/" + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }
  
 
    //finds users current location
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
    // Saves and flies to user's location
    const current = () => {
      if (localStorage.getItem("myLocation") === null) {
        if (window.confirm("Do you want to save your current location?")) {
          navigator.geolocation.getCurrentPosition(position => {
            //console.log("navigator", position);
            localStorage.setItem(
              "myLocation",
              position.coords.longitude + "," + position.coords.latitude
            );
            map.flyTo({
              center: [position.coords.longitude, position.coords.latitude],
              zoom: 16
            });
          });
        } else {
        }
      }
    };
    // Waits 5 seconds to display popup message
    setTimeout(current, 5000);

    //GeoLocation =========================================================================================
    // map.addControl(new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,//Passes in public token to authorize geolocation
    //     mapboxgl: mapboxgl
    //     }));
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      countries: "us"
    });
    document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
    //Adding Overlay=========================================================================
    map.on("load", function() {
      // the rest of the code will go in here
    });
    map.on("mousemove", function(e) {
      var states = map.queryRenderedFeatures(e.point, {
        layers: ["statedata"]
      });

      if (states.length > 0) {
        document.getElementById("pd").innerHTML =
          "<h3><strong>" +
          states[0].properties.name +
          "</strong></h3><p><strong><em>" +
          states[0].properties.density +
          "</strong> Crime Rate per 100k</em></p>";
      } else {
        document.getElementById("pd").innerHTML = "<p>Hover over a state!</p>";
      }
    });

    //=======================================================================================================
    //Adding Icons to Popular Hotspots
    map.on("load", function() {
      // Add a symbol layer.
      map.addLayer({
        id: "symbols",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [
                    -118.34033203125,
                    -34.34033203125
                    //-118 34
                  ]
                }
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [-115.34033203125, -36.34033203125]
                }
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [-87.34033203125, 41.01647949196029245]
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "rocket-15"
        }
      });

      // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
      map.on("click", "symbols", function(e) {
        map.flyTo({ center: e.features[0].geometry.coordinates });
      });

      // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
      map.on("mouseenter", "symbols", function() {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "symbols", function() {
        map.getCanvas().style.cursor = "";
      });
    });
    //===========================================================================================================

    // Add zoom and rotation controls to the map.
    // const zoomControl = map.addControl(new mapboxgl.NavigationControl(), "top-left");
    // // document.getElementById('zoomControl').appendChild(zoomControl);

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    // const { lng, lat, zoom } = this.state;//Deconstucting your state object.

    return (
      <div>
        {/* <button onClick={this.current} className="current-location">
          Current Location
        </button> */}
        <div className="left-drawer">
          <LeftDrawer />
        </div>
        <div className="right-drawer">
          <RightDrawer />
        </div>
        {/* <div className="bottom-drawer">
          <BottomDrawer/>
        </div> */}
        <div ref={el => (this.mapContainer = el)} id="map" className="map" />
        <div id="geocoder" className="geocoder"></div>
        <div id="zoomControl" className="zoomControl"></div>
        <div id="menu">
          <input
            id="ck0pnu0fmb4i41co6azcmgrn8"
            type="radio"
            name="rtoggle"
            value="streets"
            checked="checked"
          />
          <label for="streets">Data Overlay</label>
          <input
            id="ck1k7n5b01evx1cpge8vpwyzl"
            type="radio"
            name="rtoggle"
            value="light"
          />
          <label for="light">Moonlight</label>
          <input
            id="ck1jl2tx525oz1cn3bstgci37"
            type="radio"
            name="rtoggle"
            value="dark"
          />
          <label for="dark">Mineral</label>
          <input
            id="ck1jmw1ch0m1m1cqt8i9a98mw"
            type="radio"
            name="rtoggle"
            value="outdoors"
          />
          <label for="outdoors">Blue</label>
          <input
            id="ck0ajx7nj33rd1cla7ghajroz"
            type="radio"
            name="rtoggle"
            value="satellite"
          />
          <label for="satellite">Decimal</label>
        </div>
        <IconButton
          onClick={this.handleClick}
          variant="solid"
          variantColor="blue"
          aria-label="Call Sage"
          fontSize="20px"
          icon={FaDice}
        />
        <img src={image} id="legend-image" alt="legend for the crime overlay" />
        <div className="map-overlay" id="features">
          <h2>State Crime Data</h2>
          <div id="pd">
            <p>Hover over a state!</p>
          </div>
        </div>
        {/* <img src = {image} id="legend-image" alt="legend for the crime overlay"/>*/}
      </div>
    );
  }
}

export default OurMap;
