"use client"

import React from "react";
import hero from "public/hero.jpg";
import Image from "next/image";


const HomePage: React.FC = () => {
    return (
        <>
            <div className="flex h-16 items-center justify-center gap-100">
                <div className="flex  flex-1 flex-col gap-20">
                    <h1 className="text-8xl ease-linear">The Coding Crusader</h1>
                    <p className="text-2xl font-light  ml-2">
                        Welcome to my site, where the Coding Crusader breathes life into the abstract world of
                        software engineering
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md max-w-fit">
                        See my work!
                    </button>
                </div>
                <div className="flex-1">
                    <Image
                        src={hero}
                        alt="Hero Image"
                        className="w-full h-1/2 object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default HomePage;
