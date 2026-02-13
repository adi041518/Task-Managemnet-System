import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";

function NavBar() {
    const navigate=useNavigate();
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "#111827",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        padding: "12px 30px",
      }}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          style={{
            color: "#6366f1",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Task Manager
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/" style={{ color: "#cbd5e1" }}>
              Home
            </Nav.Link>

            {/* <Nav.Link href="#" style={{ color: "#cbd5e1" }}>
              Dashboard
            </Nav.Link> */}

            {/* <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Profile
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          <Form className="d-flex gap-3">
            <Button
              style={{
                backgroundColor: "#6366f1",
                border: "none",
              }} onClick={()=>navigate("/login")}
            >
              Login
            </Button>
            <Button
              style={{
                backgroundColor: "#6366f1",
                border: "none",
              }}
              onClick={()=>{navigate("/signup")}}
            >
              Signup
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
