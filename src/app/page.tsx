import img from "@/src/assets/photo.png";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className="flex gap-[69px] items-center h-full min-h-screen px-[72px] py-14">
            <div className="w-[446px] flex flex-col justify-center">
                <div>
                    <p className="text-center font-alexandria">wiztecbd</p>
                    <p className="text-center">Create New Account</p>
                    <p className="text-center">Let’s login to grab amazing deal</p>
                </div>
                <div className="flex flex-col gap-4">
                    <button className="py-2 w-full border rounded">continue with google</button>
                    <button className="py-2 w-full border rounded">continue with apple</button>
                    <button className="py-2 w-full border rounded">continue with email/phone</button>
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
