import { Col, Row } from "react-bootstrap";

import AppShell from "./components/AppShell";
import PostList from "./components/PostList";
import { DataContextContainer } from "./store/DataContext";

const App = () => {
  return (
    <DataContextContainer>
      <AppShell>
        <Row>
          <Col>
            <h1>Hello World</h1>
            <PostList />
          </Col>
        </Row>
      </AppShell>
    </DataContextContainer>
  );
};

export default App;
