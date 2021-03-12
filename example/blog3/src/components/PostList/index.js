import DataContext from "../../store/DataContext";

import { useContext, useEffect } from "react";
import RenderPosts from "./RenderPosts";

const PostList = () => {
  const { getPosts, getUsers, posts, users } = useContext(DataContext);
  console.log("users", users);

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return posts.error ? (
    <div>An Error Accoured</div>
  ) : posts.data.length < 1 ? (
    <div>loading ...</div>
  ) : (
    <RenderPosts />
  );
};

export default PostList;
