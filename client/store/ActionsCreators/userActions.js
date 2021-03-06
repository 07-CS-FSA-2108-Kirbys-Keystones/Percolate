import axios from 'axios'
import { GET_ALL_USERS, GET_USER } from '../reducers'

//* ------------------ Actions creators --------------------
//* Set the current user
export const setUser = user => ({
  type: GET_USER,
  payload: user
})

//* Set all the users
export const setUsers = users => ({
  type: GET_ALL_USERS,
  payload: users
})

//* ------------------ Thunk creators -----------------------
//* Used to fetch the current user
export const fetchUser = (userId, token) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/${userId}`, {
        headers: { authorization: token }
      })
      dispatch(setUser(data))
    } catch (error) {
      console.log('Failed to fetch current user: ' + userId)
      return
    }
  }
}

//* Used to fetch all users
export const fetchUsers = token => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users`, {
        headers: { authorization: token }
      })
      dispatch(setUsers(data))
    } catch (error) {
      console.log('Failed to fetch current users')
      return
    }
  }
}
