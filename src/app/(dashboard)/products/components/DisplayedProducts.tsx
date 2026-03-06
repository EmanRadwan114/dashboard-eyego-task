"use client";
import React, { useEffect } from "react";
import { IProduct } from "../types/products.types";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";
import { setProducts } from "../store/products.slice";

interface IProps {
  products: IProduct[];
}

const DisplayedProducts: React.FC<IProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const filteredCachedProducts = useAppSelector(
    (state) => state.products.filteredCachedProducts,
  );

  useEffect(() => {
    dispatch(setProducts(products));
  }, []);

  return (
    <>
      {filteredCachedProducts.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCachedProducts?.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[30vh] w-full">
          <p className="text-xl capitalize">no products found</p>
        </div>
      )}
    </>
  );
};

export default DisplayedProducts;
