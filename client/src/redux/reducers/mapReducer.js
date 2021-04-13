const initMapCoords = {
  coords: { lat: 59.938480, lng: 30.312481 },}
//   visibility: true,
    // добавляется в базу, когда пользователь клиепе
//   markers: [
//     { lat: 59.9381841762223, lng: 30.31536517097182, user: 'Ann' },
//     { lat: 59.938017673154, lng: 30.312043967568645, user: 'Mike' },
//     { lat: 59.938915343840016, lng: 30.30861916384227, user: 'Jeck' },
//     { lat: 59.94098222939891, lng: 30.314060360105106, user: 'Monika' },
//   ]
// };

const mapReducer = (mapCoords = initMapCoords, action) => {
  switch (action.type) {

    case 'INIT_MAP':
      return { ...mapCoords, ...action.payload };

    case 'INIT_MARKS':
      return { ...mapCoords, markers: action.payload };

    case 'MY_COORDS':
      return { ...mapCoords, coords: action.payload };

    case 'DEL_COORDS':
      return { ...mapCoords, coords: {} }

    //перенести case в юзеров
    case 'VISIBILITY':
      return { ...mapCoords, visibility: !action.payload }

    default:
      return { ...mapCoords };
  }
};

export default mapReducer;
