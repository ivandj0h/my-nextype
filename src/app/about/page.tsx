"use client"

import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
    return (
        <div className="flex mt-48 items-center justify-center">
            <div className="flex flex-col items-center justify-center w-1/2">
                <Image
                    src="/hero.jpg"
                    alt="Your Name"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col items-start text-justify w-1/2">
                <h1 className="text-4xl font-bold mt-5">
                    ivandjoh
                </h1>

                <h2 className="text-2xl text-gray-500 mt-3 text-justify">
                    Sr. Software Engineer
                </h2>

                <p className="text-lg text-justify mt-5 ml-5">
                    I am a senior software engineer specializing in developing high-performance web applications. With strong proficiency in Java, Golang, JavaScript, TypeScript, and modern libraries and frameworks like React, Next.js, and Tailwind CSS, I aim to create seamless user experiences on the web.
                </p>

                <p className="text-lg text-justify mt-5 ml-5">
                    I love to explore new technologies and enjoy solving challenging problems. Continuous learning and growing, I am always eager to take on new and exciting tasks.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
