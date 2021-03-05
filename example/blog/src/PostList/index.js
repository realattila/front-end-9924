import Axios from "axios";

import { useEffect, useState } from "react";
import Post from "../Post";

const PostList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => setError(true));
  };

  useEffect(() => {
    getData();
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
