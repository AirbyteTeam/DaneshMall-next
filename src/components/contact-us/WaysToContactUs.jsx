import React from 'react'
import {FiPhoneCall} from "react-icons/fi"
import {MdEmail, MdLocationPin} from "react-icons/md"
import {FiMail} from "react-icons/fi"

export default function WaysToContactUs() {
  return (
    
    <div className='flex flex-col h-full justify-between'>
        <div className='flex lg:my-0 my-4 '>
            <div className='flex items-center justify-center'>
                <div className='bg-[#f8961f] text-white rounded-full flex items-center justify-center p-3'>
                    <FiPhoneCall className='text-2xl -rotate-90 '/>
                </div>
            </div>
            <div className="flex flex-col mx-2">
				<span className="text-[#1D1D1D] font-bold text-lg">
                    شماره تماس :
                </span>
				<p className=' text-base' >
                    29905285(021)
                </p>
			</div>
        </div>
        <div className='flex lg:my-0 my-4'>
            <div className='flex items-center justify-center'>
                <div className='bg-[#f8961f] text-white rounded-full flex items-center justify-center p-3'>
                    <FiMail className='text-2xl'/>
                </div>
            </div>
            <div className="flex flex-col mx-2">
			    <span className="text-[#1D1D1D] font-bold text-lg">
                    ایمیل :
                </span>
			    <p className=' text-base' >
                    info@Daneshmall.ir
                </p>
			</div>
        </div>
        <div className='flex  lg:my-0 my-4'>
           <div className='flex items-center justify-center'>
                <div className='bg-[#f8961f] text-white rounded-full flex items-center justify-center p-3'>
                    <MdLocationPin className='text-2xl'/>
                 </div>
           </div>
            <div className="flex flex-col mx-2">
				<span className="text-[#1D1D1D] font-bold text-base">
                    آدرس :
                </span>
				<p className=' text-base' >
                      تهران، اوین، ميدان شهيد شهرياری، مرکز نوآوری علوم انسانی دانشگاه شهید بهشتی
                </p>
			</div>
        </div>
    </div>
    
  )
}
