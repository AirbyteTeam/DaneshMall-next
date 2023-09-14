"use client"
import Link from "next/link"
import Image from "next/image"
import ScrollAnimation from 'react-animate-on-scroll';


function Header() {
    return (
        <section className="flex flex-col-reverse md:flex-row overflow-hidden">
            <div className="flex-1">
                    <Image
                        alt="header-vector"
                        src='/header.svg'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className="flex-1 header-background flex justify-center items-center">
            
                <div className="w-2/3 mt-20 flex justify-center">
                <ScrollAnimation  animateIn="animate__fadeInLeft">
                    <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[2rem] font-bold flex flex-col justify-center items-center text-center">
                    
                        <span className=" text-mainOrange text-[2rem] md:text-[1.6rem] lg:text-[2.7rem] mb-8">دانش‌مال</span><span>نخستین و بزرگترین بازار محصولات</span><span>دانش‌بنیان ساخت ایران با فناوری واقعیت مجازی</span>   </h1>
                        
                    
                   
                    <div className="mt-5 mb-10 md:my-5 flex justify-center">
                        <a href="https://entrance.daneshmall.com" className="text-white font-bold rounded-full px-16 lg:px-20 py-2 bg-mainOrange hover:bg-transparent hover:border hover:border-mainOrange hover:border-1 hover:text-neutral-500">ورود به نمایشگاه</a>
                    </div>
                    </ScrollAnimation>
                </div>
                
                
                
                
            </div>
        </section>
    );
}

export default Header;