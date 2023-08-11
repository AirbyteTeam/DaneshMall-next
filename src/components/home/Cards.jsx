
import Link from "next/link"
import Image from "next/image"

function Cards() {
    return (
        <section className="vector-background bg-white pt-10 pb-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="mt-5 w-[8rem] h-[2rem] bg-[#FFF1EC] text-mainOrange rounded-full text-[1rem]">
                    خدمات ما
                </h2>
                <h3 className="mt-10 font-bold text-[1.7rem]">
                    نمایشگاه و بازار محصولات دانش بنیان
                </h3>
            </div>
            <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 md:mx-20 gap-10 px-5">
                <div className="bg-white flex flex-col justify-center items-center rounded-2xl py-10 px-5 shadow-xl">
                    <div className="w-[4rem] h-[4rem] bg-mainOrange rounded-full p-3 ">
                        <Image src="/costumer.png" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <div className="mt-8 flex flex-col items-center">
                        <h2 className="text-mainOrange font-bold text-[1.4rem]">شرکت های دانش بنیان</h2>
                        <p className="mt-5 text-[0.9rem] text-neutral-500" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="bg-white flex flex-col justify-center items-center rounded-2xl py-10 px-5 shadow-xl">
                    <div className="w-[4rem] h-[4rem] flex justify-center items-center bg-mainOrange rounded-full p-3 ">
                        <Image src="/dot.png" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{ width: '50%', height: 'auto' }}/>
                    </div>
                    <div className="mt-8 flex flex-col items-center">
                        <h2 className="text-mainOrange font-bold text-[1.4rem]">مشتریان</h2>
                        <p className="mt-5 text-[0.9rem] text-neutral-500" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="bg-white flex flex-col justify-center items-center rounded-2xl py-10 px-5 shadow-xl">
                    <div className="w-[4rem] h-[4rem] bg-mainOrange rounded-full p-3 ">
                        <Image src="/masoul.png" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <div className="mt-8 flex flex-col items-center">
                        <h2 className="text-mainOrange font-bold text-[1.4rem]">مسئولان و سیاست‌گذاران</h2>
                        <p className="mt-5 text-[0.9rem] text-neutral-500" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;