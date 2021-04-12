const initMapCoords = {coords: {lat: 59.938480, lng: 30.312481}};

const mapReducer = (mapCoords = initMapCoords, action) => {
  switch (action.type) {
    case 'MY_COORDS':
      return { coords: action.payload };
    default:
      return mapCoords;
  }
};

export default mapReducer;
