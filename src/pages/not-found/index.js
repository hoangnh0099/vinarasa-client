/**
 * @flow
 * @format
 */

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="error-code">404</h1>
      <h2 className="description">Xin lỗi, chúng tôi không tìm thấy sản phẩm phù hợp</h2>
      <h3 className="sub-description">
        Sản phẩm bạn đang tìm không tồn tại hoặc đã bị loại bỏ khỏi hệ thống
      </h3>
      <button className="btn btn-success go-back-button">
        <Link to="/" className="go-home">
          Trở về trang chủ
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
