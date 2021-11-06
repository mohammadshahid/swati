import React from "react";
import ProductBox from "./ProductBox";
import { Container, Row, Breadcrumb, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchReqdata } from "../Actions";

class Product extends React.Component {
  componentDidMount() {
    this.props.fetchReqdata();
  }

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <Row>
            <div>
              <img src="https://www.shethopticals.com/Admin/image_producttype1/contact-lenses-bannner.jpg" width={'100%'} height={150}/>
            </div>
        </Row>
        <Container>
          <Row className="product">
            <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Shop</Breadcrumb.Item>
              <Breadcrumb.Item active>All</Breadcrumb.Item>
            </Breadcrumb>
            </Col>
            <Col className="text-right" xs={12} sm={6}>
              <span>Showing 1-{products.length} out of {products.length} Products</span>
            </Col>
          <div className="shell">
            <div className="container">
              <div className="row">
                {products.length > 0 &&
                  products.map(product => {
                    const { id } = product;
                    return <ProductBox key={id} product={product} />;
                  })}
              </div>
            </div>
          </div>

          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("this is state", state.products);
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { fetchReqdata }
)(Product);
