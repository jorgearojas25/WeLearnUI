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
  fetch(config.baseURL + config.services.courses)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        payload: (data || []).map((course) => ({
          ...course,
          resources: course.resources.map((resource) => ({
            ...resource,
            id: Math.floor(Math.random() * 1000000000),
          })),
        })),
        type: GET_COURSES,
      })
    )
    .catch((error) => console.error(error));

export const postCourses = (name, founder, resources, estudiantes) => (dispatch) => {
  const body = {
    id: Math.floor(Math.random() * 1000000000),
    name: name,
    founder: founder,
    resources: (resources || []).map((resource) => ({
      ...resource,
      id: Math.floor(Math.random() * 1000000000),
    })),
    estudiantes: estudiantes,
  };
  console.log(JSON.stringify(body));
  fetch(config.baseURL + config.services.courses, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
