// const initMapCoords = { coords: { lat: 59.938480, lng: 30.312481 }, markers: [] };

const mapReducer = (mapCoords, action) => {
  switch (action.type) {

    case 'INIT_VISIBLES_MARKS':
      console.log(action.payload);
      const {markers, currentUserId } = action.payload;
      const arrCoords = markers.filter((coords) =>  coords.user.visibility && currentUserId != coords.user._id );
      const arrMarkers = arrCoords.map(marker => marker.coords)
      // console.log(typeof arrCoords[0].lat);
      // console.log(arrCoords);
      return { ...mapCoords, markers: arrMarkers };
    // arrCoords };

    case 'MY_COORDS':
      console.log('reduser map');
      return { ...mapCoords, coords: action.payload };

    case 'DEL_COORDS':
      return { ...mapCoords, coords: {} }

    //перенести case в юзеров
    // case 'VISIBILITY':
    //   return { ...mapCoords, visibility: !action.payload }

    default:
      return { ...mapCoords };
  }
};

export default mapReducer;
