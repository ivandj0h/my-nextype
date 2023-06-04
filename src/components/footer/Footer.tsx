"use client"

import React from "react";
import Link from "next/link";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from "./footer.module.css";
import {socialIcons} from "@/utils/nav-links/FooterLinks";

const Footer: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div>&copy; 2023 <span className="font-bold">ivandjoh</span>. All right reserved</div>
                <div className={styles.socials}>
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
