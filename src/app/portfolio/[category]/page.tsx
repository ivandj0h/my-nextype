"use client"

import React from "react";
import {container, mainStyle, textLg} from "@/utils/styles-collections";


const CategoryPage: React.FC = () => {
    return (
        <main className={mainStyle}>
            <div className={container}>
                <h1 className={[textLg, "pt-8"].join(" ")}>This is Category Page</h1>
            </div>
        </main>
    );
}

export default CategoryPage;
