const url = "https://jsonplaceholder.typicode.com/users";

const apiData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_DATA":
      return { data: action.data };

    case "ADD_USER":
      console.log(action.data);
      return { state };

    case "DELETE_USER":
      fetch(`${url}/${action.data}`, {
        method: "DELETE",
      }).catch((error) => {
        console.log(error);
      });
      return { ...state };

    case "GET_USER_DATA":
      const users = action.data;
      return { users };

    case "EDIT_USER_DATA":
      console.log(action.data);
      return { ...state };

    default:
      return state;
  }
};
export default apiData;
