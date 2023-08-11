import React from "react";
import Image from "next/image";
export default function AboutUS() {
  return (
    <div className="flex items-center justify-center mt-12 flex-col		">
      <section className="flex w-10/12 my-[80px] gap-20	">
        <div className="mt-28 ml-22">
          <h1 className="text-[45px] mb-12 font-bold text-[#292E40] ;">
            درباره دانش‌مال
          </h1>
          <p className="text-2xl  font-normal text-[#878080] leading-[46.5px]">
            دانش‌مال با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات
            دانش‌بنیان ساخت ایران طراحی شده است. دانش‌مال به عنوان نخستین و
            بزرگترین نمایشگاه و بازار محصولات دانش بنیان ساخت ایران با بهره‌گیری
            از فناوری پیشرفته واقعیت مجازی تلاش کرده است تا حس و تجربه بازدید و
            خرید دنیای واقعی را در دنیای مجازی فراهم نماید
          </p>
        </div>

        <Image
          width={593}
          height={587}
          src="/images/Asset 1 10.png"
          layout="responsive"
          alt="Picture of the author"
        />
      </section>
      <section className="flex w-10/12 my-[10px]">
        <div className="mt-[25px]">
          <h1
            className="text-[35px] font-bold text-[#292E40] mb-8	;
"
          >
            شرکت‌های دانش‌بنیان و واحدهای فناور
          </h1>
          <p className="text-2xl font-normal text-[#878080] leading-[33px]">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>
        <div className="container relative flex justify-center items-center">
          <Image
            width={396}
            height={358}
            src="/images/Vector%20(2).png"
            layout="fixed"
            alt="Background Image"
          />

          <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/Group1056.png"
              width={195}
              height={195}
              layout="fixed"
              alt="Overlay"
            />
          </div>
        </div>
      </section>
      <section className="flex w-10/12	 my-[10px]">
        <div className="container relative flex justify-center items-center">
          <Image
            width={396}
            height={358}
            src="/images/Vector%20(8).png"
            layout="fixed"
            alt="Background Image"
          />

          <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className=" items-center">
              <Image
                src="/images/Group%20(3).png"
                width={134.51}
                height={145}
                layout="fixed"
                alt="Overlay"
                className="mx-1 inline "
              />
              <Image
                src="/images/Group%20(4).png"
                width={50.67}
                height={89.21}
                layout="fixed"
                alt="Overlay"
                className=" inline"
              />
            </div>
          </div>
        </div>

        <div className="mt-28">
          <h1
            className="text-[35px] font-bold text-[#292E40] mb-8	;
"
          >
            مشتریان
          </h1>
          <p className="text-2xl font-normal text-[#878080] leading-[33px]">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>
      </section>
      <section className="flex w-10/12 my-[10px]	">
        <div className="mt-[25px]">
          <h1
            className="text-[35px] font-bold text-[#292E40] mb-8	;
"
          >
            مسئولان و سیاست‌گذاران
          </h1>
          <p className="text-2xl font-normal text-[#878080] leading-[33px]">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>

        <div className="container relative flex justify-center items-center">
          <Image
            width={396}
            height={358}
            src="/images/Vector%20(2).png"
            layout="fixed"
            alt="Background Image"
          />

          <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/Group1056.png"
              width={195}
              height={195}
              layout="fixed"
              alt="Overlay"
            />
          </div>
        </div>
      </section>
    </div>
  );
}