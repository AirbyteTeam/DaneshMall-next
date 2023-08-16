'use client';
import Image from 'next/image'
import React, {useEffect, useState} from "react";
import "../../../../../styles/dashboard/Admin/crowdFounding.css";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import api from "../../../../../hooks/api/api";
import {IoAdd} from "react-icons/io5";
import axios from "axios";
import {toast} from "react-toastify";
import {
    DialogContent,
    DialogContentText,
    FormControl,
    Pagination,
    PaginationItem,
    Select
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import ReactLoading from "react-loading";
import {MdDelete} from "react-icons/md";
import {RiFileUploadFill} from "react-icons/ri";
import * as yup from "yup";
import Skeleton from "react-loading-skeleton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const AddCompany = () =>{
    const [clickedProject, setClickedProject] = useState({});
    const [open, setOpen] = React.useState(false)
    const [isUpload, setIsUpload] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [tableLoading, setTableLoading] = useState(false)
    const [companies, setCompanies] = useState([]);
    const [category, setCategory] = useState([]);
    const [openAddCompany, setOpenAddCompany] = useState(false)
    const [openEditCompany, setOpenEditCompany] = useState(false)
    const [logoImage, setLogoImage] = useState();
    const [logoImageEdit, setLogoImageEdit] = useState();
    const [companyId, setCompanyId] = useState();
    const [page,setPage] = useState(1)
    const [company, setCompany] = useState({
        companyName: "",
        companyFullName: "",
        logoUrl: "",
        category: "",
        redirectUrl: ""
    })

    const [editCompany, setEditCompany] = useState({
        companyName: "",
        companyFullName: "",
        logoUrl: "",
        category: "",
        redirectUrl: ""
    })

    const arabicNumbers = "۰۱۲۳۴۵۶۷۸۹"
    function convertNumberToLetter(num) {
        let result = ""
        const str = num.toString();
        for(let c of str){
            result += arabicNumbers.charAt(c)
        }
        return result
    }

    function itemRender(current, type, originalElement) {
        if (type === 'page') {
            return <a>{convertNumberToLetter(current)}</a>;
        }
        return originalElement;
    }

    const validation = async () => {
        const companySchema = yup.object().shape({
            companyName: yup.string().required("لطفا نام شرکت را وارد کنید"),
            companyFullName: yup.string().required("لطفا نام کامل شرکت را وارد کنید"),
            logoUrl: yup.string().required("لطفا لوگو شرکت را آپلود کنید"),
            category: yup.string().required("لطفا دسته بندی شرکت را انتخاب کنید"),
            redirectUrl: yup.string().required("لطفا لینک شرکت را وارد کنید"),
        })

        try {
            return await companySchema.validate(company, {abortEarly: false})
        } catch (error) {
            toast.info(error.errors[0], {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const EditValidation = async () => {
        const companySchema = yup.object().shape({
            companyName: yup.string().required("لطفا نام شرکت را وارد کنید"),
            companyFullName: yup.string().required("لطفا نام کامل شرکت را وارد کنید"),
            logoUrl: yup.string().required("لطفا لوگو شرکت را آپلود کنید"),
            category: yup.string().required("لطفا دسته بندی شرکت را انتخاب کنید"),
            redirectUrl: yup.string().required("لطفا لینک شرکت را وارد کنید"),
        })

        try {
            return await companySchema.validate(editCompany, {abortEarly: false})
        } catch (error) {
            toast.info(error.errors[0], {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const resetCompanyState = () =>{
        setCompany({
            companyName: "",
            companyFullName: "",
            logoUrl: "",
            category: "",
            redirectUrl: ""
        })
        setLogoImage("")
        setIsUpload(false)
        setPage(1)
    }

    const resetEditCompanyState = () =>{
        setEditCompany({
            companyName: "",
            companyFullName: "",
            logoUrl: "",
            category: "",
            redirectUrl: ""
        })
        setLogoImageEdit("")
        setIsUpload(false)
        setPage(1)
    }

    const getCompany = async (page) => {
        setTableLoading(true)
        const companyResponse = await api.get(`company/findAll?page=${page - 1}&size=6`)
        setCompanies(companyResponse)
        setTableLoading(false)
    }

    useEffect(() => {
        getCompany(page)
    }, []);

    const handleClickOpen = (p) => {
        setClickedProject(p)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveProject = () => {
        api.delete(`company/${clickedProject.id}`).then(() =>{
            setPage(1);
            getCompany(1)
        })
        setClickedProject({})
        setOpen(false);
    }

    const getCategory = async () =>{
        await axios.get("http://localhost:8090/api/v1/company/categories").then((res) => {
            setCategory(res.data)
        }).catch((error) => {
            toast.error("خطا در سیستم", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        });
    }

    const handleOpenAddCompany = async () => {
        await getCategory()
        setOpenAddCompany(true);
    };

    const handleOpenEditCompany = async (co) => {
        const updateCompany = {
            companyName: co.companyName,
            companyFullName: co.companyFullName,
            logoUrl: co.logoUrl,
            category: co.englishCategory,
            redirectUrl: co.redirectUrl,
        }
        setEditCompany(updateCompany)
        setCompanyId(co.id)
        await getCategory()
        setOpenEditCompany(true);
    };

    const handleUpload = async (event) => {
        setUploadLoading(true)
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        const res = await api.post("file/upload", formData)
        if(res){
            setCompany((pro) => ({...pro, logoUrl: res}))
            setLogoImage(event.target.files[0]);
            toast.success('آپلود با موفقیت انجام شد', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsUpload(true)
        }else {
            toast.error("فایل آپلود نشد", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsUpload(false)
        }
        setUploadLoading(false)
    }

    const handleUploadEdit = async (event) => {
        setUploadLoading(true)
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        const res = await api.post("file/upload", formData)
        if(res){
            setEditCompany((pro) => ({...pro, logoUrl: res}))
            setLogoImageEdit(event.target.files[0]);
            toast.success('آپلود با موفقیت انجام شد', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsUpload(true)
        }else {
            toast.error("فایل آپلود نشد", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsUpload(false)
        }
        setUploadLoading(false)
    }

    const handleDeleteFile = () => {
        setIsUpload(false)
    }

    const handleCloseAddCompany = () => {
        setOpenAddCompany(false)
        setSubmitLoading(false)
        resetCompanyState()
    }

    const handleCloseEditCompany = () => {
        setOpenEditCompany(false)
        resetEditCompanyState()
    }

    const handleSubmit = async () => {
        setSubmitLoading(true)
        const valid = await validation();
        if (valid) {
            const res = await api.post("company", company)
            if (res) {
                toast.success('شرکت با موفقیت ثبت شد', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })

            }
            handleCloseAddCompany()
            await getCompany(1)
        }
    }

    const handleSubmitEdit = async () => {
        setSubmitLoading(true)
        const valid = await EditValidation();
        if (valid) {
            const res = await api.put(`company/${companyId}`, editCompany)
            if (res) {
                toast.success('شرکت با موفقیت ویرایش شد', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })

            }
            handleCloseEditCompany()
            setSubmitLoading(false)
            await getCompany(1)
        }
    }

    const handlePagination = async (event,value)=>{
        setPage(value)
        await getCompany(value)
    }

    return (
        <>
            <div className="project-box p-10">
                <div className="flex justify-between">
                    <h3 className="project-box-title">شرکت ها</h3>
                    <button onClick={handleOpenAddCompany}
                            className="flex items-center bg-mainOrange hover:opacity-80 px-4 py-2 rounded">
                        <IoAdd className="ml-1"/>
                        افزودن شرکت
                    </button>
                </div>
                <div>
                    <table className='project-box-table'>
                        <thead>
                        <tr>
                            <th>شماره</th>
                            <th>لوگو</th>
                            <th>نام شرکت</th>
                            <th>نام کامل شرکت</th>
                            <th>دسته بندی</th>
                            <th>لینک</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tableLoading ?
                                [...Array(5)].map(() =>
                                    <tr>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                        <td><Skeleton animation="wave" height={20} width="50%"/></td>
                                    </tr>
                                )
                                : companies.content?.map((co, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td className="flex justify-center items-center">
                                            <div className="p-2">
                                                <img src={co.logoUrl} className="w-[4rem] h-[4rem]   object-cover rounded-xl" alt="Logo"/>
                                            </div>
                                        </td>
                                        <td>{co.companyName}</td>
                                        <td>{co.companyFullName}</td>
                                        <td>{co.category}</td>
                                        <td><a href={co.redirectUrl} target="_blank" className="text-blue-500 hover:text-blue-300">{co.redirectUrl}</a> </td>
                                        <td>
                                            <button className='project-button-delete' onClick={() => handleClickOpen(co)}>
                                                حذف
                                            </button>

                                            <Dialog
                                                maxWidth="sm"
                                                fullWidth={true}
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description">
                                                <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
                                                    حذف شرکت
                                                </DialogTitle>
                                                <DialogContent style={{textAlign:"center",fontSize:"1.1rem"}}>
                                                    آیا از حذف شرکت مطمئن هستید؟
                                                </DialogContent>
                                                <DialogActions >
                                                    <button className="px-3 py-2 bg-red-500 rounded-xl mx-2" onClick={handleRemoveProject} autoFocus>
                                                        حذف
                                                    </button>
                                                    <button className="px-3 py-2 bg-neutral-300 rounded-xl mx-2" onClick={handleClose}>بستن</button>
                                                </DialogActions>
                                            </Dialog>

                                            <Tooltip title="ویرایش" placement="top-start">
                                                <button className='project-button-edit' onClick={()=>{handleOpenEditCompany(co)}}>
                                                    ویرایش
                                                </button>
                                            </Tooltip>
                                        </td>
                                    </tr>))
                        }
                        </tbody>
                    </table>

                    <div className="flex justify-center mt-10">
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

            <Dialog
                maxWidth="sm"
                fullWidth={true}
                open={openAddCompany}
                keepMounted
                onClose={handleCloseAddCompany}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        fontFamily: "Vazirmatn RD FD",
                    },
                }}>
                <DialogTitle style={{fontFamily: "Vazirmatn RD FD"}}>افزودن شرکت جدید</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontFamily: "Vazirmatn RD FD"}}>
                        <div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">نام شرکت</label>
                                <input value={company.companyName} onChange={(e) => {
                                    setCompany((co) => ({...co, companyName: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">نام کامل شرکت</label>
                                <input value={company.companyFullName} onChange={(e) => {
                                    setCompany((co) => ({...co, companyFullName: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">لینک</label>
                                <input value={company.redirectUrl} onChange={(e) => {
                                    setCompany((co) => ({...co, redirectUrl: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">دسته بندی</label>
                                <FormControl sx={{width: '100%'}} size="small">
                                    <Select
                                        value={company.category}
                                        onChange={(e) => {
                                            setCompany((co) => ({...co, category: e.target.value}))
                                        }}
                                        className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full">
                                        {
                                            category?.map((cate) => (
                                                <MenuItem value={cate.name}>{cate.persianName}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input"
                                   className="block mb-2 text-sm font-medium text-neutral-600">آپلود لوگو</label>
                            <div>
                                {!isUpload ? (
                                    !uploadLoading ? (
                                        <div>
                                            <input
                                                className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5 "
                                                id="formFileLg" type="file"
                                                onChange={(e) => {
                                                    handleUpload(e)
                                                }}/>
                                        </div>
                                    ) : (
                                        <div className="d-flex align-item-start">
                                            <ReactLoading type="cylon" color="#bdc3c7" className="submitLoading"
                                                          height={1}
                                                          width={45}/>
                                        </div>
                                    )
                                ) : (
                                    <div
                                        className="flex justify-between border border-1 border-neutral-400 rounded-xl p-3"
                                        style={{marginTop: '-2px'}}>
                                        <button onClick={handleDeleteFile}><MdDelete
                                            className="text-red-600 hover:text-red-400" fontSize="25px"/></button>
                                        <div className="flex items-center">
                                            <h6 className="mx-1">{logoImage && (logoImage.name)}</h6>
                                            <RiFileUploadFill className="text-[#83b230] text-2xl"/>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="gap-3" style={{justifyContent: "center"}}>
                    <button disabled={submitLoading}
                            className='bg-green-600 hover:opacity-80 py-2 px-4 rounded-xl disabled:cursor-not-allowed disabled:bg-green-400 disabled:text-neutral-500'
                            onClick={handleSubmit}>افزودن
                    </button>
                    <button className='bg-red-500 hover:opacity-80 py-2 px-4 rounded-xl'
                            onClick={handleCloseAddCompany}>بستن
                    </button>
                </DialogActions>
            </Dialog>

            <Dialog
                maxWidth="sm"
                fullWidth={true}
                open={openEditCompany}
                keepMounted
                onClose={handleCloseEditCompany}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        fontFamily: "Vazirmatn RD FD",
                    },
                }}>
                <DialogTitle style={{fontFamily: "Vazirmatn RD FD"}}>ویرایش شرکت </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontFamily: "Vazirmatn RD FD"}}>
                        <div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">نام شرکت</label>
                                <input value={editCompany.companyName} onChange={(e) => {
                                    setEditCompany((co) => ({...co, companyName: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">نام کامل شرکت</label>
                                <input value={editCompany.companyFullName} onChange={(e) => {
                                    setEditCompany((co) => ({...co, companyFullName: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">لینک</label>
                                <input value={editCompany.redirectUrl} onChange={(e) => {
                                    setEditCompany((co) => ({...co, redirectUrl: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">دسته بندی</label>
                                <FormControl sx={{width: '100%'}} size="small">
                                    <Select
                                        value={editCompany.category}
                                        onChange={(e) => {
                                            setEditCompany((co) => ({...co, category: e.target.value}))
                                        }}
                                        className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full">
                                        {
                                            category?.map((cate) => (
                                                <MenuItem value={cate.name}>{cate.persianName}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input"
                                   className="block mb-2 text-sm font-medium text-neutral-600">آپلود لوگو</label>
                            <div>
                                {!isUpload ? (
                                    !uploadLoading ? (
                                        <div>
                                            <input
                                                className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5 "
                                                id="formFileLg" type="file"
                                                onChange={(e) => {
                                                    handleUploadEdit(e)
                                                }}/>
                                        </div>
                                    ) : (
                                        <div className="d-flex align-item-start">
                                            <ReactLoading type="cylon" color="#bdc3c7" className="submitLoading"
                                                          height={1}
                                                          width={45}/>
                                        </div>
                                    )
                                ) : (
                                    <div
                                        className="flex justify-between border border-1 border-neutral-400 rounded-xl p-3"
                                        style={{marginTop: '-2px'}}>
                                        <button onClick={handleDeleteFile}><MdDelete
                                            className="text-red-600 hover:text-red-400" fontSize="25px"/></button>
                                        <div className="flex items-center">
                                            <h6 className="mx-1">{logoImageEdit && (logoImageEdit.name)}</h6>
                                            <RiFileUploadFill className="text-[#83b230] text-2xl"/>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="gap-3" style={{justifyContent: "center"}}>
                    <button disabled={submitLoading}
                            className='bg-green-600 hover:opacity-80 py-2 px-4 rounded-xl disabled:cursor-not-allowed disabled:bg-green-400 disabled:text-neutral-500'
                            onClick={handleSubmitEdit}>ثبت
                    </button>
                    <button className='bg-red-500 hover:opacity-80 py-2 px-4 rounded-xl'
                            onClick={handleCloseEditCompany}>بستن
                    </button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddCompany