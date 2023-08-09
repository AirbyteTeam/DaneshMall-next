'use client';
import Link from "next/link"
import Image from "next/image"
import "../../styles/home/Navbar.css"
import {NavLink} from "@/components/home/NavLink";
import { useRouter } from "next/router";
import {useEffect} from "react";

function Navbar() {
    const router = useRouter;
    useEffect(()=>{
        console.log(router.pathname)
    },[])
    return (
        <nav className="bg-mainBg w-full h-[4.2rem] flex items-center justify-between px-10">
                <div className="justify-end items-center">
                    <ul className="flex gap-4">
                        <li><Link  href="/"><span className={router.pathname === "/" ? "activeNavLink" : "text-white"} >خـانـه</span></Link></li>
                        <li><Link  href="/about-us">دربـاره دانش مال</Link></li>
                        <li><Link  href="/service">خدمـات</Link></li>
                        <li><Link  href="/contact-us">تمـاس بـا مـا</Link></li>
                    </ul>
                </div>
                <div className="w-[15%]">
                    <Image src="/logo.png" width="200" height='100'/>
                </div>
        </nav>
    );
}

export default Navbar;