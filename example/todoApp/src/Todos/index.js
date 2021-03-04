import { Alert, Card, Button } from "react-bootstrap";

const Todos = ({ todos }) => {
  const Todo = ({ title, handleClick = () => {} }) => (
    <Card>
      <Card.Body>
        <Card.Text>{title}</Card.Text>
        <Button variant="danger" onClick={handleClick}>
          Remove Me!
        </Button>
      </Card.Body>
    </Card>
  );

  const RenderTodos = () =>
    todos.map((item, index) => {
      return <Todo key={index} title={item} />;
    });

  return todos.length < 1 ? (
    <Alert variant="danger">Empty Todos List</Alert>
  ) : (
    <RenderTodos />
  );
};

Todos.defaultProps = {
  todos: [],
};

export default Todos;
