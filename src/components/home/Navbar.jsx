'use client';
import Link from "next/link"
import Image from "next/image"
import "../../styles/home/Navbar.css"
import {NavLink} from "@/components/home/NavLink";
import { usePathname } from 'next/navigation'
import {useEffect} from "react";

function Navbar() {
    const pathname = usePathname()
    useEffect(()=>{
        console.log(pathname)
    },[])
    return (
        <nav className="bg-mainBg w-full h-[4.2rem] flex items-center justify-between px-10">
                <div className="items-center">
                    <ul className="flex gap-4">
                        <li><Link  href="/"><span className={pathname === "/" ? "activeNavLink" : "text-white"} >خـانـه</span></Link></li>
                        <li><Link  href="/about-us"><span className={pathname === "/about-us" ? "activeNavLink" : "text-white"} >دربـاره دانش مال</span></Link></li>
                        <li><Link  href="/service"><span className={pathname === "/service" ? "activeNavLink" : "text-white"} >خـدمات</span></Link></li>
                        <li><Link  href="/contact-us"><span className={pathname === "/contact-us" ? "activeNavLink" : "text-white"} >دربـاره ما</span></Link></li>
                    </ul>
                </div>
                <div className="w-[15%]">
                    <Image src="/logo.png" width="200" height='100'/>
                </div>
        </nav>
    );
}

export default Navbar;