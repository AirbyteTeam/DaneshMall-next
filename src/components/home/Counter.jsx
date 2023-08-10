'use client';

import React, {useEffect, useState} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Image from "next/image";

function Counter() {
    const [activeUsersCount, setActiveUsersCount] = useState(10)
    const [usersCount, setUsersCount] = useState(10);
    const [completeProjectsCount, setCompleteProjectsCount] = useState(15)
    const getData = async () => {
    }
    useEffect(() => {
    }, []);

    return (
        <>
            <section className="">
                <div className="bg-mainBg rounded-t-[3rem] ">
                    <div className="lg:flex lg:justify-evenly grid sm:grid-cols-3 grid-cols-1 pt-20">
                        <div className="">
                            <div className=" mb-16 ">
                                <div className="text-center text-white flex flex-col items-center justify-center">
                                    <div className="mb-8 w-[6rem] h-[6rem] bg-mainOrange rounded-full p-5  flex items-center ">
                                        <Image src="/medal.png" alt="costumer" width={0}
                                               height={0}
                                               sizes="100vw"
                                               style={{ width: '100%', height: 'auto' }}/>
                                    </div>
                                    <div className="text-5xl">
                                        <CountUp end={completeProjectsCount} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className=" " ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="text-mainOrange">+</span>
                                    </div>
                                    <h6 className="text-neutral-300 text-[1.1rem]">سال های تجربه</h6>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" mb-16 ">
                                <div className="text-center text-white flex flex-col">
                                    <div className="mb-8 w-[6rem] h-[6rem] bg-mainOrange rounded-full p-5  flex items-center ">
                                        <Image src="/costumer.png" alt="costumer" width={0}
                                               height={0}
                                               sizes="100vw"
                                               style={{ width: '100%', height: 'auto' }}/>
                                    </div>
                                    <div className="text-5xl">
                                        <CountUp end={usersCount} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className="" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="text-mainOrange">+</span>
                                    </div>
                                    <h6 className="text-neutral-300 text-[1.1rem]">مشتریان</h6>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" mb-16 ">
                                <div className="text-center text-white flex flex-col">
                                    <div className="mb-8 w-[6rem] h-[6rem] bg-mainOrange rounded-full p-5  flex items-center ">
                                        <Image src="/support.png" alt="costumer" width={0}
                                               height={0}
                                               sizes="100vw"
                                               style={{ width: '100%', height: 'auto' }}/>
                                    </div>
                                    <div className="text-5xl">
                                        <CountUp end={usersCount} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className="" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="text-mainOrange">+</span>
                                    </div>
                                    <h6 className="text-neutral-300 text-[1.1rem]">حامیان</h6>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" mb-16 ">
                                <div className="text-center text-white flex flex-col">
                                    <div className="mb-8 w-[6rem] h-[6rem] bg-mainOrange rounded-full p-5  flex items-center ">
                                        <Image src="/project-management.png" alt="costumer" width={0}
                                               height={0}
                                               sizes="100vw"
                                               style={{ width: '100%', height: 'auto' }}/>
                                    </div>
                                    <div className="text-5xl">
                                        <CountUp end={activeUsersCount} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className="" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="text-mainOrange">+</span>
                                    </div>
                                    <h6 className="text-neutral-300 text-[1.1rem]">خدمات دانش مال</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter