
import history from '../history';
const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({ type: SET_AUTH, auth })

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  // const token = window.localStorage.getItem(TOKEN);
  // if (token) {
  //   const res = await axios.get('/auth/me', {
  //     headers: {
  //       authorization: token,
  //     },
  //   });

  //   return dispatch(setAuth(res.data));
  // } else return dispatch(setAuth({}));
};

export const authenticate =
  (username, password) => async (dispatch, { getFirebase, getFirestore }) => {
    try {
      console.log(username, password);
      const firestore = getFirestore();
      const firebase = getFirebase()
      const response = await firebase.auth().signInWithEmailAndPassword(username, password)
      console.log('back')
      console.log(response.data())
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };
export const authenticateSignup = (user, method) => async (dispatch) => {
  // try {
  //   const res = await axios.post(`/auth/${method}`, user);
  //   window.localStorage.setItem(TOKEN, res.data.token);
  //   dispatch(me());
  // } catch (authError) {
  //   return dispatch(setAuth({ error: authError }));
  // }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push('/login');
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH: {
      return { ...action.auth, loaded: true };
    }
    default:
      return state;
  }
}