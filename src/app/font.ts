import localFont from "next/font/local";
import { Alexandria } from "next/font/google";

export const generalSans = localFont({
    src: [
        {
            path: "./GeneralSans-Variable.woff2",
            weight: "100 900",
            style: "normal",
        },
    ],
    variable: "--font-general-sans",
    display: "swap",
});

export const alexandria = Alexandria({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-alexandria",
    display: "swap",
});
