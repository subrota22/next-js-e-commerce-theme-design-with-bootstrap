import Head from 'next/head';
import React from 'react';
import Login from '../blogs/pages/Authentication/Login/Login';

const login = () => {
    return (
        <>
            <Head> <title>Login</title> </Head>
            <Login></Login>
        </>
    );
};

export default login;