import PostsContext from "../../store/PostsContext";

import { useContext, useEffect } from "react";
import RenderPosts from "./RenderPosts";

const PostList = () => {
  const { getData, data, error } = useContext(PostsContext);

  useEffect(() => {
    getData();
  }, []);

  return error ? (
    <div>An Error Accoured</div>
  ) : data.length < 1 ? (
    <div>loading ...</div>
  ) : (
    <RenderPosts />
  );
};

export default PostList;
