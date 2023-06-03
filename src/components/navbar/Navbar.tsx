"use client"

import React from "react";
import Link from "next/link";
import {links} from "@/utils/nav-links/NavLinks";

import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
    return (
        <>
            <main className={styles.container}>
                <Link href="/" className={styles.logo}>ivandjoh.com</Link>
                <div className={styles.links}>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.url} key={index} className={styles.link}>{link.title}</Link>
                        );
                    })}
                    <button
                        className={styles.logout}
                        onClick={() => console.log("clicked")}>Logout</button>
                </div>
            </main>
        </>
    );
}

export default Navbar;
