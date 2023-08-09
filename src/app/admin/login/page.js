'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation'
import * as yup from "yup";
import { toast } from "react-toastify";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter();

    useEffect(()=>{
        if(localStorage.getItem("username")){
            router.push("/admin/dashboard/add-company")
        }
    })
    const validation = async () => {
        const schema = yup.object().shape({
            userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
            password: yup.string().required("لطفا رمز خود را وارد کنید")
        })
        try {
            return await schema.validate({userName,password})
        } catch (error) {
            toast.error(error.errors[0], {
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

    function LoginApi(){
        return(
            axios.post("http://localhost:8090/login",
                {username: userName, password: password}
            ).then((response) => {
                localStorage.setItem("Authorization", response.headers["authorization"])
                localStorage.setItem("password", password)
                localStorage.setItem("username", userName)
                return response
            }).catch((error) => {
                return error.response;
            })
        )
    }

    async function submit() {
        setIsLoading(true)
        const result = await validation()
        if (result !== undefined) {
            const res = await LoginApi()
            if (res.status === 403) {
                toast.error("رمز عبور اشتباه است", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else if (res.status === 200) {
                router.push("/admin/dashboard/add-company")
            }
        }
        setIsLoading(false)
    }

    return (
        <section className="bg-[#f3f4f5] text-right">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-neutral-800 md:text-2xl">
                            ورود ادمین
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-neutral-800">
                                    نام کاربری
                                </label>
                                <input type="email" name="email" id="email" value={userName} onChange={e => setUserName(e.target.value)}
                                       className="bg-neutral-200 text-right border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-neutral-800">رمز عبور</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
                                       className="bg-neutral-200 text-right border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       required=""/>
                            </div>
                            {
                                isLoading ? (
                                    <button
                                        className="w-full text-white bg-mainOrange opacity-70 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        ورود
                                    </button>
                                ):(
                                    <button onClick={submit}
                                            className="w-full text-white bg-mainOrange hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        ورود
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
