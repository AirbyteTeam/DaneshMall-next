import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className='flex items-center justify-center  flex-col px-10 md:px-32'>
    <section className="flex flex-col-reverse md:flex-row my-24 gap-20	">
        <div className="flex-1 flex flex-col justify-center ml-22">
          <h1 className="text-[2.1rem] mb-8 font-bold text-[#292E40] ;">
            درباره <span className='text-mainOrange'>دانش‌مال</span>
          </h1>
          <p className="text-[1.1rem] font-normal text-[#878080] leading-[46.5px]">
            <span className='text-mainOrange'>دانش‌مال</span> با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات
            دانش‌بنیان ساخت ایران طراحی شده است. <span className='text-mainOrange'>دانش‌مال</span> به عنوان نخستین و
            بزرگترین نمایشگاه و بازار محصولات دانش بنیان ساخت ایران با بهره‌گیری
            از فناوری پیشرفته واقعیت مجازی تلاش کرده است تا حس و تجربه بازدید و
            خرید دنیای واقعی را در دنیای مجازی فراهم نماید
          </p>
        </div>
        <div className="flex-1">
          <Image src="/aboutUsVector.svg" alt="costumer" width={0}
                 height={0}
                 sizes="100vw"
                 style={{width: '100%', height: 'auto'}}/>
        </div>
      </section>
      </div>
  )
}
