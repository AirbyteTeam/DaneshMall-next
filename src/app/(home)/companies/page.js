"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/companies_Components/Card";
import Image from "next/image";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Pagination, PaginationItem } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import Categories from "@/components/companies_Components/Categories";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const dynamicParams = true;

export default function Category() {
  const [companies, setCompanies] = useState({ content: [] });
  const [apiInfo, setApiInfo] = useState();
  const [page, setPage] = useState(1);
  const getCompany = async (page) => {
    const companyResponse = await axios.get(
      `http://localhost:8090/api/v1/company/findAll?page=${page - 1}&size=12`
    );
    setCompanies(companyResponse.data);
  };

  useEffect(() => {
    getCompany(page);
  }, []);

  const handlePagination = async (event, value) => {
    setPage(value);
    await getCompany(value);
  };

  return (
    <div className="">
      <div className="">
        <div className=" w-full flex justify-center bg-[#f4931daf]">
          <h1 className="sm:text-5xl text-4xl font-bold py-32">
            شرکت‌های دانش‌مال
          </h1>
        </div>
      </div>
      <Categories />
      <div className="mt-28 px-5 sm:px-10 md:px-36">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-[10px]">
          {companies.content.map((company) => (
            <Card
              id={company.id}
              redirectUrl={company.redirectUrl}
              title={company.companyName}
              imgUrl={company.logoUrl}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <Pagination
                defaultPage={"1"}
                count={companies.totalPages}
                page={page}
                onChange={handlePagination}
                variant="outlined"
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    sx={{ fontFamily: "Vazirmatn RD FD" }}
                  />
                )}
              />
            </ThemeProvider>
          </CacheProvider>
        </div>
      </div>
    </div>
  );
}
