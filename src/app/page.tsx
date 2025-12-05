import img from "@/src/assets/photo.png";
import google from "@/src/assets/icons/google.png";
import apple from "@/src/assets/icons/apple.png";
import email_phone from "@/src/assets/icons/email_phone.png";
import logo from "@/src/assets/icons/up-arrow.png";

import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="flex gap-4 lg:gap-10 ls:gap-[69px] justify-center items-center h-full min-h-screen px-4 mv:px-12 lg:px-[72px] py-14">
            <div className="w-full mv:w-[350px] xl:w-[446px] flex flex-col justify-center gap-4 lg:gap-6">
                <div className="flex justify-center items-center gap-[5px]">
                    <Image src={logo} width={36} height={30} alt="logo" className="w-9 h-[30px]"></Image>
                    <p className="text-center text-brand_color font-semibold text-[20px] lg:text-[26px] leading-[110%] font-alexandria">Wiztecbd</p>
                </div>
                <div className="space-y-2">
                    <p className="text-center text-[24px] lg:text-[32px] leading-[110%] font-semibold">Create New Account</p>
                    <p className="text-center text-[14px] lg:text-[16px] leading-[110%] font-medium">Let&apos;s login to grab amazing deal</p>
                </div>
                <button className="p-3 lg:p-4 w-full border border-[#dfe2e6] rounded-lg flex gap-2 lg:gap-4 justify-center items-center">
                    <Image src={google} width={25} height={25} alt="icon" className="w-[25px] h-[25px]"></Image>
                    <span className="text-text-soft text-[14px] mm:text-[16px] leading-[150%] font-medium">continue with google</span>
                </button>
                <button className="p-3 lg:p-4 w-full border border-[#dfe2e6] rounded-lg flex gap-2 lg:gap-4 justify-center items-center">
                    <Image src={apple} width={25} height={25} alt="icon" className="w-[25px] h-[25px]"></Image>
                    <span className="text-text-soft text-[14px] mm:text-[16px] leading-[150%] font-medium">continue with apple</span>
                </button>
                <button className="p-3 lg:p-4 w-full border border-[#dfe2e6] rounded-lg flex gap-2 lg:gap-4 justify-center items-center">
                    <Image src={email_phone} width={25} height={25} alt="icon" className="w-[25px] h-[25px]"></Image>
                    <span className="text-text-soft text-[14px] mm:text-[16px] leading-[150%] font-medium">continue with email/phone</span>
                </button>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-[14px] mm:text-[16px] leading-[150%] font-medium">Don&apos;t have an account?</p>
                    <Link href="/" className="text-[14px] mm:text-[16px] text-brand_color_soft leading-[150%] font-medium">
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="grow hidden md:block">
                <svg className="absolute w-0 h-0">
                    <defs>
                        <clipPath id="customClip" clipPathUnits="objectBoundingBox">
                            <path d="M 0, 0.132 A 0.051, 0.044 0 0 1 0.051, 0.088 L 0.051, 0.088 A 0.051, 0.044 0 0 0 0.103, 0.044 L 0.103, 0.044 A 0.051, 0.044 0 0 1 0.154, 0 L 0.949, 0 A 0.051, 0.044 0 0 1 1, 0.044 L 1, 0.868 A 0.051, 0.044 0 0 1 0.949, 0.912 L 0.949, 0.912 A 0.051, 0.044 0 0 0 0.897, 0.956 L 0.897, 0.956 A 0.051, 0.044 0 0 1 0.846, 1 L 0.051, 1 A 0.051, 0.044 0 0 1 0, 0.956 L 0, 0.132 Z" />
                        </clipPath>
                    </defs>
                </svg>

                <div className="relative w-full max-w-[780px]">
                    <div className="w-full" style={{ aspectRatio: "780 / 910" }}>
                        <div className="w-full h-full overflow-hidden" style={{ clipPath: "url(#customClip)" }}>
                            <Image src={img} width={780} height={910} alt="img" className="w-full h-full"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
