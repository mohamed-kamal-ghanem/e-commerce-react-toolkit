import React from "react";

const ProductSortBox = ({ setSortItem, sortItem }) => {
  const onChangeHandler = (e) => {
    setSortItem(e.target.id);
  };
  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="noSort"
        />
        <label htmlFor="noSort"> عشوائى</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low"> من الاقل الى الاعلى</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={onChangeHandler}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high">من الاعلى الى الاقل </label>
      </div>
    </div>
  );
};

export default ProductSortBox;
