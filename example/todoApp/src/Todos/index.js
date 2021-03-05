import { Alert } from "react-bootstrap";
import Todo from "../Todo";

const Todos = ({ todos, handleRemoveTodo }) => {
  const RenderTodos = () =>
    todos.map((item, index) => {
      return <Todo key={index} title={item} handleClick={handleRemoveTodo} />;
    });

  return todos.length < 1 ? (
    <Alert variant="danger">Empty Todos List</Alert>
  ) : (
    <RenderTodos />
  );
};

Todos.defaultProps = {
  todos: [],
  handleRemoveTodo: () => {},
};

export default Todos;
