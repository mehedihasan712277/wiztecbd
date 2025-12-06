"use client";
import logo from "@/src/assets/icons/logo.png";
import favourite from "@/src/assets/icons/favourite.png";

import { menu } from "@/src/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    return (
        <div className="flex justify-between items-center py-2.5">
            <Image src={logo} alt="logo"></Image>
            <div className="flex gap-8">
                {menu.map((ele) => (
                    <Link
                        href={`/${ele.link}`}
                        key={ele.name}
                        className={`text-[18px] font-semibold ${ele.link === path ? "text-brand_color_soft" : "text-text-menu"}`}
                    >
                        {ele.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                    <Image src={favourite} width={24} height={24} className="w-6 h-6" alt="icon"></Image>
                    <p className="text-text-menu text-[16px] font-medium">Favourite</p>
                </div>

                <button className="bg-brand_color_soft rounded-full px-4 py-3 text-[16px] font-semibold text-[#EEEBED]">Login Now</button>
            </div>
        </div>
    );
};

export default Navbar;
