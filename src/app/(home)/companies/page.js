'use client'
import React, {useEffect, useState} from "react";
import Card from "@/components/companies_Components/Card";
import Image from "next/image";
import axios from "axios";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from "stylis";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {Pagination, PaginationItem,} from "@mui/material";
import {IoSearch} from "react-icons/io5";

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const dynamicParams = true

export default function Category() {
    const [companies, setCompanies] = useState({content: []})
    const [apiInfo, setApiInfo] = useState()
    const [page, setPage] = useState(1)
    const getCompany = async (page) => {
        const companyResponse = await axios.get(`http://localhost:8090/api/v1/company/findAll?page=${page - 1}&size=12`)
        setCompanies(companyResponse.data)
    }

    useEffect(() => {
        getCompany(page)
    }, []);

    const handlePagination = async (event, value) => {
        setPage(value)
        await getCompany(value)
    }

    return (
        <div className="">
            <div className='relative'>
                <div className="absolute top-[40%] w-full flex justify-center">
                    <h1 className="text-4xl font-bold">شرکت ها</h1>
                </div>
                <div className="flex w-full h-[20rem]">
                    <img
                        className="object-cover"
                        alt="header-vector"
                        src='https://cloud.daneshmall.com/header.jpg'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}/>
                </div>
                <div className="absolute w-full flex justify-center" style={{bottom: "-4rem"}}>
                    <div className="bg-white w-full md:w-[70%] rounded-xl shadow-xl">
                        <div className="flex w-full items-center justify-center my-[2.5rem] px-5">
                            <div className="py-3 px-4 border rounded-r-lg border-l-0 ">
                                <IoSearch className="text-[1.5rem] text-mainOrange"/>
                            </div>
                            <input
                                type="text"
                                className="focus:border-neutral-400 w-[70%] py-3 border rounded-l-lg border-r-0"/>
                            <button className="px-5 hover:opacity-80 md:px-10 py-3 rounded-l-lg bg-[#F8961F] text-[#FFFFFF]">
                                جستجو
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28 px-5 sm:px-10 md:px-36">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-[10px]">
                    {companies.content.map((company) => (
                        <Card id={company.id} redirectUrl={company.redirectUrl} title={company.companyName}
                              imgUrl={company.logoUrl}/>
                    ))}
                </div>
                <div className="flex justify-center mt-10 mb-10">
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <Pagination defaultPage={"1"} count={companies.totalPages} page={page}
                                        onChange={handlePagination} variant="outlined"
                                        renderItem={(item) => <PaginationItem {...item}
                                                                              sx={{fontFamily: "Vazirmatn RD FD"}}
                                        />}/>
                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </div>
        </div>
    );
}
