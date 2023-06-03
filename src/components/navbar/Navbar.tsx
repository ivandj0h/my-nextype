import React from "react";
import Link from "next/link";
import {links} from "@/utils/nav-links/NavLinks";

const Navbar: React.FC = () => {
    return (
        <>
            <div>
                <Link href="/">ivandjoh</Link>
                <div>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.url} key={index}>{link.title}</Link>
                        );
                    })}
                    <button onClick={() => console.log("clicked")}>Logout</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
