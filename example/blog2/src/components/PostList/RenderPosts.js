import { useContext } from "react";

import Post from "../Post";
import PostsContext from "../../store/PostsContext";

const RenderPosts = () => {
  const { data } = useContext(PostsContext);

  return data.map(({ body, title, userId }, index) => {
    return (
      <div className="my-2" key={index}>
        <Post body={body} title={title} user={userId} />
      </div>
    );
  });
};

export default RenderPosts;
