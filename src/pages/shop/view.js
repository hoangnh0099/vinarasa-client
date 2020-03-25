/**
 * @format
 */

import React from 'react';
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
    </div>
  );
};

export default ShopView;
