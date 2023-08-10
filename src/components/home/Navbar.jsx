'use client';
import Link from "next/link"
import Image from "next/image"
import "../../styles/home/home.css"
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname()
    return (
        <nav className="bg-mainBg w-full h-[4.2rem] flex items-center justify-between px-10">
                <div className="w-[60%] flex justify-end items-center">
                    <ul className="flex gap-6">
                        <li><Link  href="/" className="font-[200]"><span className={pathname === "/" ? "activeNavLink" : "text-white"} >خـانـه</span></Link></li>
                        <li><Link  href="/about-us" className="font-[200]"><span className={pathname === "/about-us" ? "activeNavLink" : "text-white"} >دربـاره دانش مال</span></Link></li>
                        <li><Link  href="/service" className="font-[200]"><span className={pathname === "/service" ? "activeNavLink" : "text-white"} >خـدمات</span></Link></li>
                        <li><Link  href="/contact-us" className="font-[200]"><span className={pathname === "/contact-us" ? "activeNavLink" : "text-white"} >دربـاره ما</span></Link></li>
                    </ul>
                </div>
                <div className="w-[15%]">
                    <Link href="/">
                        <Image src="/logo.png" width="200" height='100'/>
                    </Link>
                </div>
        </nav>
    );
}

export default Navbar;