import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({ count, total }) => {
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">ReStore</Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {count} items (${total})
      </Link>
    </header>
  );
};

const mapStateToProps = ({shoppingCart: { orderCount, orderTotal }}) => {
  return {
    count: orderCount,
    total: orderTotal
  }
}

export default connect(mapStateToProps)(ShopHeader);
