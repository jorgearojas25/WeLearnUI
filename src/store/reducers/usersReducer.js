import config from "../../config";

// ACTIONS
const GET_USERS = "WeLearn/users/GET_USERS";
const POST_USER = "WeLearn/users/POST_USERS";

// REDUCER
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}

// ACTIONS

export const getUsers = () => (dispatch) =>
  fetch(config.baseURL + config.services.users)
    .then((data) => data.json())
    .then((data) => dispatch({ payload: data, type: GET_USERS }))
    .catch((error) => console.error(error));

export const postUser = (name, email) => (dispatch) => {
  fetch(config.baseURL + config.services.users, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: Math.floor(Math.random() * 1000000000), name: name, email: email }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
