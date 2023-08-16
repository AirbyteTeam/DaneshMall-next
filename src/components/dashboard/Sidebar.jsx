'use client'
import React from "react";
import Link from 'next/link'
import '../../styles/dashboard/dashboard.css'
export default function Sidebar() {
    const closeSidebar = () => {
        let sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("close");
    }

    return (
        <>
            <div className='sidebar-dashboard' id='sidebar'>
                <div id='close_sidebar_mobile' onClick={closeSidebar}>
                    بستن
                </div>
                <div className="logo">
                </div>
                <div className="sidebar-list mt-4">
                    <Link onClick={closeSidebar} href="/admin/dashboard/add-company" className='w-100'>
                        <div className="flex flex-row items-center sidebar-list-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" width='24' height='24'>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
                            </svg>
                            <div className="sidebar-list-item-title">
                                شرکت ها
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => localStorage.clear()} href="/" className={"w-100"}>
                        <div className="flex flex-row items-center sidebar-list-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" width='24' height='24'>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                            </svg>
                            <div className="sidebar-list-item-title">
                                خروج
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
