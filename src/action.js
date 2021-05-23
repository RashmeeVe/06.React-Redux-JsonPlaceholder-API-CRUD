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

export const addUserData = (user) => (dispatch) => {
  const { name, username, email, phone, website } = user;

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name,
      username,
      email,
      phone,
      website,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      response.json().then((data) => {
        return dispatch({
          type: "ADD_USER",
          data: data,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = (id) => (dispatch) => {
  return dispatch({
    type: "DELETE_USER",
    data: id,
  });
};

export const getUserData = (id) => (dispatch) => {
  fetch(`${url}/${id}`)
    .then((data) => {
      data.json().then((userData) => {
        return dispatch({
          type: "GET_USER_DATA",
          data: userData,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editUserData = (user, id) => (dispatch) => {
  const { name, username, email, phone, website } = user;

  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      username,
      email,
      phone,
      website,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      response.json().then((data) => {
        dispatch({
          type: "EDIT_USER_DATA",
          data: user,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
