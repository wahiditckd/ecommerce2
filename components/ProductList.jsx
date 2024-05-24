"ues client";
import React from "react";
import ItemProduct from "@/components/ItemProduct";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";

export default function ProductList() {
  const getQuery = async () => {
    return await getData("/products");
  };
  const query = useQuery({
    queryKey: ["product"],
    queryFn: getQuery,
  });
  if (query.isLoading) {
    return (
      <div className="wrapper relative flex justify-center mt-10">
        <div className="animate-pulse w-full flex gap-4">
          <div className="rounded-sm bg-slate-200 h-[300px] w-full"></div>
          <div className="rounded-sm bg-slate-200 h-[300px] w-full"> </div>
          <div className="rounded-sm bg-slate-200 h-[300px] w-full"></div>
        </div>
      </div>
    );
  }
  if (query.error) {
    return (
      <div className="wrapper">
        <div className="bg-red-500 text-white text-center p-5 my-7">
          error network
        </div>
      </div>
    );
  }
  console.log(query.data.data);
  return (
    <div className="relative flex flex-wrap -mx-4">
      <ItemProduct
        category="Mens"
        title="Fjalraven"
        image="/images/prod.jpg"
        price="$105"
      />
      <ItemProduct
        category="womens"
        title="Fjallraven - Foldsack No. 1 Backpac, Fits 15 Laptops"
        price="$125"
        image="/images/prod.jpg"
      />
      <ItemProduct category="child" />
      <ItemProduct category="electronic" />
    </div>
  );
}
