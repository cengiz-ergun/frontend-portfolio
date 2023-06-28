import { Metadata } from "next"
import { SubHead } from "./components/SubHead"
import { PopupList } from "./components/PopupList"
import { Pagination } from "./components/Pagination"
import { PopupSetupAndPreviewContainer } from "./components/PopupSetupAndPreviewContainer/PopupSetupAndPreviewContainer"
import { Main } from "./components/Main"
import { GraySection } from "./components/GraySection"
import Image from "next/image"
import imgShoesSource from "@root/public/general/shoes.png"
import imgCamperSource from "@root/public/general/camper.svg"

export const metadata: Metadata = {
    title: "Popup Generator",
    description: "Powered by Popup Generator",
    icons: {
        icon: "./favicon.png",
    },
}

export default function Home() {
    return (
        <>
            <div className="bg-gradient-main px-5 2xl:px-36 py-6">
                <Main />
            </div>
            <div className="absolute -translate-y-1/2 flex flex-row px-5 2xl:px-36">
                <div className="max-w-[400px] h-[468px] bg-white flex flex-col px-5 py-11 items-center text-center rounded-l-[40px] rounded-r-[40px] lg:rounded-r-none">
                    <Image
                        src={imgCamperSource}
                        width={106}
                        height={38}
                        alt="camper"
                        className="mb-8"
                    />
                    <p className="text-4xl font-poppins font-bold mb-2.5">
                        Join the club
                    </p>
                    <p className="text-lg mb-7">
                        Subscribe and Get an Extra 25% Off on your first
                        purchase.
                    </p>
                    <input
                        disabled
                        className="w-[280px] h-[48px] border border-solid rounded-xl pl-3 mb-4
                    "
                        placeholder="Email address"
                    ></input>
                    <button
                        disabled
                        className="w-[280px] h-[48px] bg-black rounded-xl text-white mb-5"
                    >
                        Subscribe
                    </button>
                    <p className="text-xs text-gray-600 text-start max-w-[275px]">
                        By signing up, you agree to Privacy Policy and Terms of
                        Use.
                    </p>
                </div>
                <Image
                    src={imgShoesSource}
                    width={400}
                    height={468}
                    alt="shoes"
                    className="hidden lg:block rounded-r-[40px]"
                />
            </div>
            <div className="bg-custom-gray px-5 2xl:px-36 text-white pt-[361px] pb-[137px]">
                <GraySection />
            </div>
            <div className="2xl:px-36 px-5 py-24 font-poppins">
                <div id="modal-card-generator" className="max-w-md mb-24">
                    <h2 className="font-semibold text-4xl mb-3.5">
                        Modal Card Generator
                    </h2>
                    <p>
                        Measure your return on email marketing efforts easier
                        and faster by using the best online tools. Popups are
                        ready to help you build an efficient email list!
                    </p>
                </div>

                <SubHead num={1} subHeaderText="Choose your template" />
                <PopupList />
                <Pagination />
                <PopupSetupAndPreviewContainer />
            </div>
        </>
    )
}
