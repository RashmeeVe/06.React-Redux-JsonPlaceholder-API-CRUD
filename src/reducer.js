const apiData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_DATA":
      return { data: action.data };

    case "ADD_USER":
      const usersList1 = action.data.usersList;
      const user = action.data.user;
      const { name, username, email, phone, website } = user;
      let newId;
      if (usersList1 == null) {
        newId = 1;
        return {
          data: [
            {
              id: newId,
              name,
              username,
              email,
              phone,
              website,
            },
          ],
        };
      } else {
        const len = usersList1.length;
        newId = usersList1[len - 1].id + 1;
        return {
          data: [
            ...usersList1,
            {
              id: newId,
              name,
              username,
              email,
              phone,
              website,
            },
          ],
        };
      }

    case "DELETE_USER":
      return { data: action.data };

    case "GET_USER_DATA":
      const users = action.data.userData;
      const usersList = action.data.userList;
      return { data: users, usersList };

    case "EDIT_USER_DATA":
      return { data: action.data };

    default:
      return state;
  }
};
export default apiData;
