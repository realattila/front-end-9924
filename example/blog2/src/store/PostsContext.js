import axios from "axios";
import { createContext, useState } from "react";

const PostsContext = createContext({
  data: [],
  error: false,
  getData: () => {},
});

export const PostsContextContainer = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("response", response);
        setData(response.data);
      })
      .catch((e) => setError(true));
  };

  return (
    <PostsContextProvicer
      value={{
        data: data,
        error: error,
        getData: getData,
      }}
    >
      {children}
    </PostsContextProvicer>
  );
};

export const PostsContextProvicer = PostsContext.Provider;

export default PostsContext;
