import Link from "next/link";

const page = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
            <p className="text-3xl font-semibold text-red-400">The page is in construction</p>
            <Link href="/" className="text-brand_color hover:text-blue-500 transition text-xl">
                Go Home
            </Link>
        </div>
    );
};

export default page;
