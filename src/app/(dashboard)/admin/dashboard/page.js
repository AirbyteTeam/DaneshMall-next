'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function page() {

    const router = useRouter();

    useEffect(() => {
        if (!(localStorage.getItem("Authorization"))) {
            router.push("/admin/login")
        }
    }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        </main>
    )
}