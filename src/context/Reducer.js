const rootReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER_STATE":
      console.log("State Changed");
      return {
        user: !false,
      };

    case "LOGOUT_USER":
      return {
        user: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
