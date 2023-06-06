"use client"

import React, {JSX} from "react";
import Image from "next/image";
import JobTimelineComponent from "@/components/additionals/JobTimelineComponent";

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mt-20 md:mt-48 items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-8 md:mb-0 mt-10 md:mt-0">
                    <Image
                        src="/profile_images.jpg"
                        alt="Your Name"
                        width={300}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-justify w-full md:w-3/4 ml-2">
                    <h1 className="text-4xl font-bold mt-5">
                        ivandjoh
                    </h1>
                    <h2 className="text-2xl text-gray-500 mt-3">
                        Sr. Software Engineer
                    </h2>
                    <p className="text-lg mt-5">
                        I am a senior software engineer specializing in developing high-performance web applications.
                        With strong proficiency in Java, Golang, JavaScript, TypeScript, and modern libraries and
                        frameworks like React, Next.js, and Tailwind CSS, I aim to create seamless user experiences on
                        the web.
                    </p>
                    <p className="text-lg mt-5">
                        I love to explore new technologies and enjoy solving challenging problems. Continuous learning
                        and growing, I am always eager to take on new and exciting tasks.
                    </p>
                    <p className="text-lg mt-40">
                        Best regards, <br/>
                        <span className="font-thin">ivandjoh</span>
                    </p>
                </div>
            </div>
            <div className="mt-10 px-4">
                <h3 className="text-2xl font-bold mb-5">Working Experience</h3>
                <JobTimelineComponent />
            </div>
        </div>
    );
}

export default AboutPage;
