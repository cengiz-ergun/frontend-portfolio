import { Metadata } from "next"
import { SubHead } from "./components/SubHead"
import { PopupList } from "./components/PopupList"
import { Pagination } from "./components/Pagination"
import { PopupSetupAndPreviewContainer } from "./components/PopupSetupAndPreviewContainer/PopupSetupAndPreviewContainer"

export const metadata: Metadata = {
    title: "Popup Generator",
    description: "Powered by Popup Generator"
}

export default function Home() {
    return (
        <>
            <div className="2xl:px-64 px-5 py-24 font-poppins">
                <div className="max-w-md mb-24">
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
