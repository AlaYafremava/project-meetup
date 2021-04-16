import {
  initUserAC,
  initTagsAC,
  initTravelsAC,
  addTravelsAC,
  delTravelsAC,
  editTravelsAC,
  initPeopleAC,
  addFriendAC,
  removeFriendAC,
  setCoordsAC,
  changeVisiblesUserAC,
  delCoordsAC,
  initVisibleMarksAC,
  joindAC,
  unJoinAC,
} from '../../redux/actionCreators/actionCreators'

export const fetchInitUser = () => {
  const token = window.localStorage.getItem('token')

  return dispatch => {
    fetch('/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'Application/json', Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(initUserAC(data))
      })
  }
}

export const fetchInitTags = () => {
  return dispatch => {
    fetch('/tags')
      .then(res => res.json())
      .then(data => {
        console.log(data.tags)
        dispatch(initTagsAC(data.tags))
      })
  }
}

export const fetchChangeTagStatus = id => {
  return dispatch => {
    fetch('/tag', {
      method: 'PATCH',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ id }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    // dispatch(checkTagAC())})
  }
}

export const fetchInitTravels = () => {
  const token = window.localStorage.getItem('token')

  return dispatch => {
    fetch('/travels', {
      method: 'GET',
      headers: { 'Content-Type': 'Application/json', Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => dispatch(initTravelsAC(data.travels)))
  }
}

export const fetchDelTravels = id => {
  const token = window.localStorage.getItem('token')

  return dispatch => {
    fetch('/travels', {
      method: 'delete',
      headers: { 'Content-Type': 'Application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    })
      .then(res => res.json())

      .then(data => dispatch(delTravelsAC(data.id)))
  }
}

export const fetchEditTravels = (
  id,
  title,
  description,
  country,
  city,
  startDate,
  finishDate,
  number,
  imageUrl
) => {
  const token = window.localStorage.getItem('token')

  return dispatch => {
    fetch(`/travels/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json', Authorization: `Bearer ${token}` },

      body: JSON.stringify({
        id,
        title,
        description,
        country,
        city,
        startDate,
        finishDate,
        number,
        src: imageUrl,
      }),
    })
      .then(res => res.json())
      .then(data => dispatch(editTravelsAC(data.travel)))
  }
}

//PEOPLE
export const fetchInitPeople = () => {
  return dispatch => {
    fetch('/people')
      .then(response => response.json())
      .then(people => dispatch(initPeopleAC(people)))
  }
}

export const fetchAddFriend = (idMy, idFriend) => {
  return dispatch => {
    fetch(`/people/${idMy}/friends/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ idFriend }),
    })
      .then(response => response.json())
      .then(friend => dispatch(addFriendAC(friend)))
  }
}

export const fetchRemoveFriend = (idMy, idFriend) => {
  return dispatch => {
    fetch(`/people/${idMy}/friends/new`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ idFriend }),
    })
      .then(response => response.json())
      .then(msg => dispatch(removeFriendAC(idFriend)))
  }
}

// fetch MAP
export const fetchSetCoordsAC = (res, userId) => {
  return dispatch => {
    fetch('/map/new-coords', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        coords: {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        },
        userId,
      }),
    })
      .then(res => res.json())
      .then(data => dispatch(setCoordsAC(data)) && console.log('создал координаты'))
  }
}

export const fetchChangeVisibleEserAC = (id, visibility) => {
  return dispatch => {
    fetch('/profile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, visibility }),
    })
      .then(res => res.json())
      .then(data => dispatch(changeVisiblesUserAC(data.visibility)))
  }
}

export const fetchdelCoordsAC = id => {
  return dispatch => {
    fetch('/map/del-coords', {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        id,
      }),
    })
      .then(res => res.json())
      .then(
        data => data.success == true && dispatch(delCoordsAC()) && console.log('удаление из Store')
      )
  }
}

export const fetchsetCoordsAC = (lat, lng, id) => {
  return dispatch => {
    fetch('/map/edit-coords', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        coords: { lat, lng },
        id,
      }),
    })
      .then(res => res.json())
      .then(data => dispatch(setCoordsAC(data.editCoords)))
  }
}

export const fetchinitVisibleMarksAC = (markers, currentUserId) => {
  return dispatch => {
    fetch('/map')
      .then(res => res.json())
      .then(markers => dispatch(initVisibleMarksAC({ markers, currentUserId })))
  }
}

export const fetchJoinToTravel = (id, idTravel) => {
  return dispatch => {
    fetch(`/travels/${idTravel}/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then(response => response.json())
      .then(travel => dispatch(joindAC(travel)))
  }
}

export const fetchUnjoinToTravel = (id, idTravel) => {
  return dispatch => {
    fetch(`/travels/${idTravel}/join`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then(response => response.json())
      .then(msg => dispatch(unJoinAC(idTravel)))
  }
}
