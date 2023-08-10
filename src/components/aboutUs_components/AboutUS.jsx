import React from "react";
import Image from "next/image";
export default function AboutUS() {
  return (
    <div className="flex items-center justify-center mt-12 flex-col		">
      <section className="flex w-10/12 my-20 	">
        <div>
          <h1 className="text-5xl font-bold text-[#292E40] ;">
            درباره دانش‌مال
          </h1>
          <p className="text-2xl font-normal text-[#878080]">
            دانش‌مال با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات
            دانش‌بنیان ساخت ایران طراحی شده است. دانش‌مال به عنوان نخستین و
            بزرگترین نمایشگاه و بازار محصولات دانش بنیان ساخت ایران با بهره‌گیری
            از فناوری پیشرفته واقعیت مجازی تلاش کرده است تا حس و تجربه بازدید و
            خرید دنیای واقعی را در دنیای مجازی فراهم نماید
          </p>
        </div>

        <Image
          width={700}
          height={500}
          src="/images/Asset 1 10.png"
          layout="responsive"
          alt="Picture of the author"
        />
      </section>
      <section className="flex w-10/12 my-20">
        <div>
          <h1
            className="text-5xl font-bold text-[#292E40] mb-8	;
"
          >
            شرکت‌های دانش‌بنیان و واحدهای فناور
          </h1>
          <p className="text-2xl font-normal text-[#878080]">
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
      <section className="flex w-10/12	 my-20">
      <div className="container relative flex justify-center items-center">
  <Image
    width={396}
    height={358}
    src="/images/Vector%20(8).png"
    layout="fixed"
    alt="Background Image"
    className="backgroundImage"
  />

  <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
    <Image
      src="/images/Group%20(3).png"
      width={134.51}
      height={145}
      layout="fixed"
      alt="Overlay"
      className="mx-2"
    />
    <Image
      src="/images/Group%20(4).png"
      width={50.67}
      height={89.21}
      layout="fixed"
      alt="Overlay"
      className="mx-2"
    />
  </div>
</div>

        <div>
          <h1
            className="text-5xl font-bold text-[#292E40] mb-8	;
"
          >
            مشتریان
          </h1>
          <p className="text-2xl font-normal text-[#878080]">
            تبلیغ، معرفی و ترویج کالا و خدمات تولیدی شرکت های دانش بنیان و
            واحدهای فناور در بازرهای داخل کشور و بازارهای بین المللی با کمترین
            هزینه ایجاد بستری برای فروش کالا و خدمات تولیدی شرکت های دانش بنیان
            و واحدهای فناور
          </p>
        </div>
      </section>
      <section className="flex w-10/12 my-20	">
        <div>
          <h1
            className="text-5xl font-bold text-[#292E40] mb-8	;
"
          >
            مسئولان و سیاست‌گذاران
          </h1>
          <p className="text-2xl font-normal text-[#878080]">
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
