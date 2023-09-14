import React from 'react'
import Image from "next/image";

export default function InformationOfAboutUs() {
  return (
    <div className="flex items-center justify-center mt-12 flex-col px-10 md:px-32">
      <section className="flex flex-col md:flex-row my-10 gap-2">
        <div className="flex-[2.1] flex flex-col justify-center">
          <h1
            className="text-[2rem] font-bold text-[#292E40] mb-8">
            شرکت‌های دانش‌بنیان و واحدهای فناور
          </h1>
          <p className="text-[1.1rem] font-normal text-[#878080] leading-[33px]">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>
        <div className="flex-1 flex">
          <Image src="/aboutusv1.svg" alt="costumer" width={0}
                 height={0}
                 sizes="100vw"
                 style={{width: '100%', height: 'auto'}}/>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row my-10 gap-5">
        <div className="flex-1 flex">
          <Image src="/aboutusv2.svg" alt="costumer" width={0}
                 height={0}
                 sizes="100vw"
                 style={{width: '100%', height: 'auto'}}/>
        </div>
        <div className="flex-[2.1] flex flex-col justify-center">
          <h1
            className="text-[2rem] font-bold text-[#292E40] mb-8">
              بازدیدکنندگان
          </h1>
          <p className="text-[1.1rem] font-normal text-[#878080] ">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>
      </section>
      
      <section className="flex flex-col md:flex-row my-10 gap-2">
        <div className="flex-[2.1] flex flex-col justify-center">
          <h1
              className="text-[2rem] font-bold text-[#292E40] mb-8">
            سیاستگذاران
          </h1>
          <p className="text-[1.1rem] font-normal text-[#878080] leading-[33px]">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>
        <div className="flex-1 flex">
          <Image src="/aboutusv1.svg" alt="costumer" width={0}
                 height={0}
                 sizes="100vw"
                 style={{width: '100%', height: 'auto'}}/>
        </div>
      </section>
    </div>
  )
}
