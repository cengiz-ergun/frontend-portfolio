"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [state, setState] = useState("default")

    const [showPhone, setShowPhone] = useState(false)
    const [showMail, setShowMail] = useState(false)



    return (
        <div className="px-3 lg:px-0">
            <nav className="flex justify-center items-center w-full inset-x-0 fixed z-10 bg-black text-white py-5">
                <div className="flex flex-row gap-8 text-xl">
                    <Link href={"#me"}>About Me</Link>
                    <Link href={"#projects"}>Projects</Link>
                    <Link href={"#contact"}>Contact</Link>
                </div>
            </nav>

            <div
                id="me"
                className="flex justify-center items-center max-w-7xl h-screen mx-auto"
            >
                <div className="font-inter max-w-md flex flex-col gap-2">
                    <h1 className="text-6xl">Hi, I am Cengiz Ergün.</h1>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <div className="w-full">
                            <hr className="h-px my-6 border-2 border-solid border-black"></hr>
                        </div>
                        <div className="w-fit whitespace-nowrap">
                            <span className="text-xl font-semibold">
                                Web Developer
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        I am a web developer who is dedicated to get a strong
                        place in the web development with the continuous code
                        quality mindset.
                    </div>
                </div>
            </div>

            <div
                id="projects"
                className="h-screen w-full flex justify-center items-center"
            >
                <div className="flex flex-col items-center mx-auto w-full max-w-5xl">
                    <div className="flex flex-row justify-center items-center gap-2 w-full">
                        <div className="w-fit whitespace-nowrap">
                            <span className="text-3xl">Projects</span>
                        </div>
                        <div className="w-full">
                            <hr className="h-px my-6 border-2 border-solid border-black"></hr>
                        </div>
                    </div>

                    <div className="w-full flex flex-row gap-3">
                        <div className="border-2 border-solid border-purple-800 text-purple-800 rounded-full h-min w-8 flex justify-center items-center">
                            1
                        </div>
                        <div className="w-full border-l-4 border-purple-800 px-2 h-[180px]">
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col gap-3">
                                    <span>Project Name: Popup Generator</span>
                                    <div className="flex flex-row items-center gap-2">
                                        <div>Progress:</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-purple-800 h-2.5 rounded-full w-1/3"></div>
                                        </div>
                                    </div>
                                    <Link
                                        href="https://github.com/cengiz-ergun/frontend-portfolio/tree/master/src/app/popupgenerator"
                                        target="blank"
                                    >
                                        <button
                                            type="button"
                                            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-40"
                                        >
                                            Codebase
                                        </button>
                                    </Link>
                                    <Link href="/popupgenerator" target="blank">
                                        {" "}
                                        <button
                                            type="button"
                                            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-40"
                                        >
                                            Production
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex-1 hidden md:flex md:flex-col md:gap-4">
                                    <div className="flex flex-row flex-wrap gap-4">
                                        <button
                                            type="button"
                                            className={`text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ${
                                                state == "techstack"
                                                    ? "bg-purple-800 text-white"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setState("techstack")
                                            }
                                        >
                                            Tech Stack
                                        </button>
                                        <button
                                            type="button"
                                            className={`text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ${
                                                state == "details"
                                                    ? "bg-purple-800 text-white"
                                                    : ""
                                            }`}
                                            onClick={() => setState("details")}
                                        >
                                            Project Details
                                        </button>
                                    </div>
                                    <div>
                                        {state == "details" && (
                                            <p>
                                                The main goal of the popups is
                                                to maximize website conversions.
                                                It helps marketing agencies,
                                                e-commerce marketers, and
                                                bloggers to grow their
                                                businesses through popups.
                                                Popups aim to increase user
                                                engagement and sales.
                                            </p>
                                        )}
                                        {state == "techstack" && (
                                            <div className="flex flex-row flex-wrap gap-2">
                                                <Image
                                                    className="animate-wiggle"
                                                    src={"/techstack/next.svg"}
                                                    alt="asda"
                                                    width={0}
                                                    height={0}
                                                    style={{
                                                        height: "60px",
                                                        width: "auto",
                                                    }}
                                                />
                                                <Image
                                                    className="animate-wiggle"
                                                    src={"/techstack/react.svg"}
                                                    alt="asda"
                                                    width={0}
                                                    height={0}
                                                    style={{
                                                        height: "60px",
                                                        width: "auto",
                                                    }}
                                                />
                                                <Image
                                                    className="animate-wiggle"
                                                    src={
                                                        "/techstack/javascript.svg"
                                                    }
                                                    alt="asda"
                                                    width={0}
                                                    height={0}
                                                    style={{
                                                        height: "60px",
                                                        width: "auto",
                                                    }}
                                                />
                                                <Image
                                                    className="animate-wiggle"
                                                    src={
                                                        "/techstack/typescript.svg"
                                                    }
                                                    alt="asda"
                                                    width={0}
                                                    height={0}
                                                    style={{
                                                        height: "60px",
                                                        width: "auto",
                                                    }}
                                                />
                                                <Image
                                                    className="animate-wiggle"
                                                    src={"/techstack/sass.svg"}
                                                    alt="asda"
                                                    width={0}
                                                    height={0}
                                                    style={{
                                                        height: "60px",
                                                        width: "auto",
                                                    }}
                                                />
                                                <Image
                                                    className="animate-wiggle"
                                                    src={
                                                        "/techstack/tailwind.svg"
                                                    }
                                                    alt="asda"
                                                    width={0}
                                                    height={0}
                                                    style={{
                                                        height: "60px",
                                                        width: "auto",
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="contact"
                className="h-screen flex flex-col justify-center items-center gap-5"
            >
                <Link
                    target="blank"
                    href={"https://www.linkedin.com/in/cengiz1erg/"}
                >
                    {" "}
                    <Image
                        src={"/general/linkedn.svg"}
                        alt="asda"
                        width={0}
                        height={0}
                        style={{
                            height: "60px",
                            width: "auto",
                        }}
                    />
                </Link>
                <Link target="blank" href={"https://github.com/cengiz-ergun"}>
                    <Image
                        src={"/general/github.svg"}
                        alt="asda"
                        width={0}
                        height={0}
                        style={{
                            height: "60px",
                            width: "auto",
                        }}
                    />
                </Link>
                <div className="flex flex-row justify-between items-center">
                    <Image
                        src={"/general/phone.svg"}
                        alt="asda"
                        width={0}
                        height={0}
                        style={{
                            height: "60px",
                            width: "auto",
                        }}
                        onClick={() => setShowPhone(!showPhone)}
                        // onMouseLeave={() => setShowPhone(false)}
                    />
                    {
                        showPhone && (
                            <span>+90 544 403 06 98</span>
                        )
                    }
                </div>
                <div className="flex flex-row justify-between items-center gap-5">
                    <Image
                        src={"/general/mail.svg"}
                        alt="asda"
                        width={0}
                        height={0}
                        style={{
                            height: "60px",
                            width: "auto",
                        }}
                        onClick={() => setShowMail(!showMail)}
                        // onMouseLeave={() => setShowPhone(false)}
                    />
                    {
                        showMail && (
                            <span>cengiz0.cengiz1@gmail.com</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
