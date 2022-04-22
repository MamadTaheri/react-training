import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from "./actionTypes";

export function getAllProducts(dispatch) {
  const apiUrl = "https://apitester.ir/api/Products";
  dispatch(fetchProductsStart());
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => dispatch(fetchProductsSucc(data)))
    .catch((error) => {
      dispatch(fetchProductsFailed(error));
    });
}

export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductsSucc = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFailed = (errorMessage) => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: errorMessage,
});
