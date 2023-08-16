
import Link from "next/link"
import Image from "next/image"

function Partners() {
    return (
        <section className="orange-gradient  pt-10 pb-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="mt-5 w-[8rem] h-[2rem] bg-[#FFF1EC] text-mainOrange rounded-full text-[1rem]">
                    همکاران ما
                </h2>
                <h3 className="mt-10 font-bold text-[1.7rem]">
                    برند ها و شرکت های معتبر موجود در دانش مال
                </h3>
                <div className="mt-10 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10  ">
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl md:w-full ">
                            <img src="https://cloud.daneshmall.com/google.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="https://cloud.daneshmall.com/pay.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="https://cloud.daneshmall.com/clickup.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="https://cloud.daneshmall.com/dropbox.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>

                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="https://cloud.daneshmall.com/Elastic.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="https://cloud.daneshmall.com/GitHub.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <div className="bg-white flex justify-center items-center p-5 rounded-xl">
                            <img src="https://cloud.daneshmall.com/HubSpot.png" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{ width: '100%', height: 'auto' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;