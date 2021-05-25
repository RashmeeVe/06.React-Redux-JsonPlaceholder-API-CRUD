const url = "https://jsonplaceholder.typicode.com/users";

export const fetchAPIdata = () => (dispatch) => {
  fetch(url).then((data) => {
    data.json().then((apiData) => {
      return dispatch({
        type: "FETCH_API_DATA",
        data: apiData,
      });
    });
  });
};

export const addUserData = (user) => (dispatch, getState) => {
  let usersList = getState();
  usersList = usersList.data;
  return dispatch({
    type: "ADD_USER",
    data: { usersList, user },
  });
};

export const deleteUser = (id) => (dispatch, getState) => {
  const usersList = getState();
  const userDetails = usersList.data;
  const userData = userDetails.filter(function (el) {
    return el.id !== id;
  });

  return dispatch({
    type: "DELETE_USER",
    data: userData,
  });
};

export const getUserDetails = (userId) => (dispatch, getState) => {
  const usersList = getState();
  const userDetails = usersList.data;
  const userData = userDetails.filter(function (el) {
    return el.id == userId;
  });
  return dispatch({
    type: "GET_USER_DATA",
    data: { userData: userData[0], userList: usersList.data },
  });
};

export const editUserData = (user, id) => (dispatch, getState) => {
  const usersList = getState();
  const { name, username, email, phone, website } = user;
  let users = usersList.usersList;

  let updatedUser = users.map((user) => {
    // user.id == id ? console.log("hi") : console.log("bye");
    if (user.id == id) {
      user.name = name;
      user.username = username;
      user.email = email;
      user.phone = phone;
      user.website = website;
    }
    return user;
  });
  return dispatch({
    type: "EDIT_USER_DATA",
    data: updatedUser,
  });
};
