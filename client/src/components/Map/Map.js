import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { delCoordsAC, setCoordsAC } from "../../redux/actionCreators/actionCreators";
import { fetchdelCoordsAC, fetchsetCoordsAC } from "../../redux/reduxThunk/asyncFuncs";

const containerStyle = {
  width: '47vw',
  height: '70vh',
  borderRadius: '4px',
}
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
  navigation: true,
  fullscreenControl: true,
}

function Map({ visibility }) {

  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);

  const [selected, setSelected] = useState(null);

  const { coords, markers } = useSelector((store) => store.map)

  //удалить метку, если user невидим
  useEffect(() => {
    // console.log('попал в на делит Map useEffect');
    // console.log(!visibility, 'DEL');
    // console.log(coords?.user?._id == user._id, 'DEL');
    !visibility && coords?.user?._id == user._id &&
      dispatch(fetchdelCoordsAC(coords?._id))
  }, [visibility]);

console.log(markers); 
  // установка координат по клику и запись в store
  const changeMarker = (event) => {
    dispatch(fetchsetCoordsAC(event.latLng.lat(), event.latLng.lng(), coords._id))
  }

  // установка ключа google
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  })

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <>
      <GoogleMap
        zoom={13}
        mapContainerStyle={containerStyle}
        center={coords?.coords?.lat ? coords?.coords : { lat: 59.96, lng: 30.312481 }}
        options={options}
        onClick={visibility && changeMarker}
      >
        {visibility && <Marker
          position={coords?.coords}
          icon={{
            url: '/me.png',
            scaledSize: new window.google.maps.Size(30, 30), // масштабировать иконку
            anchor: new window.google.maps.Point(15, 15) // поставить в центр иконки
          }}
        />}

        {/* прорисовка всех юзеров, которые хотять meetUp */}
        {console.log(markers)}
        {visibility && markers.length != 0 ? markers.map((marker) =>
          <Marker
            key={performance.now()}
            position={
              { lat: marker.coords.lat, lng: marker.coords.lng } //coords
            }
            onClick={(event) => {
              setSelected(marker);
              console.log(marker);
            }}
          />) : null}

        {/* создаем информационное окно на каждый маркер */}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.coords.lat, lng: selected.coords.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="gm-style .gm-style-iw-c"  style={{ paddingRight: "0px", paddingBottom: "0px", maxWidth: "648px", maxHeight: "152px", minWidth: "0px"}}>
                <div className="title full-width"><Link to="/profile">{selected.user.name}</Link></div>
                
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  ) : (
      <div></div>
    )
}

export default React.memo(Map)
