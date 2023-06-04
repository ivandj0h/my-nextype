"use client"

import React from "react";
import Link from "next/link";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from "./footer.module.css";
import {socialIcons} from "@/utils/nav-links/FooterLinks";

type FooterProps = {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <>
            <div className="fixed bottom-0 w-full bg-gray-300 py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex sm:justify-between flex-col md:flex-row items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        &copy; 2023 &nbsp;&nbsp;<span className="font-bold">ivandjoh</span>. All right reserved
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4">
                        {socialIcons.map((socialIcon, i) => {
                            return (
                                <Link href={socialIcon.url} key={i} className={styles.link} target="_blank">
                                    <FontAwesomeIcon icon={socialIcon.icon}/>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;
