import React from "react";
import "./cart.css";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return cartItems.length < 1 ? (
    <div className="empty-cart">
      <h1>
        {" "}
        سله التسوق الخاصه بك فارغه
        <p> لا يوجد سلع</p>
        <Link className="empty-cart-link" to="/">
          صفحه السلع{" "}
        </Link>
      </h1>
    </div>
  ) : (
    <div className="cart">
      <h1 className="cart-title">سله التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-quantity">
                  الكميه:
                  <span>{item.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر:
                  <span>{item.price * item.quantity}$</span>
                </div>
                <FaTrash
                  className="cart-item-delete-icon"
                  onClick={() => dispatch(removeFromCart(item.id))}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <FaCheckCircle className="cart-summary-text-icon" />
            جزء من طلبك مؤهل للشحن المجانى. قم بتحديد هذا الخيار عند الدفع
            التفاصيل
          </div>
          <div className="cart-summary-total">
            المجموع:
            <span>
              {cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0
              )}
              $
            </span>
          </div>
          <button className="cart-summary-btn">تابع عمليات الشراء</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
