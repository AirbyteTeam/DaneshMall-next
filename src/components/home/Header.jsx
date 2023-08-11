
import Link from "next/link"
import Image from "next/image"

function Header() {
    return (
        <section className="flex flex-col-reverse md:flex-row">
            <div className="flex-1">
                    <Image
                        alt="header-vector"
                        src='/header.svg'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className="flex-1 header-background flex justify-center items-center">
                <div className="w-2/3 mt-20">
                    <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[2rem] font-bold">
                        <span className="text-mainOrange">دانش مال</span>   نخستین و بزرگترین بازار محصولات دانش بنیان ساخت ایران با فناوری واقعیت مجازی
                    </h1>
                    <p className="text-[0.8rem] mt-5 text-[0.7rem] lg:text-[0.9rem] text-neutral-500">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک الورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ست.
                    </p>
                    <div className="mt-5 mb-10 md:my-5">
                        <button className="text-white font-bold rounded-full px-16 md:px-20 py-2 bg-mainOrange hover:bg-transparent hover:border hover:border-mainOrange hover:border-1 hover:text-neutral-500">ورود به نمایشگاه</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;