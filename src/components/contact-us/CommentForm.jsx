"use client"
import {useForm} from "react-hook-form"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function CommentForm() {
   
  
  const notificationFormSubmiter = () => toast.success(" ! پیام شما با موفقیت ثبت شد ");
    const  {register,handleSubmit,resetField,formState:{errors},watch,} = useForm()
    const FormSubmiter=()=>{
         
        const FormData={
            fullName:watch("fullName"),
            email:watch("email"),
            message:watch("message")
        } 
       
        
        fetch("http://localhost:8090/api/v1/comment/save", {
          method: 'POST',
          body: JSON.stringify({
            fullName:FormData.fullName,
            email:FormData.email,
            message:FormData.message
          }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
        },{cache:"no-store"})
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch(error=>console.log(error)) 
      
           resetField("fullName")
           resetField("email")
           resetField("message")
        
        
      
        
        
    }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(FormSubmiter)}>
        <input  type="text" className=" border px-2 bg-[#fefbf8] border-[#b4bec8] placeholder:text-[#9f9f9f]  py-3 text-xs rounded-md" placeholder="نام و نام خانوادگی" {...register("fullName",{required:true,pattern:{value:/^[\u0600-\u06FF\s]+$/}})}/>
        {errors.fullName && errors.fullName.type=="required" && <div className="text-xs text-red-700">لطفا نام و نام خانوادگی خود را وارد کنید!</div>}
        {errors.fullName && errors.fullName.type=="pattern" && <div className="text-xs text-red-700">لطفا نام و نام خانوادگی خود را به فرمت صحیح ( بدون رقم و فقط با حروف فارسی) وارد کنید!</div>}

        <input type="mail" className=" border px-2 bg-[#fefbf8] border-[#b4bec8] placeholder:text-[#9f9f9f]  py-3 text-xs rounded-md" placeholder="آدرس ایمیل خود را وارد کنید" {...register("email",{required:true,pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,}})}/>
        {errors.email && errors.email.type=="required" && <div className="text-xs text-red-700">لطفا ایمیل خود را وارد کنید!</div>}
        {errors.email && errors.email.type=="pattern" && <div className="text-xs text-red-700">لطفا ایمیل خود را  به صورت صحیح وارد کنید!</div>}

        <textarea rows="10" className="peer px-2  border bg-[#fefbf8] border-[#b4bec8] placeholder:text-[#9f9f9f]   py-2  text-xs rounded-md " placeholder=" متن پیام خود را وارد کنید" {...register("message",{required:true})}/>
        
        {errors.message && errors.message.type=="required" && <div className="text-xs text-red-700">لطفا متن پیام خود را وارد کنید!</div>}
        <button type="submit" onClick={notificationFormSubmiter} className="bg-[#f8961f] hover:bg-[#ff8c00] text-white py-2 text-lg font-bold rounded-lg my-4">ثبت</button>
        <ToastContainer
           position="bottom-right"
           autoClose={2000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           className="font-bold"
           pauseOnHover={false}
           theme="colored"
        />
    </form>
  )
  }
