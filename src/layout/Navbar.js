import {Container , Navbar ,NavDropdown ,Nav , Button,FormControl ,Offcanvas, Col} from 'react-bootstrap'

function HeadNavbar() {
    return (
        <>
        <Navbar expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/product">COLOURED LENSES</Nav.Link>
                  <Nav.Link href="/product">MAKE-UP</Nav.Link>
                  <Nav.Link href="/product">BUNDLES & SETS</Nav.Link>
                  <Nav.Link href="/product">REVIEWS</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Col className="flex-div">
            <Navbar.Brand href="/product">COLOURED LENSES</Navbar.Brand>
            <Navbar.Brand href="/product">MAKE-UP</Navbar.Brand>
            <Navbar.Brand href="/"><div class="swati-logo"> </div></Navbar.Brand>
            <Navbar.Brand href="/product">BUNDLES & SETS</Navbar.Brand>
            <Navbar.Brand href="/product">REVIEWS</Navbar.Brand>
            </Col>

        
        </Container>
      </Navbar>
        
        <Col className="dark">
            
        </Col>
      </>
    );
}

export default HeadNavbar;
