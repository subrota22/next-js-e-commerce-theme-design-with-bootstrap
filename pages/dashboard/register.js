import React from 'react';
import Register from '../blogs/pages/Authentication/Register/Register';
import Head from 'next/head';

const register = () => {
    return (
        <>
        <Head><title>Register</title></Head>
            <Register></Register>
        </>
    );
};

export default register;