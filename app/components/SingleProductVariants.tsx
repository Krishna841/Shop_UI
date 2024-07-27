"use client";
import { variant, Item, Items, Product } from "../data";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiPlus, FiEdit } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { Dialog, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";

interface Props {
  product: Product;
  variantCount: number;
  setvariantCount: React.Dispatch<React.SetStateAction<number>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
export default function SingleProductvariants({
  product,
  variantCount,
  setvariantCount,
  setProducts,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<variant | null>(null);

  const addOrChangeDesign = (item: Item) => {
    if (selectedDesign) {
      setProducts((prev) =>
        prev.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              variants: p.variants.map((v) => {
                if (v.id === selectedDesign.id) {
                  return {
                    ...v,
                    name: item.name,
                    image: item.image,
                  };
                }
                return v;
              }),
            };
          }
          return p;
        })
      );
      toast.success("Variant template updated");
      setSelectedDesign(null);
    } else {
      setProducts((prev) =>
        prev.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              variants: [
                ...p.variants,
                {
                  id: p.variants.length + 1,
                  name: item.name,
                  image: item.image,
                },
              ]
            };
          }
          return p;
        })
      );
      toast.success("Variant template updated");
    }
    setIsOpen(false);
  };

  return (
    <div className="flex items h-full w-full shrink-0 group">
      {[...Array(variantCount)].map((_, index) => {
        const variant =
          product.variants.length > index
            ? product.variants[index]
            : { name: "variant", image: "", id: index + 1 };
        return (
          <div
            key={variant.id}
            className="w-64 text-3xl flex items-center mt-6 mb-8 justify-center font-semibold border-r border-gray-200 h-full px-4 -my-2 shrink-0"
          >
            {variant.id > product.variants.length ? (
              <div>
                <div className="bg-white w-40 h-40 flex flex-col justify-center items-center shadow-sm">
                  <div className="flex justify-center items-center rounded-lg px-3 border border-gray-200 mx-4">
                    <div
                      className="rounded-md overflow-hidden py-2 px-1 text-xl font-semibold flex justify-between items-center cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <FiPlus />
                      <span className="text-sm ml-1 font-normal">
                        Add Design
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white h-40 pt-6 flex flex-col justify-center items-center shadow-sm">
                <div className="w-full flex justify-center items-center rounded-xl">
                  <div className="rounded-md overflow-hidden relative">
                    <div
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer bg-white px-3 py-2 rounded-lg hidden group-hover:block"
                      onClick={() => {
                        setIsOpen(true);
                        setSelectedDesign(variant);
                      }}
                    >
                      <FiEdit />
                    </div>
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <div className="text-sm font-light px-4 pb-4">
                  <div className="w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                    {variant.name}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="w-32 text-3xl flex items-center pt-16 mt-6 pb-10 justify-center font-semibold h-full px-4 shrink-0">
        <div
          className="bg-white h-10 w-10 flex flex-col justify-center items-center shadow-sm cursor-pointer"
          onClick={() => {
            setvariantCount((prev) => variantCount + 1);
            toast.success("Variant Added");
          }}
        >
          <FiPlus />
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        ></div>
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <div className="max-w-2xl  w-full bg-white rounded-lg overflow-hidden">
            <div className=" flex justify-between items-center w-full p-4 pt-20 relative border-b border-gray-200 pb-10">
              <div
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={() => setIsOpen(false)}
              >
                <IoMdClose />
              </div>
              <div className="absolute -top-10 -left-8 rounded-full border border-gray-200 p-6 z-60">
                <div className=" text-green-400 bg-transparent text-3xl font-semibold rounded-full border border-gray-200 p-6">
                  <div className=" text-green-400 bg-transparent text-3xl font-semibold rounded-full border border-gray-200 p-6">
                    <IoImageOutline className="drop-shadow-lg shadow-green-500" />
                  </div>
                </div>
              </div>
              <DialogTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 z-[60]"
              >
                Select a design to link
              </DialogTitle>
              <div className="mt-2 relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-56 rounded-lg border border-gray-300 px-8 py-3 text-sm text-gray-900"
                />
                <RiSearchLine className="w-5 h-5 mr-2 absolute left-1 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-4 h-96 overflow-y-scroll">
              {Items.map((item) => (
                <div key={item.image}>
                  <div className="group relative w-full">
                    <div
                      className="absolute top-[50%] left-[50%] -translate-x-[80%] -translate-y-[50%] cursor-pointer bg-white px-3 py-2 rounded-md hidden group-hover:block text-sm"
                      onClick={() => addOrChangeDesign(item)}
                    >
                      Insert
                    </div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="text-xs my-1 font-light w-[120px]">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
