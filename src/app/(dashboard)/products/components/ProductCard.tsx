import React from "react";
import { IProduct } from "../types/products.types";
import Image from "next/image";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="rounded-md shadow-md bg-white flex flex-col cursor-default">
      {/* img */}
      <div className="bg-neutral-50 relative rounded-t-md">
        <Image
          src={product.thumbnail}
          width={100}
          height={100}
          alt={product.title}
          className="object-contain h-28 w-full rounded-t-md"
        />
        {/* category badge */}
        <span className="absolute inset-e-2 top-2 bg-orange-700 rounded-full text-xs px-2 py-0.5 text-white capitalize font-medium">
          {product.category}
        </span>
        {/* availability status badge */}
        <span className="absolute inset-s-2 top-2 bg-green-600 rounded-full text-xs px-2 py-0.5 text-white capitalize font-medium">
          {product.availabilityStatus}
        </span>
      </div>

      {/* content */}
      <div className="flex flex-col gap-2 p-4 h-full">
        <h3 className="text-lg font-medium capitalize">{product.title}</h3>
        <p className="text-sm text-neutral-600">
          {product.description.slice(0, 100)}...
        </p>
        {/* price */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-neutral-800 text-lg">{product.price}$</span>
          {product.discountPercentage && (
            <span className="text-green-600">
              {product.discountPercentage}% off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
