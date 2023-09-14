'use client';
import Link from "next/link"
import Image from "next/image"
import "../../styles/home/home.css"
import {usePathname} from 'next/navigation'
import {HiMenuAlt3} from "react-icons/hi";
import {useState} from "react";
import {IoMdClose} from "react-icons/io";

function Navbar() {
    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const handleToggleNavbar = () => {
        setIsShowNavbar(!isShowNavbar)
    }

    const pathname = usePathname()
    return (
        <nav className="relative">
            <div className="bg-mainBg w-full h-[4.2rem] flex items-center justify-between px-10 z-20">
                <div className="w-[62%] justify-end items-center hidden md:flex">
                    <ul className="flex gap-2">
                        <li><Link href="/" className="font-[200] lg:px-3 px-1 py-2"><span
                            className={pathname === "/" ? "activeNavLink" : "text-white"}>صفحه‌نخست</span></Link></li>
                        <li><Link href="/about-us" className="font-[200] lg:px-3 px-1 py-2"><span
                            className={pathname === "/about-us/" ? "activeNavLink" : "text-white"}>درباره‌ ما</span></Link>
                        </li>
                        <li><Link href="/companies" className="font-[200] lg:px-3 px-1 py-2"><span
                            className={pathname === "/companies/" ? "activeNavLink" : "text-white"}>شرکت‌های دانش‌مال</span></Link>
                        </li>
                        <li><Link href="/contact-us" className="font-[200] lg:px-3 px-1 py-2"><span
                            className={pathname === "/contact-us/" ? "activeNavLink" : "text-white"}> تـماس بـا مـا</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={handleToggleNavbar} className="transition-all duration-900">
                        {
                            isShowNavbar ? (
                                <IoMdClose className="text-4xl text-white" />
                            ) : (
                                <HiMenuAlt3 className="text-4xl text-white"/>
                            )
                        }
                    </button>
                </div>
                <div className="w-[40%] sm:w-[25%] md:w-[15%]">
                    <Link href="/">
                        <Image src="/logo.svg" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{width: '100%', height: 'auto'}}/>
                    </Link>
                </div>
            </div>
            <div className="absolute left-0 right-0 transition-all duration-700 md:hidden z-10" style={isShowNavbar ? {top:"4.2rem"}:{top:"-14rem"}} >

                <div className="bg-mainBg px-10 pb-4">
                    <ul className="flex flex-col">
                        <li className=""><Link href="/" className="font-[200] block p-4 hover:bg-neutral-700" onClick={handleToggleNavbar}><span
                            className={pathname === "/" ? "activeNavLink" : "text-white"}>خـانـه</span></Link></li>
                        <li className=""><Link href="/about-us" className="font-[200] block p-4 hover:bg-neutral-700" onClick={handleToggleNavbar}><span
                            className={pathname === "/about-us/" ? "activeNavLink" : "text-white"} >دربـاره دانش مال</span></Link>
                        </li>
                        <li className=""><Link href="/companies" className="font-[200] block p-4 hover:bg-neutral-700" onClick={handleToggleNavbar}><span
                            className={pathname === "/companies/" ? "activeNavLink" : "text-white"}>شرکت ها</span></Link>
                        </li>
                        <li className=""><Link href="/contact-us" className="font-[200] block p-4 hover:bg-neutral-700" onClick={handleToggleNavbar}><span
                            className={pathname === "/contact-us/" ? "activeNavLink" : "text-white"}>تماس با ما</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;