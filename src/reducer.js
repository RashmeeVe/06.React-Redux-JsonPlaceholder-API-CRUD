const apiData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_DATA":
      return { data: action.data };

    case "ADD_USER":
      const { name, username, email, phone, website } = action.data.user;
      const { usersList } = action.data;
      if (usersList) {
        const len = usersList.length;
        const myNewId = usersList[len - 1].id + 1;
        return {
          data: [
            ...usersList,
            {
              id: myNewId,
              name,
              username,
              email,
              phone,
              website,
            },
          ],
        };
      } else {
        const len = 1;
        return {
          data: [
            {
              id: len,
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
      const users = action.data.myUser;
      const myUsersList = action.data.usersList;
      return { users, myUsersList };

    case "EDIT_USER_DATA":
      const EditmyUser = action.data.user;
      const myId = action.data.myId;
      const updatedUsers = action.data.usersList.map((user) =>
        // user.id == myId ? alert("Hi") : alert("bye");

        user.id == myId
          ? {
              ...user,
              id: myId,
              name: EditmyUser.name,
              username: EditmyUser.username,
              email: EditmyUser.email,
              phone: EditmyUser.phone,
              website: EditmyUser.website,
            }
          : user
      );

      return { data: updatedUsers };

    default:
      return state;
  }
};
export default apiData;
