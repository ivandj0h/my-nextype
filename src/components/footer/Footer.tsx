"use client"

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./footer.module.css";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div>&copy; 2023 <span className="font-bold">ivandjoh</span>. All right reserved</div>
                <div className={styles.socials}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </>
    );
}

export default Footer;
