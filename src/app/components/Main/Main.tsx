import Image from "next/image"
import React from "react"
import imgSource from "@root/public/favicon.png"
import imgSourceCheck from "@root/public/general/check.svg"

type Props = {}

export const Main = (props: Props) => {
    return (
        <>
            <nav className="mb-24">
                <div className="flex flex-row justify-between items-center">
                    <a
                        href="#"
                        className="flex flex-row justify-between items-center gap-3 cursor-pointer w-fit"
                    >
                        <Image
                            src={imgSource}
                            alt="main-logo"
                            width={36}
                            height={36}
                        />
                        <span className="text-base font-extrabold">
                            modal.cards
                        </span>
                    </a>
                    <ul className="hidden lg:flex flex-row justify-center items-center text-base gap-7 cursor-pointer">
                        <a href="#main"><li>Main</li></a>
                        <a href="#modal-card-generator"><li>Product Tour</li></a>
                        <a href="#features"><li>Features</li></a>
                        <a href="#faq"><li>FAQ</li></a>
                    </ul>
                    <div className="flex flex-row justify-center items-center gap-7">
                        {/* <button className="hidden md:block">Sign in</button> */}
                        <a
                            href="#modal-card-generator"
                            className="bg-button text-white px-5 py-2 rounded-xl cursor-pointer hover:opacity-90 shadow-button-smaller"
                        >
                            Try for free
                        </a>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col w-full">
                <h1 className="font-poppins text-6xl md:text-7xl font-semibold max-w-[570px] mb-5">
                    Simple modal card generator
                </h1>
                <p className="font-poppins text-2xl leading-normal mb-14">
                    A utility-first CSS framework packed with classes like flex,
                    pt-4, text-center and rotate-90 that can becomposed to build
                    any design, directly in your markup.
                </p>
                <a
                    href="#modal-card-generator"
                    className="bg-button text-white text-lg px-7 py-4 w-44 rounded-xl cursor-pointer hover:opacity-90 text-center mb-10 shadow-button-bigger"
                >
                    Try it out now
                </a>
                <div className="flex flex-col md:flex-row justify-start gap-6 opacity-60 pb-80">
                    <div className="flex flex-row justify-start items-center gap-2.5">
                        <Image src={imgSourceCheck} width={16} height={16} alt="check-image" />
                        <span className="text-sm font-poppins">Free and paid plans</span>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2.5">
                        <Image src={imgSourceCheck} width={16} height={16} alt="check-image" />
                        <span className="text-sm font-poppins">Setup in minutes</span>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2.5">
                        <Image src={imgSourceCheck} width={16} height={16} alt="check-image" />
                        <span className="text-sm font-poppins">No credit card required*</span>
                    </div>
                </div>
            </div>
        </>
    )
}
