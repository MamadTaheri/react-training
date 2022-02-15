import axios from "axios";
import { actionConstants } from "../actionConstants";

const fetchUsersRequest = () => {
  return {
    type: actionConstants.FETCH_USERS_REQUEST,
  };
};

const fetcUsersSuccess = (users) => {
  return {
    type: actionConstants.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: actionConstants.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data;
          dispatch(fetcUsersSuccess(users));
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(fetchUsersFailure(errorMessage));
        });
    }, 800);
  };
};
