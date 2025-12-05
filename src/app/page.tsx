"use client";
import img from "@/src/assets/photo.png";
import google from "@/src/assets/icons/google.png";
import apple from "@/src/assets/icons/apple.png";
import email_phone from "@/src/assets/icons/email_phone.png";
import logo from "@/src/assets/icons/up-arrow.png";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const HomePage = () => {
    const [email, setEmail] = useState("rownok@gmail.com");
    const [password, setPassword] = useState("**************");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login attempted with:", { email, rememberMe });
    };

    return (
        <div className="flex gap-4 lg:gap-10 ls:gap-[69px] justify-center items-center h-full min-h-screen px-4 mv:px-12 lg:px-[72px] py-14">
            <div className="w-full mp:w-[350px] md:w-[400px] xl:w-[446px] flex flex-col justify-center gap-4 lg:gap-6">
                <div className="flex justify-center items-center gap-[5px]">
                    <Image src={logo} width={36} height={30} alt="logo" className="w-9 h-[30px]"></Image>
                    <p className="text-center text-brand_color font-semibold text-[20px] lg:text-[26px] leading-[110%] font-alexandria">Wiztecbd</p>
                </div>
                <div className="space-y-2">
                    <p className="text-center text-[24px] xl:text-[32px] leading-[110%] font-semibold">Create New Account</p>
                    <p className="text-center text-[14px] xl:text-[16px] leading-[110%] font-medium">Let&apos;s login to grab amazing deal</p>
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

                <div className="flex justify-center items-center gap-2.5">
                    <div className="w-full h-px bg-stroke"></div>
                    <p className="text-text-soft">Or</p>
                    <div className="w-full h-px bg-stroke"></div>
                </div>

                {/* ----------form----------- */}
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 pt-6 pb-2 bg-gray-100 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder=" "
                            />
                            <label htmlFor="email" className="absolute left-4 top-2 text-xs text-gray-500 pointer-events-none">
                                Email
                            </label>
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 pt-6 pb-2 bg-gray-100 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                                placeholder=" "
                            />
                            <label htmlFor="password" className="absolute left-4 top-2 text-xs text-gray-500 pointer-events-none">
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-purple-800 focus:ring-purple-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 underline">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-brand_color hover:bg-purple-800 text-white font-medium py-3 rounded-lg transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
                {/* ------------------------- */}
                <div className="flex justify-center items-center gap-2">
                    <p className="text-[14px] mm:text-[16px] leading-[150%] font-medium">Don&apos;t have an account?</p>
                    <Link href="/" className="text-[14px] mm:text-[16px] text-brand_color_soft leading-[150%] font-medium">
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="grow hidden lg:block">
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
