"use client"
import React from "react";
import Image from "next/image";

export default function Card({ title, id, redirectUrl ,imgUrl}) {
  return (
    <a href={redirectUrl} target="_blank" className="cardcontainer cursor-pointer w-[30%] bg-[#fffff] border flex flex-col items-center relative" key={id}>
            <div className="cardImage2 w-full h-[20rem] text-xl font-bold text-[#364F6B] absolute top-0 left-0 text-center">
                <div className="w-full h-full flex justify-center items-center ">
                    <div className="w-[90%] h-[90%] flex justify-center items-center  border border-2 border-black">
                        <h4>مشاهده غرفه</h4>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20rem]">
                <img
                    src={imgUrl}
                    alt="Card images"
                    className="w-full h-full object-cover cardImage1 transition duration-300 transform"/>
            </div>

            <div className="mt-9">
                <h1 className="text-xl font-bold text-[#364F6B] text-center">
                    {title}
                </h1>
            </div>
    </a>
  );
}
