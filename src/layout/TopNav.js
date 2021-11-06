import {Container, Dropdown, Row} from 'react-bootstrap'
import { ReactComponent as Cart } from '../cart.svg';
import { ReactComponent as Heart } from '../heart.svg';

function TopNav() {
    return (
        <section className="topNav">
            <Container fluid>
              <Row>
              <div className="width1">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <img src="https://cdn.countryflags.com/thumbs/sweden/flag-400.png" alt="" />
                    <em></em> SVENSKA
                  </Dropdown.Toggle>
                </Dropdown>

                
              </div>
              <div className="width2">
                <center>FREE DELIVERY ON ORDERS ABOVE 2 PAIRS</center>
              </div>
              <div className="width3">
                <ul>
                  <li>
                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        PERSONALIZE
                      </Dropdown.Toggle>
                    </Dropdown>
                  </li>
                  <li>
                    <Heart/> <span>1</span>
                  </li>
                  <li>
                    <Cart/> <span>1</span>
                  </li>
                </ul>
              </div>
                
              
             </Row> 
            </Container>
        </section>
        
        
    );
}

export default TopNav;
