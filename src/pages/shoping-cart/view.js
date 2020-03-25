/**
 * @format
 */

import React from 'react';
import './style.css';
import { Table } from 'reactstrap';
import numeral from 'numeral';
import Footer from '../../components/footer';

const ShopingCartPresenter = props => {
  const { cart, onDeleteProduct, calculateTotalPrice, totalPrice } = props;

  const renderTable = () => {
    return (
      <div className="cart-table">
        <Table hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={'https://picsum.photos/75/75?random=1'} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{numeral(item.price).format('0,0')}</td>
                  <td>{item.quantity}</td>
                  <td>{numeral(item.total).format('0,0')}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDeleteProduct(item, index)}>
                      Xoá
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div>
          <h3>Tổng số tiền: {totalPrice}</h3>
          <button
            className="btn btn-success cast-button"
            onClick={calculateTotalPrice}>
            Thanh toán
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="ShopingCart">
      {cart.length ? (
        renderTable()
      ) : (
        <h4 className="no-product">Không có sản phẩm nào trong giỏ hàng</h4>
      )}

      <Footer />
    </div>
  );
};

export default ShopingCartPresenter;
