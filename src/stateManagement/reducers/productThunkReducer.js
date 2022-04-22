import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  isLoading: false,
  message: "",
};

function productThunkReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { items: [], message: "", isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { items: action.payload, message: "", isLoading: false };
    case FETCH_PRODUCTS_FAILED:
      return { items: [], message: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default productThunkReducer;
