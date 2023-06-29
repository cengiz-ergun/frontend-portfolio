import { Metadata } from "next"
import { SubHead } from "./components/SubHead"
import { PopupList } from "./components/PopupList"
import { Pagination } from "./components/Pagination"
import { PopupSetupAndPreviewContainer } from "./components/PopupSetupAndPreviewContainer/PopupSetupAndPreviewContainer"
import { Main } from "./components/Main"
import { GraySection } from "./components/GraySection"
import { LimboSection } from "./components/LimboSection"
import { Qualities } from "./components/Qualities/Qualities"
import { Faq } from "./components/Faq/Faq"
import imgSourceArrowToTop from "@root/public/general/arrow-to-top.svg"
import Image from "next/image"


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
            <a className="cursor-pointer border-1 w-10 h-10 rounded-full bg-toggle fixed bottom-8 right-5 z-50 flex justify-center items-center" href="#main">
                <Image width={100} height={10} alt="arrow" src={imgSourceArrowToTop} />
            </a>
            <div id="main" className="bg-gradient-main px-5 2xl:px-36 py-6">
                <Main />
            </div>
            <div className="absolute -translate-y-1/2 flex flex-row px-5 2xl:px-36">
                <LimboSection />
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
            <div className="px-5 2xl:px-36 mb-32">
                <Qualities />
            </div>
            <div className="px-5 2xl:px-36 mb-32">
                <Faq />
            </div>
        </>
    )
}
