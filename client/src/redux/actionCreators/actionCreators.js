import { LOGOUT } from '../actionTypes/actionTypes'

export const logoutAC = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};
