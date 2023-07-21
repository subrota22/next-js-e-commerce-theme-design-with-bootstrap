import Head from 'next/head';
import React from 'react';
import ResetPassword from '../blogs/pages/Authentication/ResetPassword/ResetPassword';

const password = () => {
    return (
        <>
            <Head> <title>Reset password</title> </Head>
            <ResetPassword></ResetPassword>
        </>
    );
};

export default password;