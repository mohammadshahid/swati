import {Container , Navbar ,NavDropdown ,Nav ,Form , Button,FormControl ,Offcanvas, Col, Row} from 'react-bootstrap'
import { ReactComponent as Check } from '../check.svg';
function Banner() {
    return (
    <>
        <section className="banner">
            <img src="http://localhost:1229/assets/banner.jpg"/>
        </section>
        
        <section class="home-newsletter">
            <div class="container">
            <div class="row">
            <div class="col-sm-12">
                <div class="single">
                    <h2>Vip access singles day</h2>
                    <p>Sign up get early access to our Singles day offers</p>
                <div class="input-group">
                    <input type="email" class="form-control me-3" placeholder="Enter your email address to apply..." />
                    <span class="input-group-btn">
                    <button class="btn btn-theme" type="submit">Apply Now!</button>
                    </span>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>

        <section class="home-vip-access">
            <div class="container">
            <div class="row">
            <div class="col-md-7 col-sm-12">
                <img src="http://localhost:1229/assets/lenses.png"/>
            </div>
            <div class="col-md-5 col-sm-12">
                <div class="single">
                    <h2>Get Vip access</h2>
                    <h6>singles day</h6>
                    <p>Our favourite day of the year is coming up and you don't want to miss this one. Sign up and get:</p>

                    <ul>
                        <li>
                            <Row>
                            <Col sm={2}><Check /></Col>
                            <Col>
                                <h2>Exclusive VIP access</h2>
                                <p>Shop your favourites before they sell out</p>
                            </Col>
                            </Row>
                        </li>
                        <li>
                        <Row>
                            <Col sm={2}><Check /></Col>
                            <Col>
                                <h2>Upto 50% off</h2>
                                <p>Enjoy exclusive offers beforeanyone else</p>
                                </Col>
                            </Row>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
        </section>
    </>
    );
}

export default Banner;
