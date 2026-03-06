"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/lib/redux-toolkit/hooks";
import { sortProductsByPrice } from "../store/products.slice";

const ProductsSortByPrice: React.FC = () => {
  const [sortByPrice, setSortByPrice] = useState("");
  const dispatch = useAppDispatch();

  const handleSortChange = (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    setSortByPrice(e.target.value);
    dispatch(sortProductsByPrice(e.target.value));
  };

  return (
    <select
      value={sortByPrice}
      onChange={handleSortChange}
      className="outline outline-gray-500 rounded-md p-2 focus-within:ring-2 focus-within:ring-foreground focus-within:outline-offset-4 w-full"
    >
      <option value="" disabled>
        -- Sort By Price --
      </option>
      <option value="asc">Low to High</option>
      <option value="dsc">High to Low</option>
    </select>
  );
};

export default ProductsSortByPrice;
