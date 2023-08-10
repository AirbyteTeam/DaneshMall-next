
import Link from "next/link"
import Image from "next/image"

function AboutUs() {
    return (
        <section className="bg-white pb-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="mt-5 w-[8rem] h-[2rem] bg-[#FFF1EC] text-mainOrange rounded-full text-[1rem]">
                    درباره ما
                </h2>
                <h3 className="mt-10 font-bold text-[1.7rem]">
                    دانش‌مال نخستین و بزرگترین نمایشگاه و بازار محصولات دانش بنیان
                </h3>
            </div>
            <div className="mt-10 flex flex-col md:flex-row">
                <div className="flex-[0.7] md:pr-20 px-16">
                    <Image
                        alt="header-vector"
                        src='/aboutUs.svg'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}/>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="header-background flex justify-center">
                        <div>
                            <Image
                                alt="header-vector"
                                src='/timeline.svg'
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <div className="mx-5 space-y-[6.7rem]">
                            <div className="w-2/3">
                                <h3 className="font-bold text-2xl text-neutral-800">
                                    لورم ایپسوم متن
                                </h3>
                                <p className="mt-2 text-[0.8rem] text-neutral-700">
                                    دانش‌مال با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات دانش‌بنیان ساخت ایران طراحی شده است.
                                </p>
                            </div>
                            <div className="w-2/3">
                                <h3 className="mt-1 font-bold text-2xl text-neutral-800">
                                    لورم ایپسوم متن
                                </h3>
                                <p className="mt-2 text-[0.8rem] text-neutral-700">
                                    دانش‌مال با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات دانش‌بنیان ساخت ایران طراحی شده است.
                                </p>
                            </div>
                            <div className="w-2/3">
                                <h3 className="mt-1 font-bold text-2xl text-neutral-800">
                                    لورم ایپسوم متن
                                </h3>
                                <p className="mt-2 text-[0.8rem] text-neutral-700">
                                    دانش‌مال با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات دانش‌بنیان ساخت ایران طراحی شده است.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;