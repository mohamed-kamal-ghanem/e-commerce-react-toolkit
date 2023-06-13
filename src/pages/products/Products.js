import React, { useEffect, useState } from "react";
import ProductSidebar from "./ProductSidebar";
import ProductList from "./ProductList";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import Pagination from "./Pagination";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("select");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // filter product
  const filteredProduct = products.filter((product) =>
    filterItem === "laptop"
      ? product.isLaptop === true
      : filterItem === "mobile"
      ? product.isLaptop === false
      : product
  );

  // sort product

  const sortedProductList =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  // pagination
  const productPerPage = 3;
  const totalPages = Math.ceil(sortedProductList.length / productPerPage);
  const startIndex = (currentPage - 1) * productPerPage;
  const finishIndex = currentPage * productPerPage;
  const currentProductList = sortedProductList.slice(startIndex, finishIndex);

  return (
    <>
      <div className="products">
        <ProductSidebar
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          sortItem={sortItem}
          setSortItem={setSortItem}
        />
        <ProductList products={currentProductList} />
      </div>
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Products;
