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
            <div className={`${styles.container} ${className}  `}>
                <div className="flex items-center px-4 sm:px-6 lg:px-8">
                    &copy; 2023 &nbsp;&nbsp;<span className="font-bold">ivandjoh</span>. All right reserved
                </div>
                <div className={`${styles.socials} flex justify-end space-x-4 px-4 sm:px-6 lg:px-8`}>
                    {socialIcons.map((socialIcon, i) => {
                        return (
                            <Link href={socialIcon.url} key={i} className={styles.link} target="_blank">
                                <FontAwesomeIcon icon={socialIcon.icon}/>
                            </Link>
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default Footer;
