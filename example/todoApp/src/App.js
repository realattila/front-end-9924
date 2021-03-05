import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Form";
import Todos from "./Todos";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("form Submited");
    setTodos([...todos, input]);
    setInput("");
    console.log(todos);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleRemoveTodo = (title) => {
    console.log(title);
    setTodos(
      todos.filter((item) => {
        return item !== title;
      })
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form
            onSubmitForm={onSubmitForm}
            onChangeInput={onChangeInput}
            inputValue={input}
          />
          <div className="mb-5"></div>
          <Todos todos={todos} handleRemoveTodo={handleRemoveTodo} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
