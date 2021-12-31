import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import * as DataApi from "./DataApi";
import cube from "./page/cube.png";

export const MapContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({ lat: 50, lng: 36.25 });
  // eslint-disable-next-line no-unused-vars
  const [activeMarker, setActiveMarker] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedPlace, setSelectedPlace] = useState({});

  const [arrDataAp, setArrDataAp] = useState([]);

  useEffect(() => {
    DataApi.retrievalDataApi().then((appartnments) =>
      setArrDataAp(appartnments.data)
    );
  }, []);

  // state = {
  //   address: "",
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {},
  //   center: {
  //     lat: 50,
  //     lng: 36.25,
  //   },
  // };

  //  const onMarkerClick = (props, marker, e) =>
  //     this.setState({
  //       selectedPlace: props,
  //       activeMarker: marker,
  //       showingInfoWindow: true,
  //     });

  //  const onMapClicked = (props) => {
  //     if (this.state.showingInfoWindow) {
  //       this.setState({
  //         showingInfoWindow: false,
  //         activeMarker: null,
  //       });
  //     }
  //   };

  // const createGeo = (markersApartment) => {
  //   setArr([...arr, markersApartment]);
  // };
  // console.log(arr);
  return (
    <div>
      <Map
        google={props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        className="m-0 p-0"
        initialCenter={center}
        center={center}
      >
        {arrDataAp.map((arr) => (
          <Marker
            key={arr._id}
            name={"Dolores park"}
            position={arr.geoAdress}
            icon={cube}
          />
        ))}
        <Marker />

        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
