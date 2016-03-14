const LOAD = '@ridness/auth/LOAD';
const LOAD_SUCCESS = '@ridness/auth/LOAD_SUCCESS';
const LOAD_FAIL = '@ridness/auth/LOAD_FAIL';
const LOGIN_START = '@ridness/auth/LOGIN_START';
const LOGIN_START_SUCCESS = '@ridness/auth/LOGIN_START_SUCCESS';
const LOGIN_START_FAIL = '@ridness/auth/LOGIN_START_FAIL';
const LOGIN = '@ridness/auth/LOGIN';
const LOGIN_SUCCESS = '@ridness/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = '@ridness/auth/LOGIN_FAIL';
const LOGOUT = '@ridness/auth/LOGOUT';
const LOGOUT_SUCCESS = '@ridness/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = '@ridness/auth/LOGOUT_FAIL';

const initialState = {
  loaded: false,
  verified: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN_START_SUCCESS:
      return {
        verified: false,
        awaitingVerification: true
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        verified: true,
        awaitingVerification: false,
        user: action.result
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/auth/load')
  };
}

export function verify(code, phoneNumber, plan) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post('/auth/verify', {
      data: {
        code,
        phoneNumber,
        plan
      }
    })
  };
}

export function login(phoneNumber) {
  return {
    types: [LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_FAIL],
    promise: (client) => client.post('/auth/login', {
      data: {
        phoneNumber
      }
    }),
    phoneNumber
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
