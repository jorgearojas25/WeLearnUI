import config from "../../config";

// ACTIONS
const GET_COURSES = "WeLearn/users/GET_COURSES";
const POST_COURSES = "WeLearn/users/POST_COURSES";

// REDUCER
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_COURSES:
      return action.payload;
    default:
      return state;
  }
}

// ACTIONS

export const getCourses = () => (dispatch) =>
  fetch(config.baseURL + config.services.resources)
    .then((data) => data.json())
    .then((data) => dispatch({ payload: data, type: GET_COURSES }))
    .catch((error) => console.error(error));

export const postCourses = (name, founder, resources, estudiantes) => (dispatch) =>
  fetch(config.baseURL + config.services.courses, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      founder: founder,
      resources: resources,
      estudiantes: estudiantes,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));