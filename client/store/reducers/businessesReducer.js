import { FETCH_BUSINESS, FETCH_BUSINESSES } from '.'

// ------------------ Initial State -----------------------
const initialState = {
  businesses: [],
  business: {}
}

//==================== REDUCER FUNCTION ====================
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUSINESSES:
      return { ...state, products: action.businesses }
    case FETCH_BUSINESS:
      return { ...state, product: action.business }
    default:
      return state
  }
}
