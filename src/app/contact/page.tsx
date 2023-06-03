"use client"

import React from "react";
import {container, mainStyle, textLg} from "@/utils/styles-collections";


const ContactPage: React.FC = () => {
    return (
        <main className={mainStyle}>
            <div className={container}>
                <h1 className={[textLg, "pt-8"].join(" ")}>This is Contact Page</h1>
            </div>
        </main>
    );
}

export default ContactPage;
