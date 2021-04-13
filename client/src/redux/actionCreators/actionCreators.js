import { LOGOUT } from '../actionTypes/actionTypes'
import {INIT_TRAVELS, ADD_TRAVELS, DEL_TRAVELS, EDIT_TRAVELS} from "../actionTypes/actionTypes"

export const logoutAC = (payload) => {
  return {
    type: LOGOUT,
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
