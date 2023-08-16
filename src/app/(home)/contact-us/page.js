import React from "react";
import Image from "next/image";
import CommentForm from "@/components/contact-us/CommentForm";
import WaysToContactUs from "@/components/contact-us/WaysToContactUs";

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-16  my-8">
      <div className="flex md:flex-row flex-col justify-between md:gap-4 gap-8 md:px-4 px-3 shadow-2xl rounded-[1.875rem] shadow-[#4b00811f] pt-10 pb-4 md:mx-5 lg:mx-10 lg:px-10 mx-4">
        <div className="flex justify-center items-center">
          <Image
            src={"/contactUs.svg"}
            quality={100}
            alt="contact-us"
            priority={true}
            width={660}
            height={400}
          />
        </div>
        <div className="">
          <div className="flex justify-between my-8">
            <div>
              <div className="md:text-4xl text-3xl flex font-bold">
                <p className="">
                  تماس با <span className="text-[#f8961f]"> دانش مال</span>
                </p>
              </div>
              <div className="my-8">
                <p className="text-[#202020] text-sm">
                  کاربر گرامی دانش مال؛ باعث افتخار ماست تا نظرات خود را با ما
                  از طریق این فرم به اشتراک بگذارید.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                priority={true}
                quality={100}
                src={"/send.svg"}
                alt="paper-plane"
                width={150}
                height={150}
              />
            </div>
          </div>
          <CommentForm />
        </div>
      </div>
      <div className="flex gap-4 md:flex-row flex-col justify-between md:px-10 px-4 mx-4 lg:mx-16 my-5">
        <div className="flex justify-center items-center">
          <WaysToContactUs />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={"https://cloud.daneshmall.com/Rectangle 6064.png"}
            width={600}
            height={150}
            alt="map"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
