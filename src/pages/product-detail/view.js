/**
 * @flow
 * @format
 */

import React, { useState } from 'react';
import './style.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Toast,
  ToastBody,
} from 'reactstrap';
import numeral from 'numeral';
import Footer from '../../components/footer';
import StarRatingComponent from 'react-star-rating-component';

const ProductDetailView = props => {
  const {
    imageData,
    toggle,
    onChangeImage,
    activeImage,
    activeTab,
    addToCart,
  } = props;

  const [openToast, setOpenToast] = useState(false);

  const renderCount = () => {
    let option = [];

    for (let i = 1; i <= 50; i++) {
      option.push(<option key={i}>{i}</option>);
    }

    return option;
  };

  return (
    <div className="ProductDetail">
      <div>
        <Breadcrumb>
          <BreadcrumbItem className="breadcrumb-custom">
            Trang chủ
          </BreadcrumbItem>
          <BreadcrumbItem active>Sản phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="content">
        <div className="product-image">
          <img src={activeImage} alt="" className="main-image" />

          <div className="other-image">
            {imageData.map((item, index) => {
              return (
                <button key={index} onClick={() => onChangeImage(item)}>
                  <img src={item} alt="" className="sub-image" loading="lazy" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="product-detail-info">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Reference: demo_10</p>
          <p>Giá: {numeral(1000000).format('0,0')} VND</p>
          <hr />
          <Form>
            <p>Số lượng</p>
            <Input type="select" bsSize="sm" className="quantity-bar">
              {renderCount()}
            </Input>
          </Form>

          <button
            className="btn btn-success add-to-cart"
            onClick={() => {
              addToCart({ name: 'hello', price: 1000, quantity: 10 });
              setOpenToast(true);
              setTimeout(() => setOpenToast(false), 2000);
            }}>
            Thêm vào giỏ hàng
          </button>

          <Toast isOpen={openToast} className="toast-custom">
            <ToastBody>Thêm vào giỏ hàng thành công</ToastBody>
          </Toast>
        </div>
      </div>

      <div className="product-detail-description">
        <Nav tabs>
          <NavItem active={activeTab === '1'}>
            <NavLink
              onClick={() => {
                toggle('1');
              }}>
              Mô tả
            </NavLink>
          </NavItem>
          <NavItem active={activeTab === '2'}>
            <NavLink
              onClick={() => {
                toggle('2');
              }}>
              Đánh giá
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <p className="product-detail-description-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  dolor dolore eius itaque modi necessitatibus, placeat quod
                  tempora velit veritatis voluptas, voluptate! Alias dignissimos
                  dolores eum mollitia odit quis tempore ut veritatis voluptate
                  voluptates? Accusantium dignissimos eius et eum excepturi
                  illum in ipsa magnam maiores, quo rem sapiente sunt
                  voluptatum.
                </p>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <div>
              <h5 className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                eius.
              </h5>

              <div className="user-review">
                <p>Nguyễn Văn A</p>
                <p className="line">-</p>
                <StarRatingComponent
                  name=""
                  value={3}
                  starCount={5}
                  editing={false}
                />
              </div>
            </div>

            <div>
              <h5 className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                eius.
              </h5>

              <div className="user-review">
                <p>Nguyễn Văn A</p>
                <p className="line">-</p>
                <StarRatingComponent
                  name=""
                  value={3}
                  starCount={5}
                  editing={false}
                />
              </div>
            </div>

            <div>
              <h5 className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                eius.
              </h5>

              <div className="user-review">
                <p>Nguyễn Văn A</p>
                <p className="line">-</p>
                <StarRatingComponent
                  name=""
                  value={3}
                  starCount={5}
                  editing={false}
                />
              </div>
            </div>

            <div>
              <h5 className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                eius.
              </h5>

              <div className="user-review">
                <p>Nguyễn Văn A</p>
                <p className="line">-</p>
                <StarRatingComponent
                  name=""
                  value={3}
                  starCount={5}
                  editing={false}
                />
              </div>
            </div>

            <div>
              <h5 className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                eius.
              </h5>

              <div className="user-review">
                <p>Nguyễn Văn A</p>
                <p className="line">-</p>
                <StarRatingComponent
                  name=""
                  value={3}
                  starCount={5}
                  editing={false}
                />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailView;
