import { Container, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const AppShell = ({ children }) => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Navbar>
      <div className="my-5"></div>
      {children}
      <div className="my-5"></div>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </Container>
  );
};

export default AppShell;
