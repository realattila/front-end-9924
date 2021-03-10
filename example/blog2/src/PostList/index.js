import PostsContext from "../store/PostsContext";

import { useContext, useEffect } from "react";
import Post from "../Post";

const PostList = () => {
  const { getData, data, error } = useContext(PostsContext);

  const getPosts = async () => {
    console.log("sss");
    await getData();
  };

  useEffect(() => {
    getPosts();
  }, []);

  const RenderPosts = () => {
    return data.map(({ body, title, userId }, index) => {
      return (
        <div className="my-2" key={index}>
          <Post body={body} title={title} user={userId} />
        </div>
      );
    });
  };

  return error ? (
    <div>An Error Accoured</div>
  ) : data.length < 1 ? (
    <div>loading ...</div>
  ) : (
    <RenderPosts />
  );
};

export default PostList;
