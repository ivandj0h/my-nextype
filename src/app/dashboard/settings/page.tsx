"use client"

import React from "react";
import {container, mainStyle, textLg} from "@/utils/styles-collections";


const SettingsPage: React.FC = () => {
    return (
        <main className={mainStyle}>
            <div className={container}>
                <h1 className={[textLg, "pt-8"].join(" ")}>This is Settings Page</h1>
            </div>
        </main>
    );
}

export default SettingsPage;
