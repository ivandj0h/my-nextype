"use client"

import React, { JSX } from "react";


const LoginPage: React.FC = (): JSX.Element => {

    const numbers = [];

    for (let i = 1; i <= 100; i++) {
        numbers.push(<p key={i}>{i}</p>);
    }

    return (
        <>
            <div className="mt-30">
                <h1>This is Login Page</h1>
                {numbers}
            </div>
        </>
    );
}

export default LoginPage;
