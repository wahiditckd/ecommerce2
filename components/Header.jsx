import React from "react";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";

export default function header() {
  return (
    <div className="bg-color-main ">
      <div className="wrapper">
        <div className="flex justify-between items-center py-5">
          <Link href="#" className="text-white text-2xl font-extrabold">
            MyCommerce
          </Link>
          <div>
            <input
              type="text"
              placeholder="search..."
              className="py-2 px-3 rounded-lg min-w-[300px]"
            />
          </div>
          <div className="text-5xl text-white">
            <TiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
