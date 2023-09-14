import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderOfAboutUs() {
  return (
    <div className='w-full header-about-us py-28 lg:px-32 px-20 flex md:flex-row flex-col-reverse justify-between gap-8'>
        <div className='flex flex-col space-y-20 '>
            <div>
                <p className='text-white sm:text-4xl text-3xl font-bold'>
                     <span className='text-mainOrange'>دانش‌مال</span> نخستین و بزرگترین نمایشگاه و بازار محصولات دانش بنیان  
                </p>
            </div>
            <div>
                <p className='text-[#ffffffd9] text-sm'>
                    
            <span className='text-mainOrange'>دانش‌مال</span> با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات
            دانش‌بنیان ساخت ایران طراحی شده است. <span className='text-mainOrange'>دانش‌مال</span> به عنوان نخستین و
            بزرگترین نمایشگاه و بازار محصولات دانش بنیان ساخت ایران با بهره‌گیری
            از فناوری پیشرفته واقعیت مجازی تلاش کرده است تا حس و تجربه بازدید و
            خرید دنیای واقعی را در دنیای مجازی فراهم نماید
          
                </p>
            </div>
            <div>
                <Link href={"https://portal.daneshmall.com"}>
                    <button className='text-white header-about-us-button px-5 p-3 rounded-lg'>
                        ورود به نمایشگاه  
                    </button>
                </Link>
            </div>
        </div>
        <div className='flex gap-4 sm:mb-0 mb-12'>
            <div className='mt-16'>
                <Image  className="2xl:w-[18rem] xl:w-[22rem] lg:w-[30rem] md:w-[40rem]  sm:w-72 w-[22rem] " src={"/Group 28.svg"} height={0} width={0} quality={100}/>
            </div>
            <div className=''>
                <Image  className="2xl:w-[18rem] xl:w-[22rem] lg:w-[30rem] md:w-[40rem]  sm:w-72 w-[22rem] " src={"/Group 28.svg"} height={0} width={0} quality={100}/>
            </div>
        </div>

    </div>
  )
}
