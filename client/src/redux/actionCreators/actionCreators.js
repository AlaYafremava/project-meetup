import { LOGOUT } from '../actionTypes/actionTypes'

export const logoutAC = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};

export const initTravelsAC = (payload) => {
  return {type: "INIT_TRAVEL",
  payload
  }
}

export const addTravelsAC = (payload) => {
  return {type: "ADD_TRAVEL",
  payload
  }
}

export const delNotesAC = (payload) => {
  return {type: "DEL_TRAVEL",
  payload
  }
}

export const editNotesAC = (payload) => {
  return {type: "EDIT_TRAVEL",
  payload
  }
}
