import { createContext, useReducer } from "react";
import rootReducer from "./Reducer";

export const UserContext = createContext();

const initialState = {
  user: false,
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const changeUserState = () => {
    dispatch({
      type: "CHANGE_USER_STATE",
    });
  };

  const logoutUser = () => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  return (
    <UserContext.Provider
      value={{ state: state.user, changeUserState, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
