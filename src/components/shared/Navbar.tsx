"use client";
import logo from "@/src/assets/icons/logo.png";
import favourite from "@/src/assets/icons/favourite.png";
import { menu } from "@/src/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="relative">
            {/* Desktop & Mobile Header */}
            <div className="flex justify-between items-center lg:py-2.5">
                <Image src={logo} alt="logo" className="h-auto md:h-[30px] w-[100px] md:w-auto" />

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 xl:gap-8">
                    {menu.map((ele) => (
                        <Link
                            href={`${ele.link}`}
                            key={ele.name}
                            className={`text-[18px] font-semibold ${ele.link === path ? "text-brand_color_soft" : "text-text-menu"}`}
                        >
                            {ele.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-1">
                        <Image src={favourite} width={24} height={24} className="w-6 h-6" alt="icon" />
                        <p className="text-text-menu text-[16px] font-medium">Favourite</p>
                    </div>
                    <button className="bg-brand_color_soft rounded-full px-4 py-3 text-[16px] font-semibold text-[#EEEBED]">Login Now</button>
                </div>

                {/* Mobile Actions */}
                <div className="lg:hidden flex items-center gap-1 md:gap-3">
                    <button className="p-2" aria-label="Favourites">
                        <Image src={favourite} width={24} height={24} className="w-6 h-6" alt="favourites" />
                    </button>
                    <button className=" text-[16px] font-semibold">Login</button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-text-menu hover:text-brand_color_soft transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-4">
                        {menu.map((ele) => (
                            <Link
                                href={`/${ele.link}`}
                                key={ele.name}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-[16px] font-semibold ${ele.link === path ? "text-brand_color_soft" : "text-text-menu"}`}
                            >
                                {ele.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
