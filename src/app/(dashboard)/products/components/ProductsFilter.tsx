"use client";
import React, { useState } from "react";
import { ICategory } from "../types/categories.types";
import { useAppDispatch } from "@/lib/redux-toolkit/hooks";
import { setSelectedCategory } from "../store/products.slice";

interface IProps {
  categories: ICategory[];
}

const ProductsFilter: React.FC<IProps> = ({ categories }) => {
  const [category, setCategory] = useState("");
  const dispatch = useAppDispatch();

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    setCategory(e.target.value);
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <select
      value={category}
      onChange={handleCategoryChange}
      className="outline outline-gray-500 rounded-md p-2 focus-within:ring-2 focus-within:ring-foreground focus-within:outline-offset-4 w-full"
    >
      <option value="" disabled>
        -- Select Category --
      </option>
      {categories?.map((c) => (
        <option value={c.slug} key={c.slug}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default ProductsFilter;
