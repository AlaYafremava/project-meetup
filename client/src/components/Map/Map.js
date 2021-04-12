import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";

const containerStyle = {
  width: "70vw",
  height: "70vh",
  borderRadius: "4px",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
  navigation: true,
  fullscreenControl: true,
};

function Map({ defaultCity }) {
  const center = {
    lat: 59.938480,
    lng: 30.312481
  };

  const [selected, setSelected] = useState(false);
  // const dispatch = useDispatch();

  const [markers, setMarkers] = useState([]);

  const createMarkers = (event) => {
    // dispatch({type: 'MY_COORDS', payload: {
    //   lat: event.latLng.lat(),
    //   lng: event.latLng.lng(),
    //   time: new Date(),
    // }} 
    setMarkers((current) => [...current,
    {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
    }]
    )
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  console.log(isLoaded);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <>
      {/* <h1>
        <span role="img" aria-label="tent">Our logo</span>
      </h1> */}
      <GoogleMap
        zoom={17}
        mapContainerStyle={containerStyle}
        center={center}
        options={options}
        onClick={createMarkers}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
        {/* <Marker
          position={center}
          onClick={() => {
            setSelected(!selected);
          }}
        /> */}
        {/* {selected && defaultCity.name ? (
          <InfoWindow position={center}>
            <div style={{ color: "black" }}>
              <p>{!defaultCity.address && "Концертный зал:"}</p>
              <p>{defaultCity.name && defaultCity.name}</p>
              <p>{defaultCity.address && defaultCity.address}</p>
            </div>
          </InfoWindow>
        ) : null} */}
      </GoogleMap>

      {/* определение авто-координат. Пока в разработке */}
      {/* <span className={styles.mapstyle} onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          dispatch({ type: 'MY_COORDS', payload: { lat: position.coords.latitude, lng: position.coords.longitude } })
        }, () => null)
      }}>
        <img src="" alt="locate me" style={{ width: "48px", height: '48px' }}></img>
      </span> */}
    </>
  ) : (
      <div></div>
    );
}

export default React.memo(Map);
