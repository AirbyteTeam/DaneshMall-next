"use client"
import {useForm} from "react-hook-form"
import React from 'react'


export default function CommentForm() {
    const  {register,handleSubmit,formState:{errors},watch} = useForm()
    const FormSubmiter=()=>{
        const FormData={
            name:watch("name"),
            mail:watch("mail"),
            text:watch("text")
        
        }
    }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(FormSubmiter)}>
        <input type="text" className=" border px-2 bg-[#fefbf8] border-[#b4bec8] placeholder:text-[#9f9f9f]  py-3 text-xs rounded-md" placeholder="نام و نام خانوادگی" {...register("name",{required:true})}/>
        {errors.name && errors.name.type=="required" && <div className="text-xs text-red-700">لطفا نام و نام خانوادگی خود را وارد کنید!</div>}

        <input type="email" className=" border px-2 bg-[#fefbf8] border-[#b4bec8] placeholder:text-[#9f9f9f]  py-3 text-xs rounded-md" placeholder="آدرس ایمیل خود را وارد کنید" {...register("mail",{required:true})}/>
        {errors.mail && errors.mail.type=="required" && <div className="text-xs text-red-700">لطفا ایمیل خود را وارد کنید!</div>}

        <textarea rows="10" className="peer px-2  border bg-[#fefbf8] border-[#b4bec8] placeholder:text-[#9f9f9f]   py-2  text-xs rounded-md " placeholder=" متن پیام خود را وارد کنید" {...register("text",{required:true})}/>
        
        {errors.text && errors.text.type=="required" && <div className="text-xs text-red-700">لطفا متن پیام خود را وارد کنید!</div>}
        <button type="submit" className="bg-[#f8961f] hover:bg-[#ff8c00] text-white py-2 text-lg font-bold rounded-lg my-4">ثبت</button>
    </form>
  )
}
