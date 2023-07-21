import React from 'react';
import ErrorOne from '../blogs/pages/Errors/ErrorOne/ErrorOne';
import Head from 'next/head';

const firstError = () => {
    return (
        <>
        <Head> <title>401</title> </Head>
           <ErrorOne></ErrorOne> 
        </>
    );
};

export default firstError;