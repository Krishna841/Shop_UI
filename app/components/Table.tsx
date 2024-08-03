"use client";

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import data, { Product } from "../data";
import SingleProduct from "./SingleProduct";
import SingleProductvariants from "./SingleProductVariants";
import { Reorder } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Table() {
  const [variantCount, setvariantCount] = useState(2);
  const [products, setProducts] = useState<Product[]>(data);

  const makePrimary = (index : number) =>{
    setProducts((prev: Product[]) => {
      return prev.map((prod) => {
          if (index < 0 || index >= prod.variants.length) {
              throw new Error("Variant index out of bounds");
          }

          let selectedVariant = prod.variants[index];
          let newArr = [selectedVariant];

          for (let i = 0; i < prod.variants.length; i++) {
              if (i !== index) {
                  newArr.push(prod.variants[i]);
              }
          }

          // Return the updated product with the new variants array
          return {
              ...prod,
              variants: newArr,
          };
      });
  });
  }
  return (
    <div className="w-full bg-gray-100 rounded-lg p-12">
      <div className="mx-8 my-6 w-auto flex">
        <div className="min-w-[35%] justify-start items-center">
          <div className="flex w-full">
            <div className="text-md font-semibold text-gray-400 text-center w-full py-2 border-r border-gray-200">
              Product Filter
            </div>
          </div>
          <Reorder.Group values={products} onReorder={setProducts}>
            {products.map((product) => (
              <SingleProduct
                key={product.id}
                product={product}
                setProducts={setProducts}
              />
            ))}
          </Reorder.Group>
          <div
            className="bg-white h-10 w-10 flex flex-col justify-center items-center shadow-sm cursor-pointer"
            onClick={() => {
              setProducts((prev) => [
                ...prev,
                {
                  id: products.length + 1,
                  name: "Product",
                  variants: [],
                  filters: [],
                },
              ]);
              toast.success("State Added");
            }}
          >
            <FiPlus />
          </div>
        </div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <div className="w-full">
            <div className="flex items-center py-2">
              {[...Array(variantCount)].map((_, index) => (
                <div
                  key={index}
                  className="w-64 flex justify-between items-center px-6 py-2 text-gray-400 border-r border-gray-200 shrink-0"
                >
                  <div className="text-md font-semibold w-64">
                    {index === 0 ? "Primary variant" : `Variant ${index + 1}`}
                  </div>
                  <BsThreeDotsVertical onClick={()=>makePrimary(index)
                  } />
                </div>
              ))}
            </div>
            {products.map((product) => (
              <SingleProductvariants
                key={product.id}
                product={product}
                variantCount={variantCount}
                setvariantCount={setvariantCount}
                setProducts={setProducts}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
