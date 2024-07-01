// Header.jsx

import { Link } from "@inertiajs/react";
import React from "react";
import {
    RiFacebookFill,
    RiInstagramFill,
    RiSearchLine,
    RiTwitterFill,
    RiLinkedinFill,
    RiMenu4Fill,
} from "react-icons/ri";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Header = () => {
    return (
        <header className="relative z-20">
            <div className="w-full p-4 px-16">
                <div className="flex gap-10 items-center justify-between">
                    <div className="flex gap-5">
                        <RiMenu4Fill className="text-4xl text-white" />
                        <img
                            src="/images/logo.png"
                            className="  mx-auto w-32 "
                            alt=""
                        />
                    </div>
                    <div className=" flex items-center justify-items-center justify-between bg-black  px-3 py-1.5 w-[500px] bg-opacity-60 rounded-full shadow-2xl hover:shadow-[0_0_22px_#000000] hover:bg-opacity-100 transition-all ease-in-out duration-300 delay-100">
                        <button className="text-gray-300 px-4 bg-gray-700  rounded-full py-1">
                            Filter
                        </button>
                        <input
                            type="text"
                            placeholder="Search Movies..."
                            className="bg-transparent w-full text-white ring-0 focus:ring-0 border-none focus:outline-none placeholder-gray-500 placeholder:text-center"
                        />
                        <RiSearchLine className="text-3xl text-sky-500" />
                    </div>
                    <div className=" ">
                        <Link>
                            <button className="border-2  py-3 transition-all ease-in-out duration-300 delay-75  hover:bg-sky-600 hover:border-sky-600 hover:text-white px-7 rounded-full flex items-center justify-items-center gap-2">
                                <h1 className="text-white">Login</h1>
                                <MdOutlineArrowRightAlt className="text-2xl text-white " />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;