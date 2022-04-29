import { Navbar, Container , Nav, NavDropdown  } from "react-bootstrap"
import CartWidet from  '../CartWidget/index'

const NavBar = () =>{
    return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">A punto caramelo </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Catalogo</Nav.Link>
        <NavDropdown title="Sobre Nosotros" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Nuestra historia</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Contacto</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <CartWidet/>
</Navbar>
)
}

export default NavBar;