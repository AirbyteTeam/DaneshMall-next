"use client"
import ScrollAnimation from 'react-animate-on-scroll';

import Link from "next/link"
import Image from "next/image"

function Partners() {
    return (
        <section className="orange-gradient  pt-10 pb-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="mt-5 w-[8rem] h-[2rem] bg-[#FFF1EC] text-mainOrange rounded-full text-[1rem]">
                     حامیان دانش‌مال
                </h2>
                <ScrollAnimation animateIn='animate__fadeInDown'>
                
                </ScrollAnimation>
                <div className="mt-10 flex justify-center">
                <ScrollAnimation animateIn='animate__fadeInDown'>
                    <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 mx-20  ">
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl md:w-auto  ">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>

                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="/MSRT-ISIC.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '35%', height: 'auto' }}/>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                </div>
            </div>
        </section>
    );
}

export default Partners;