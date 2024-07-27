"use client";
import { useState } from "react";
import Image from "next/image";
export default function SKU() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="py-6">
      <div
        style={{ fontFamily: "Recoleta, sans-serif" }}
        className="text-2xl font-semibold"
      >
        <span className="">Use different designs for remaining SKU's</span>
        <label className="inline-flex items-center cursor-pointer pl-4">
          <input
            type="checkbox"
            value=""
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
        </label>
      </div>
      <div className="text-sm h-64 font-light my-4 flex w-full justify-between items-center">
        <div className="h-full bg-gray-100 w-full flex justify-center items-center">
          <div className="text-center w-[50%]">N/A</div>
        </div>
        <div className="text-center flex w-full justify-evenly">
          <div className="bg-white h-40 pt-6 flex flex-col justify-center items-center shadow-sm">
            <div className="w-full flex justify-center items-center rounded-xl">
              <div className="rounded-md overflow-hidden relative">
                <Image
                  src={"https://via.placeholder.com/200x200.png?text=Image+1"}
                  alt={"Image+1"}
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div className="text-sm font-light px-4 pb-4">
              <div className="w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                {"Multi Image - fallback"}
              </div>
            </div>
          </div>
          <div className="bg-white h-40 pt-6 flex flex-col justify-center items-center shadow-sm">
            <div className="w-full flex justify-center items-center rounded-xl">
              <div className="rounded-md overflow-hidden relative">
                <Image
                  src={"https://via.placeholder.com/200x200.png?text=Image+2"}
                  alt={"Image+2"}
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div className="text-sm font-light px-4 pb-4">
              <div className="w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                {"4 Image - fallback"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
