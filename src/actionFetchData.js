const url = "https://jsonplaceholder.typicode.com/users";

export const actionFetchData = () => (dispatch) => {
  fetch(url).then((data) => {
    data.json().then((apiData) => {
      console.log(apiData);
      //   return dispatch({
      // type: "FETCH_API_DATA",
      return apiData;
      //   });
    });
  });
};
