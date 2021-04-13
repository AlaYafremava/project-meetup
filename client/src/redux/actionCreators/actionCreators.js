import { INIT_USER, INIT_TAGS,CHECK_TAG, LOGOUT } from '../actionTypes/actionTypes'
import {INIT_TRAVELS, ADD_TRAVELS, DEL_TRAVELS, EDIT_TRAVELS} from "../actionTypes/actionTypes"

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
