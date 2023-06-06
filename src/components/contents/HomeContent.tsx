"use client"

import React, {JSX} from "react";
import hero from "public/hero.jpg";
import Image from "next/image";


const HomeContent: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 md:mt-48">
                <div className="order-2 md:order-1 flex flex-1 flex-col gap-5 px-4">
                    <h1 className="text-4xl md:text-8xl ease-linear">The Coding Crusader</h1>
                    <p className="text-xl md:text-2xl font-light ml-2">
                        Welcome to my site, where the Coding Crusader breathes life into the abstract world of
                        software engineering
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-4 px-4 md:px-6 rounded-md max-w-full md:max-w-fit mt-4 md:mt-0">
                        See my work!
                    </button>
                </div>
                <div className="order-1 md:order-2 flex-1 mt-20 md:mt-0">
                    <Image
                        src={hero}
                        alt="Hero Image"
                        className="w-full h-1/2 object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default HomeContent;
