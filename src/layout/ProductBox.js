import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export default class ProductBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: ""
    };
  }

  render() {
    const img = this.props.product.media.standard;
    const { name, price, priceAsNumber, sku, product } = this.props.product;
    return (
      <React.Fragment>
        {/* <Col lg={this.props.lg} md={this.props.md} xs={this.props.xs}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col> */}

        
        
              <div className="col-md-4">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <a href={`product/${product}`}>
                      <img src={img} alt="Product" className="img-responsive" />
                    </a>
                  </div>
                  <div className="wsk-cp-text">
                    {/* <div class="category">
                      <span>View More</span>
                    </div> */}
                    <div className="title-product">
                      <h3>{name}</h3>
                    </div>
                    <div className="wcf-left">
                      <span className="price">{price}</span>
                      <br/>
                      <del>AED{priceAsNumber * 2}</del>
                      <span className="offer_pct">50% OFF</span>
                    </div>
                    <div className="wcf-left2">
                        <p><span>SKU : </span><br/> {sku}</p>
                    </div>
                    <div className="description-prod">
                      <p>Get it by Monday, November 18</p>
                    </div>
                    <div className="card-footer">
                      {/* <div class="wcf-left"><span class="price">{price}</span></div> */}
                      {/* <div class="wcf-right"> */}
                        <a href="#" className="buy-btn">Shop Now</a>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              
            
      </React.Fragment>
    );
  }
}
