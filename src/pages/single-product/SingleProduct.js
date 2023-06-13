import React, { useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import ProductDiscription from "../special-offer-page/ProductDiscription";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCalls/productApiCall";
import Spinner from "../../components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCall";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.product);

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
  }, [id]);

  //Add To Cart Handler

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: quantity,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  };

  if (loading) return <Spinner />;
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">{product?.price}</div>
          <div className="product-add-to-cart">
            <div>الكميه</div>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              اضافه الى سله التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDiscription />
    </div>
  );
};

export default SingleProduct;
