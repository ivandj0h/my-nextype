"use client"

import React from "react";
import Link from "next/link";

import styles from "./navbar.module.css";

import {links} from "@/utils/nav-links/NavLinks";
import {navBarContainer} from "@/utils/components-styles/navbarStylesComponent";
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className={[navBarContainer, styles.container].join(" ")}>
                <Link href="/" className={styles.logo}>
                    <div className="flex items-center">
                        <Image src="/logo.svg" alt="ivandjoh" width={50} height={50} className="rounded-full" />
                        <span className="ml-1 font-light">.com</span>
                    </div>
                </Link>

                <div className={styles.links}>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.url} key={index} className={styles.link}>{link.title}</Link>
                        );
                    })}
                    <button
                        className="bg-sky-500 hover:bg-sky-600 hover:text-white text-white font-medium py-2 px-4 rounded-md max-w-fit"
                        onClick={() => console.log("clicked")}>Logout</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
