import { Col, Row } from "react-bootstrap";

import AppShell from "./AppShell";
import PostList from "./PostList";

const App = () => {
  return (
    <AppShell>
      <Row>
        <Col>
          <h1>Hello World</h1>
          <PostList />
        </Col>
      </Row>
    </AppShell>
  );
};

export default App;
