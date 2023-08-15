'use client'
import React, {useEffect, useState} from "react";
import Card from "@/components/companies_Components/Card";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import api from "@/hooks/api/api";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useParams } from 'next/navigation'

import {
    Pagination,
    PaginationItem,
} from "@mui/material";
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function Companies() {
    const [companies,setCompanies] = useState({content:[]})
    const [persianCategory,setPersianCategory] = useState("")
    const [apiInfo,setApiInfo] = useState()
    const [page,setPage] = useState(1)
    const params = useParams()

    const getCompany = async (page) => {
        const companyResponse = await axios.get(`http://localhost:8090/api/v1/company/${params.category}?page=${page - 1}&size=9`)
        setPersianCategory(companyResponse.data.persianName)
        setCompanies(companyResponse.data.data)
    }

    useEffect(() => {
        getCompany(page)
    }, []);

    const handlePagination = async (event,value)=>{
        setPage(value)
        await getCompany(value)
    }

    return (
        <div className="px-5 sm:px-10 md:px-36">
            <div className="flex items-center justify-between my-[50px] px-5">
                <div className="flex items-center">
                    <div className="py-3 px-4  border rounded-r-lg border-l-0 ">
                        <Image
                            width={24}
                            height={24}
                            src="/images/primary-shape.png"
                            alt="magnifier"
                            className="right-[3px]"/>
                    </div>
                    <input
                        type="text"
                        className="focus:border-neutral-400 py-3 w-[30.5vw] border rounded-l-lg border-r-0"></input>
                    <button className="px-10 py-3 rounded-l-lg bg-[#F8961F] text-[#FFFFFF]">
                        جستجو
                    </button>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-black text-xl">{persianCategory}</h2>
            </div>
            <div className="">
                <div className="flex flex-wrap justify-center  gap-5 my-[10px]">
                    {companies.content.map((company) => (
                        <Card id={company.id} redirectUrl={company.redirectUrl} title={company.companyName} imgUrl={company.logoUrl}/>
                    ))}
                </div>
                <div className="flex justify-center mt-10 mb-10">
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <Pagination defaultPage={"1"}  count={companies.totalPages} page={page} onChange={handlePagination} variant="outlined"
                                        renderItem={(item)=> <PaginationItem {...item} sx={{fontFamily:"Vazirmatn RD FD"}}
                                        />}/>
                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </div>
        </div>
    );
}
