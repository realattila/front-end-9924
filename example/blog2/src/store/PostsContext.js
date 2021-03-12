import axios from "axios";
import { createContext, useReducer } from "react";

const PostsContext = createContext({
  data: [],
  error: false,
  getData: () => {},
});

const INIT_STATE = {
  data: [],
  error: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA":
      return { ...state, data: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export const PostsContextContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({
          type: "SET_DATA",
          payload: response.data,
        });
      })
      .catch((e) =>
        dispatch({
          type: "SET_ERROR",
          payload: true,
        })
      );
  };

  return (
    <PostsContextProvicer
      value={{
        data: state.data,
        error: state.error,
        getData: getData,
      }}
    >
      {children}
    </PostsContextProvicer>
  );
};

export const PostsContextProvicer = PostsContext.Provider;

export default PostsContext;
