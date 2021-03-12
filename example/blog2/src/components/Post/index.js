import { Card } from "react-bootstrap";

const Post = ({ body, title, user }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Card.Link href="#">{user}</Card.Link>
      </Card.Body>
    </Card>
  );
};

Post.defaultProps = {
  body: "",
  title: "",
  user: "",
};
export default Post;
