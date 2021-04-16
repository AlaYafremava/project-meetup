import { INIT_USER, INIT_TAGS,CHECK_TAG, LOGOUT, INIT_PEOPLE, ADD_FRIEND, REMOVE_FRIEND, INIT_VISIBLES_MARKS, CHANGE_VISIBILITY_USER } from '../actionTypes/actionTypes'
import {INIT_TRAVELS, ADD_TRAVELS, DEL_TRAVELS, EDIT_TRAVELS, MY_COORDS, DEL_COORDS } from "../actionTypes/actionTypes"

export const initUserAC = (payload) => {
  return {
    type: INIT_USER,
    payload,
  };
};

export const logoutAC = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};

export const initTagsAC = (payload) => {
  return {
    type: INIT_TAGS,
    payload,
  };
};

export const checkTagAC = (payload) => {
  return {
    type: CHECK_TAG,
    payload,
  };
};

export const initTravelsAC = (payload) => {
  return {type: INIT_TRAVELS,
  payload
  }
}

export const addTravelsAC = (payload) => {
  return {type: ADD_TRAVELS,
  payload
  }
}

export const delTravelsAC = (payload) => {
  return {type: DEL_TRAVELS,
  payload
  }
}

export const editTravelsAC = (payload) => {
  return {type: EDIT_TRAVELS,
  payload
  }
}


//PEOPLE
export const initPeopleAC = (payload) => {
  return {type: INIT_PEOPLE,
  payload
  }
}

export const addFriendAC = (payload) => {
  return {type: ADD_FRIEND,
  payload
  }
}

export const removeFriendAC = (payload) => {
  return {type: REMOVE_FRIEND,
  payload
  }
}

//MAP
export const setCoordsAC = (payload) => {
  return {type: MY_COORDS,
  payload
  }
}

export const initVisibleMarksAC = (payload) => {
  return {type: INIT_VISIBLES_MARKS,
  payload
  }
}

export const changeVisiblesUserAC = (payload) => {
  return {type: CHANGE_VISIBILITY_USER,
  payload
  }
}

export const delCoordsAC = (payload) => {
  return {type: DEL_COORDS,
  payload
  }
}
