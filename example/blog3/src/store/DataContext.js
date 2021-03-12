import axios from "axios";
import { createContext, useReducer } from "react";

const INIT_STATE = {
  posts: {
    data: [],
    error: false,
  },
  users: {
    data: [],
    error: false,
  },
};

const DataContext = createContext({
  ...INIT_STATE,
  getPosts: () => {},
  getUsers: () => {},
});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_POSTS":
      return { ...state, posts: { ...state.posts, data: payload } };
    case "SET_POSTS_ERROR":
      return { ...state, posts: { ...state.posts, error: payload } };
    case "SET_USERS":
      return { ...state, users: { ...state.users, data: payload } };
    case "SET_USERS_ERROR":
      return { ...state, users: { ...state.users, error: payload } };
    default:
      return state;
  }
};

export const DataContextContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getPosts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({
          type: "SET_POSTS",
          payload: response.data,
        });
      })
      .catch((e) =>
        dispatch({
          type: "SET_POSTS_ERROR",
          payload: true,
        })
      );
  };

  const getUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: "SET_USERS",
          payload: response.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: "SET_USERS_ERROR",
          payload: true,
        });
      });
  };

  return (
    <DataContextProvicer
      value={{
        ...state,
        getPosts,
        getUsers,
      }}
    >
      {children}
    </DataContextProvicer>
  );
};

export const DataContextProvicer = DataContext.Provider;

export default DataContext;
