// app/(admin)/layout.tsx
import { ReactNode } from "react";
import Navbar from "@/src/components/shared/Navbar";

export const metadata = {
    title: "Home",
};

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="pt-5 px-[100px]">
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    );
}
