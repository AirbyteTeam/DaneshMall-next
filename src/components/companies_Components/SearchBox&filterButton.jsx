import React from "react";
import Image from "next/image";

export default function SearchBox_filterButton() {
  return (
    <>
      <div className="flex items-center justify-between px-40 my-[50px]">
        <button className="border px-6 py-3 rounded-3xl">
          <div className="flex items-center">
            <p className="ml-2">دسته‌بندی</p>
            <Image
              width={20}
              height={20}
              src="/images/Vector (10).png"
              alt="filter icon"
            />
          </div>
        </button>
        <div className="flex items-center">
          <div></div>
          <div className="py-3 px-4  border rounded-r-lg border-l-0 ">
            <Image
              width={24}
              height={24}
              src="/images/primary-shape.png"
              alt="magnifier"
              className="right-[3px]  "
            />
          </div>

          <input
            type="text"
            className="py-3 w-[30.5vw] border rounded-l-lg border-r-0	"
          ></input>

          <button className="px-10 py-3 rounded-l-lg bg-[#F8961F] text-[#FFFFFF]">
            جستجو
          </button>
        </div>
      </div>
    </>
  );
}
