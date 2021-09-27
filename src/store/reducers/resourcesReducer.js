import config from "../../config";

// ACTIONS
const GET_RESOURCES = "WeLearn/users/GET_RESOURCES";
const POST_RESOURCES = "WeLearn/users/POST_RESOURCES";

// REDUCER
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_RESOURCES:
      return action.payload;
    default:
      return state;
  }
}

// ACTIONS

export const getResources = () => (dispatch) =>
  fetch(config.baseURL + config.services.resources)
    .then((data) => data.json())
    .then((data) => dispatch({ payload: data, type: GET_RESOURCES }))
    .catch((error) => console.error(error));

export const postResources = (name, url) => (dispatch) =>
  fetch(config.baseURL + config.services.users, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, url: url }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
