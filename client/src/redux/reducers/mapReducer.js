// const initMapCoords = { coords: { lat: 59.938480, lng: 30.312481 }, markers: [] };

const mapReducer = (mapCoords, action) => {
  switch (action.type) {

    case 'INIT_VISIBLES_MARKS':
      const arrCoords = action.payload.users.map((user) => ( user._id.visibility && !action.payload.id ) ? user.coords : user);
      console.log(typeof arrCoords[0].lat);
      console.log(arrCoords);
      return { ...mapCoords, markers: arrCoords };

    case 'MY_COORDS':
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
