import React from "react";
import ProductFilterBox from "./ProductFilterBox";
import ProductSortBox from "./ProductSortBox";

const ProductSidebar = ({
  setFilterItem,
  filterItem,
  setSortItem,
  sortItem,
}) => {
  return (
    <div className="product-sidebar">
      <div className="sidebar-item">
        <h4 className="product-sidebar-item">اختيار نوع السلعه</h4>
        <ProductFilterBox
          filterItem={filterItem}
          setFilterItem={setFilterItem}
        />
      </div>
      <div className="sidebar-item">
        <h4 className="product-sidebar-item"> ترتيب حسب السعر </h4>
        <ProductSortBox sortItem={sortItem} setSortItem={setSortItem} />
      </div>
    </div>
  );
};

export default ProductSidebar;
