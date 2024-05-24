import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ItemProduct(props) {
  return (
    <div className="w-4/12 p-4">
      <div className="border-[1px] border-gray-200 border-solid rounded-lg min-h-6 p-3 flex flex-col gpa-4">
        <div className="relative">
          <Image
            src={`${props.image ? props.image : "/images/no-image-square.jpg"}`}
            width={1049}
            height={1520}
            alt=""
          />
        </div>
        <Link
          href={`${props.link ? props.link : "/"}`}
          className="bg-slate-400 rounded-lg text-white px-4 py-3 text-center hover:bg-black"
        >
          Buy now
        </Link>
        <h5 className="text-lg">
          {props.category ? props.category : "no category"}
        </h5>
        <h2 className="text-3xl font-bold">
          {props.title ? props.title : "no title"}
        </h2>
        <div>star</div>
        <div className="flex justify-between text-lg opacity-75">
          {props.price ? props.price : "no price"}
        </div>
      </div>
    </div>
  );
}
