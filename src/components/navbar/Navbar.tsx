"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/utils/nav-links/NavLinks";
import { FiMenu, FiX } from 'react-icons/fi';

import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        console.log("clicked");
        closeMenu();
    };

    return (
        <>
            <div className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm h-24 p-2">
                <nav className={`${styles.navBar} fixed w-full z-50 flex justify-between items-center bg-white border-b border-gray-200 shadow-sm h-24 p-2`}>
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="cursor-pointer flex items-center">
                                <Image src="/logo.svg" alt="ivandjoh" width={50} height={50} className="rounded-full" />
                                <span className="ml-1 font-light">.com</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-end items-center space-x-4 flex-grow">
                        {links.map((link, index) => (
                            <Link key={index} href={link.url}>
                                <p className={styles.link}>{link.title}</p>
                            </Link>
                        ))}
                        <div>
                            <button
                                onClick={handleLogout}
                                className="bg-sky-500 hover:bg-sky-600 hover:text-white text-white font-medium py-2 px-6 rounded-md mr-4"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <div className="fixed inset-0 inset-y-24 flex items-center justify-center z-40 bg-white">
                        <div className="space-y-10 text-center">
                            {links.map((link, index) => (
                                <Link key={index} href={link.url}>
                                    <p onClick={closeMenu} className="cursor-pointer">{link.title}</p>
                                </Link>
                            ))}
                            <button
                                onClick={handleLogout}
                                className="bg-sky-500 hover:bg-sky-600 hover:text-white text-white font-medium py-2 px-4 rounded-md max-w-fit"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
