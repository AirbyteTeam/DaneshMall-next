'use client';
import Link from "next/link"
import Image from "next/image"
import {useEffect} from "react";

function Cards() {
    return (
        <section className="vector-background bg-[#FCFCF7] h-screen">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="mt-5 w-[8rem] h-[2rem] bg-[#FFF1EC] text-mainOrange rounded-full text-[1rem]">
                    خدمات ما
                </h2>
                <h3 className="mt-5 font-bold text-2xl">
                    نمایشگاه و بازار محصولات دانش بنیان
                </h3>
            </div>
        </section>
    );
}

export default Cards;