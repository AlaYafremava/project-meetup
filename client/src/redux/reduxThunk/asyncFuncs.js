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
