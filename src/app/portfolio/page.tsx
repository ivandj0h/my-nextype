"use client"

import React from "react";
import {container, mainStyle, textLg} from "@/utils/styles-collections";


const PortfolioPage: React.FC = () => {
    return (
        <main className={mainStyle}>
            <div className={container}>
                <h1 className={[textLg, "pt-8"].join(" ")}>This is Portfolio Page</h1>
            </div>
        </main>
    );
}

export default PortfolioPage;
