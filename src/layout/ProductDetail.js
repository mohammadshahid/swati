import React from "react";
import ProductBox from "./ProductBox";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { connect } from "react-redux";
import { fetchSkuReq } from "../Actions";

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchSkuReq('423');

    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);
  }

  render() {
    const { product } = this.props;
    return (
      
          <div className = "card-wrapper">
            <div className = "card">
              <div className = "product-imgs">
                <div className = "img-display">
                  <div className = "img-showcase">
                    <img src = "https://swati.centraqa.com/client/dynamic/images/166_1c58ddd74d-27_2a2db40dd4-turquoise-original.jpg" alt=""/>
                    <img src = "https://swati.centraqa.com/client/dynamic/images/165_0bf0502b5c-26_6f98ec3c3a-sandstone-original.jpg" alt = ""/>
                    <img src = "https://swati.centraqa.com/client/dynamic/images/164_8b484b005b-30_7ecd5e7c8c-pearl-original.jpg" alt = ""/>
                    <img src = "https://swati.centraqa.com/client/dynamic/images/163_2fc16b9d60-31_35fbbb49dc-jade-original.jpg" alt = ""/>
                  </div>
                </div>
                <div className = "img-select">
                  <div className = "img-item">
                    <a href = "#" data-id = "1">
                      <img src = "https://swati.centraqa.com/client/dynamic/images/166_1c58ddd74d-27_2a2db40dd4-turquoise-original.jpg" alt = ""/>
                    </a>
                  </div>
                  <div className = "img-item">
                    <a href = "#" data-id = "2">
                      <img src = "https://swati.centraqa.com/client/dynamic/images/165_0bf0502b5c-26_6f98ec3c3a-sandstone-original.jpg" alt = ""/>
                    </a>
                  </div>
                  <div className = "img-item">
                    <a href = "#" data-id = "3">
                      <img src = "https://swati.centraqa.com/client/dynamic/images/164_8b484b005b-30_7ecd5e7c8c-pearl-original.jpg" alt = ""/>
                    </a>
                  </div>
                  <div className = "img-item">
                    <a href = "#" data-id = "4">
                      <img src = "https://swati.centraqa.com/client/dynamic/images/163_2fc16b9d60-31_35fbbb49dc-jade-original.jpg" alt = ""/>
                    </a>
                  </div>
                </div>
              </div>
              <div className = "product-content">
                <h2 className = "product-title">{product.name}</h2>
                <p>6-months lenses</p>
                <div className = "product-price">
                  <p className = "last-price"><span>{product.priceBeforeDiscount}</span> <i className="offer_pct">{product.discountPercent}% OFF</i></p>
                  <p className = "new-price"><h2>{product.price}</h2></p>
                </div>

                <div className = "product-detail">
                  <h2>about this item: </h2>
                  <p>I love this product very conformable and can wear them all day with out feeling like I have lenses on and they looked amazing thank you swati.</p>
                  <p>I love this product very conformable and can wear them all day with out feeling like I have lenses on and they looked amazing thank you swati.</p>
                  <ul>
                    <li>Color: <span>Black</span></li>
                    <li>Available: <span>in stock</span></li>
                    <li>Category: <span></span></li>
                    <li>Shipping Area: <span>In UAE Only</span></li>
                    <li>Shipping Fee: <span>Free</span></li>
                  </ul>
                </div>

                <div className = "purchase-info">
                      <input type = "number" min = "0" value = "1"/>
                      <button className="btn btn-theme">
                      Add to Cart
                      </button>
                </div>

                <div className = "social-links">
                  <p>Share At: </p>
                  <a href = "#">
                  <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href = "#">
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href = "#">
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href = "#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href = "#">
                  <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </div>
              </div>
            </div>
          </div>
         
    );
  }
}

const mapStateToProps = state => {
  console.log("this is state", state.sku_product);
  return {
    product: state.sku_product
  };
};

export default connect(
  mapStateToProps,
  { fetchSkuReq }
)(ProductDetail);
