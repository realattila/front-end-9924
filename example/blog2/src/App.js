import { Col, Row } from "react-bootstrap";

import AppShell from "./components/AppShell";
import PostList from "./components/PostList";
import { PostsContextContainer } from "./store/PostsContext";

const App = () => {
  return (
    <PostsContextContainer>
      <AppShell>
        <Row>
          <Col>
            <h1>Hello World</h1>
            <PostList />
          </Col>
        </Row>
      </AppShell>
    </PostsContextContainer>
  );
};

export default App;
