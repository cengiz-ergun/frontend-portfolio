import Image from "next/image"
import React from "react"
import imgShoesSource from "@root/public/general/shoes.png"
import imgCamperSource from "@root/public/general/camper.svg"
import imgBoltSource from "@root/public/general/bolt.svg"
import imgMonetizationSource from "@root/public/general/monetization.svg"

type Props = {}

export const LimboSection = (props: Props) => {
    return (
        <>
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
                    Subscribe and Get an Extra 25% Off on your first purchase.
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
                    By signing up, you agree to Privacy Policy and Terms of Use.
                </p>
            </div>
            <div className="hidden lg:block">
                <Image
                    src={imgShoesSource}
                    width={400}
                    height={468}
                    alt="shoes"
                    className="absolute rounded-r-[40px] z-40"
                />
                <div className="absolute z-50 flex-col w-max gap-2.5 top-24 hidden xl:flex">
                    <div className="px-5 py-3 flex flex-row justify-center items-center gap-2.5 w-max opacity-70 bg-white bottom-0 rounded-xl ml-[340px]">
                        <Image
                            src={imgBoltSource}
                            width={24}
                            height={24}
                            alt="bolt"
                        />
                        <span className="font-poppins">Grow email list</span>
                    </div>
                    <div className="px-5 py-3 flex flex-row justify-center items-center gap-2.5 w-max opacity-70 bg-white bottom-0 rounded-xl ml-[320px]">
                        <Image
                            src={imgMonetizationSource}
                            width={24}
                            height={24}
                            alt="bolt"
                        />
                        <span className="font-poppins">
                            Increase sales conversion
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute hidden xl:block w-[500px] h-80 opacity-50 border-0 bg-gradient-transparent -translate-y-[85px] translate-x-[630px] rounded-[40px] z-30 flex-col"></div>
        </>
    )
}
