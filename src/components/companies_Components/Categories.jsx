"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Categories() {
  return (
    <div className="flex flex-col space-y-16 my-48">
      <div>
        <p className="text-[#303030] text-center font-bold text-xl">
          دسته بندی های نمایشگاه
        </p>
      </div>
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4 xl:mx-48 lg:mx-36 sm:mx-28 mx-16'>
    <Link href={"/companies/commercialization-services"}>
    <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6  '>
       
          <div>
               <Image src={`/capitalCopy.svg`} width={50} height={50} quality={100} alt="capitalCopy"/>
          </div>
          <div >
             <p className="text-[#413838] hover:text-black font-semibold ">
             خدمات تجاری سازی
             </p>
          </div>
       
     </div>
    </Link>
     <Link href={"/companies/advanced-machines-and-equipment"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6 '>
       
          <div>
               <Image src={`/equipment.svg`} width={50} height={50} quality={100} alt="equipment"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             ماشین آلات و تجهیزات پیشرفته
             </p>
          </div>
       
     </div>
     </Link>
     <Link href={"/companies/medical-supplies-and-equipment"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6 '>
       
          <div>
               <Image src={`/medicalkit.svg`} width={50} height={50} quality={100} alt="medicalkit"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             وسایل و ملزومات و تجهیزات پزشکی
             </p>
          </div>
       
     </div>
     </Link>
     <Link href={"/companies/medicine-industries"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6  '>
       
          <div>
               <Image src={`/packageCopy.svg`} width={50} height={50} quality={100} alt="packageCopy"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             دارو و فراورده های پیشرفته
             </p>
          </div>
       
     </div>
     </Link>
     <Link href={"/companies/laser-and-photonics"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6  '>
       
          <div>
               <Image src={`/packageboxCopy.svg`} width={50} height={50} quality={100} alt="packageboxCopy"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             سخت افزار های برق و الکترونیک
             </p>
          </div>
       
     </div>
     </Link>
    <Link href={"/companies/cultural-industries"}>
    <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6 '>
       
       <div>
            <Image src={`/engineering.svg`} width={50} height={50} quality={100} alt="engineering"/>
       </div>
       <div>
          <p className="text-[#413838] hover:text-black font-semibold ">
          صنایع فرهنگی - علوم انسانی و اجتماعی
          </p>
       </div>
    
    </div>
    </Link>
     <Link href={"/companies/software-industries"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6 '>
       
          <div>
               <Image src={`/cpu.svg`} width={50} height={50} quality={100} alt="cpu"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             فناوری اطلاعات و نرم افزارهای رایانه ای
             </p>
          </div>
       
     </div>
     </Link>
     <Link href={"/companies/advance-material-and-products"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6  '>
       
          <div>
               <Image src={`/biotechnology.svg`} width={50} height={50} quality={100} alt="biotechnology"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             مواد پیشرفته و فناوری های شیمیایی
             </p>
          </div>
       
     </div>
     </Link>
     <Link href={"/companies/food-industry"}>
     <div className='flex gap-8 items-center shadow-2xl shadow-[#2c2a2a0f] blur-[0.02px] rounded-xl px-4 py-6 '>
       
          <div>
               <Image src={`/industry.svg`} width={50} height={50} quality={100} alt="industry"/>
          </div>
          <div>
             <p className="text-[#413838] hover:text-black font-semibold ">
             کشاورزی - فناوری زیستی و صنایع غذایی
             </p>
          </div>
       
     </div>
     </Link>
 </div>
 </div>
  )
}
