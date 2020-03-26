/**
 * @format
 */

import React from 'react';
import './style.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const ShopView = props => {
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem className="breadcrumb-custom">
            Trang chủ
          </BreadcrumbItem>
          <BreadcrumbItem active>Sản phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="shop-view-container">
        <div className="side-bar">
          <h1>Hello</h1>
        </div>

        <div className="shop-products">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default ShopView;
