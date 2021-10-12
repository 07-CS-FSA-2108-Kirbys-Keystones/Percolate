import { FETCH_BUSINESS, FETCH_BUSINESSES } from '../reducers'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import db from '../../../src/firebase';

// ------------------ Actions creators --------------------

export const _fetchBusinesses = businesses => ({
  type: FETCH_BUSINESSES,
  businesses
})

export const _fetchBusiness = business => ({
  type: FETCH_BUSINESS,
  business
})

// ------------------ Thunk creators -----------------------

export const fetchBusinesses = () => {
  return async dispatch => {
    try {
      const response = await getDocs(collection(db, 'businesses'));
      console.log('businesses fetch response:', response)
      dispatch(_fetchBusiness(response))
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
