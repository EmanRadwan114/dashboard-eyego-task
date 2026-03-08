import React from "react";
import { IProduct } from "../types/products.types";
import Image from "next/image";

interface IProps {
  product: IProduct;
}

const ProductRow: React.FC<IProps> = ({ product }) => {
  return (
    <tr>
      {/* img */}
      <td className="p-2">
        <Image
          src={product.thumbnail}
          width={100}
          height={100}
          alt={product.title}
          className="object-contain h-28 w-full rounded-t-md"
        />
      </td>
      {/* title */}
      <td className="p-2">
        <h3 className="font-medium text-sm capitalize text-neutral-800">
          {product.title}
        </h3>
      </td>

      {/* desc */}
      <td className="p-2">
        <p className="text-sm text-neutral-600">
          {product.description.slice(0, 60)}...
        </p>
      </td>
      {/* category badge */}
      <td className="p-2 ">
        <span className="bg-orange-700 rounded-full text-xs px-2 py-0.5 text-white capitalize font-medium">
          {product.category}
        </span>
      </td>
      {/* availability status badge */}
      <td className="p-2">
        <span className="bg-green-600 rounded-full text-xs px-2 py-0.5 text-white capitalize font-medium">
          {product.availabilityStatus}
        </span>
      </td>
      {/* price */}
      <td className="p-2">
        <div className="flex flex-col gap-1 text-sm">
          <span className="text-neutral-800">{product.price}$</span>
          {/* discount percentage */}
          {product.discountPercentage && (
            <span className="text-green-600">
              {product.discountPercentage}% off
            </span>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
