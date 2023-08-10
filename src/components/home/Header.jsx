'use client';
import Link from "next/link"
import Image from "next/image"
import {useEffect} from "react";

function Header() {
    return (
        <section className="flex">
            <div className="w-[40%]">
                    <Image
                        alt="header-vector"
                        src='/header.svg'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className="w-[60%] header-background flex justify-center items-center">
                <div className="w-2/3 mt-20">
                    <h1 className="text-[2rem] font-bold">
                        <span className="text-mainOrange">دانش مال</span>   نخستین و بزرگترین بازار محصولات دانش بنیان ساخت ایران با فناوری واقعیت مجازی
                    </h1>
                    <p className="mt-5 text-[0.9rem] text-neutral-500">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک الورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ست.
                    </p>
                    <div className="mt-5">
                        <button className="text-white font-bold rounded-full px-20 py-2 bg-mainOrange hover:bg-transparent hover:border hover:border-mainOrange hover:border-1 hover:text-neutral-500">ورود به نمایشگاه</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;