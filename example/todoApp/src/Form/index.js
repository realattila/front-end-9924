import { Col, Button, Form } from "react-bootstrap";

const MyForm = ({ onSubmitForm, onChangeInput, inputValue }) => {
  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Row>
        <Col>
          <Form.Label>Add Todo</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            value={inputValue}
            type="text"
            placeholder="please add todo"
          />

          <Form.Text>you can add Todo to Your List</Form.Text>
        </Col>
        <Col>
          <Button type="submit">Add To List</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

MyForm.defaultProps = {
  onSubmitForm: () => {},
  onChangeInput: () => {},
  inputValue: "",
};

export default MyForm;
