import React from 'react';
import ErrorTwo from '../blogs/pages/Errors/ErrorTwo/ErrorTwo';
import Head from 'next/head';

const secondError = () => {
    return (
        <>
        <Head> <title>404</title>  </Head>
           <ErrorTwo></ErrorTwo> 
        </>
    );
};

export default secondError;