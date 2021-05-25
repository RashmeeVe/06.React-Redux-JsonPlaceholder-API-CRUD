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
  const usersList = getState().data;

  return dispatch({
    type: "ADD_USER",
    data: { user, usersList },
  });
};

export const deleteUser = (id) => (dispatch, getState) => {
  const usersList = getState().data;
  const usersListAfterDeletion = usersList.filter((user) => user.id !== id);

  return dispatch({
    type: "DELETE_USER",
    data: usersListAfterDeletion,
  });
};

export const getUserData = (id) => (dispatch, getState) => {
  const usersList = getState().data;
  const myUser = usersList.filter((user) => user.id == id);
  return dispatch({
    type: "GET_USER_DATA",
    data: { usersList: usersList, myUser: myUser[0] },
  });
};

export const editUserData = (user) => (dispatch, getState) => {
  const MyState = getState();
  const usersList = MyState.myUsersList;
  const myId = MyState.users.id;

  dispatch({
    type: "EDIT_USER_DATA",
    data: { myId, usersList, user },
  });
};
