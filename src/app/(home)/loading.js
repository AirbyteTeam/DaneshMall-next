'use client';
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <ReactLoading type="spinningBubbles" color="#000" />
        </div>
    )
}