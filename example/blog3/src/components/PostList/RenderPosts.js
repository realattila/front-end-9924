import { useContext } from "react";

import Post from "../Post";
import DataContext from "../../store/DataContext";

const RenderPosts = () => {
  const { posts } = useContext(DataContext);

  return posts.data.map(({ body, title, userId }, index) => {
    return (
      <div className="my-2" key={index}>
        <Post body={body} title={title} user={userId} />
      </div>
    );
  });
};

export default RenderPosts;
