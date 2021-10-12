import { FETCH_BUSINESS, FETCH_BUSINESSES } from '../reducers'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import db from '../../../src/firebase';

// ------------------ Actions creators --------------------

export const _fetchBusinesses = products => ({
  type: FETCH_BUSINESSES,
  products
})

export const _fetchBusiness = product => ({
  type: FETCH_BUSINESS,
  product
})

// ------------------ Thunk creators -----------------------

export const fetchBusinesses = () => {
  return async dispatch => {
    try {
      const response = await getDocs(collection(db, 'businesses'));
      dispatch(_fetchBusiness(response.data()))
    } catch (error) {
      console.log('Failed to fetch all businesses')
      return
    }
  }
}

export const fetchBusiness = businessId=> {
  return async dispatch => {
    try {
      const response = await getDoc(doc(db, 'businesses', businessId));
      dispatch(_fetchBusiness(response.data()))
    } catch (error) {
      console.log('Failed to fetch single business')
      return
    }
  }
}
