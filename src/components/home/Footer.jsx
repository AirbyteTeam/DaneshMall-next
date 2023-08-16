
import Link from "next/link"
import Image from "next/image"
import {RiArrowLeftSLine} from "react-icons/ri";
import {IoLogoWhatsapp} from "react-icons/io";

function Footer() {
    return (
        <footer>
            <div className="bg-mainBg py-16 px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-20 ">
                    <div className="">
                        <div className="w-[90%]">
                            <Link href="/">
                                <Image src="/logo.svg" alt="costumer" width={0}
                                       height={0}
                                       sizes="100vw"
                                       style={{ width: '100%', height: 'auto' }}/>
                            </Link>
                        </div>
                        <div className="mt-7">
                            <h2 className="text-white text-[0.7rem]">
                                دانش‌مال با هدف فراهم‌سازی بستری برای ترویج، معرفی و فروش محصولات دانش‌بنیان ساخت ایران طراحی شده است.
                            </h2>
                            <div className="mt-5 flex justify-center items-center gap-4">
                                <a href="#" target="_blank"><img src="/eitaa-icon.svg" className="w-6 h-6"/></a>
                                <a href="#" target="_blank"><IoLogoWhatsapp className="text-[#EF7F1A] text-[1.7rem]"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[1.2rem] font-bold text-mainOrange">صفحات</h3>
                        <div className="mt-5  space-y-5">
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <Link href="/" className="text-white text-[1rem] hover:text-neutral-500">خانه</Link>
                            </div>
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <Link href="/about-us" className="text-white text-[1rem] hover:text-neutral-500">درباره ما</Link>
                            </div>
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <Link href="/service" className="text-white text-[1rem] hover:text-neutral-500">خدمات ما</Link>
                            </div>
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <Link href="/contact-us" className="text-white text-[1rem] hover:text-neutral-500">تماس با ما</Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[1.2rem] font-bold text-mainOrange">لینک های مفید</h3>
                        <div className="mt-5  space-y-5">
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <a href="/" className="mt-1 text-white text-[0.8rem] hover:text-neutral-500">معاونت علمی ، فناوری و اقتصاد دانش بنیان رئیس جمهور</a>
                            </div>
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <a href="/" className="mt-1 text-white text-[0.8rem] hover:text-neutral-500">صندوق نوآوری و شکوفایی</a>
                            </div>
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <a href="/" className="mt-1 text-white text-[0.8rem] hover:text-neutral-500">وزارت علوم ، تحقیقات و فناوری</a>
                            </div>
                            <div className="flex">
                                <RiArrowLeftSLine className="text-mainOrange text-[1.7rem]"/>
                                <a href="/" className="mt-1 text-white text-[0.8rem] hover:text-neutral-500">پارک علم و فناوری دانشگاه شهید بهشتی</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[1.2rem] font-bold text-mainOrange">تماس با ما</h3>
                        <div className="mt-5  space-y-5">
                            <div>
                                <h3 className="mb-2 text-mainOrange text-[0.9rem] font-bold">شماره تماس:</h3>
                                <a href="" className="text-white text-[0.9rem]">021-55551255</a>
                            </div>
                            <div>
                                <h3 className="mb-2 text-mainOrange text-[0.9rem] font-bold">ایمیل:</h3>
                                <a href="" className="text-white text-[0.9rem]">info@daneshmall.ir</a>
                            </div>
                            <div>
                                <h3 className="mb-2 text-mainOrange text-[0.9rem] font-bold">شماره تماس:</h3>
                                <span  className="text-white text-[0.9rem]">تهران، اوین، ميدان شهيد شهرياری، مرکز نوآوری علوم انسانی دانشگاه شهید بهشتی</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-mainOrange text-center py-3 px-5 text-[0.8rem]">
                © تمامی حقوق وبسایت برای <Link href="/admin/login">شرکت</Link> توسعه کسب‌وكار خلاق و نوآور آرمان محفوظ می‌باشد
            </div>
        </footer>
    );
}

export default Footer;