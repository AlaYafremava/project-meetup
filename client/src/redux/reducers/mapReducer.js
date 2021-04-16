// const initMapCoords = { coords: { lat: 59.938480, lng: 30.312481 }, markers: [] };

const mapReducer = (mapCoords, action) => {
  switch (action.type) {

    case 'INIT_VISIBLES_MARKS':
      // console.log(action.payload);
      const {markers, currentUserId } = action.payload;
      const arrCoords = markers.filter((coords) => coords.user?.visibility && currentUserId != coords.user._id );
      const previosCoords = markers.find((coords) => coords.user?.visibility && currentUserId == coords.user._id );
      // const arrMarkers = arrCoords.map(marker => marker.coords)
      // console.log(typeof arrCoords[0].lat);
      // console.log(arrCoords);
      return { ...mapCoords, markers: arrCoords, previosCoords };
    // arrCoords };

    case 'INIT_COORDS':
      console.log('инициализиция координат');
      console.log(action.payload, 'INIT_COORDS - action.payload');
      return { ...mapCoords, coords: action.payload };

    case 'MY_COORDS':
      console.log('установка координат');
      return { ...mapCoords, coords: action.payload };

    case 'DEL_COORDS':
      console.log('удаление из Store');
      return { ...mapCoords, coords: {}, previosCoords: undefined }

    //перенести case в юзеров
    // case 'VISIBILITY':
    //   return { ...mapCoords, visibility: !action.payload }

    default:
      return { ...mapCoords };
  }
};

export default mapReducer;
