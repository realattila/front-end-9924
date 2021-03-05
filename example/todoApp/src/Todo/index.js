import { Card, Button } from "react-bootstrap";

const Todo = ({ title, handleClick }) => {
  const onClickButton = (e) => {
    handleClick(title);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Text>{title}</Card.Text>
        <Button variant="danger" onClick={onClickButton}>
          Remove Me!
        </Button>
      </Card.Body>
    </Card>
  );
};

Todo.defaultProps = {
  title: "",
  handleClick: () => {},
};

export default Todo;
