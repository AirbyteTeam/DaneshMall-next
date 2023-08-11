import React from "react";
import Image from "next/image";
export default function Card({ title, id }) {
  return (
    <div
      className="cardcontainer w-[382px] h-[367px] bg-[#fffff] border flex flex-col items-center relative"
      key={id}
    >
      <div className="cardImage2 box-border text-xl font-bold text-[#364F6B] text-center relative">
        <p
          className="w-[350px] h-[250px] border-4 mt-2 mb-2 text-black text-[22px] font-bold	 border-black
   flex items-center justify-center relative z-10"
        >
          مشاهده غرفه
        </p>
        <div
          className="absolute top-0 right-[-15.5px] w-[382px] h-full bg-white opacity-10	 z-0"
          style={{ backgroundImage: "url('/images/3147860.jpg')" }}
        ></div>
      </div>

      <Image
        width={382}
        height={265}
        src="/images/3147860.jpg"
        alt="Card images"
        className="cardImage1 transition duration-300 transform  "
      />

      <div className="mt-9">
        <h1 className="text-xl font-bold text-[#364F6B] text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
