import Head from 'next/head';
import React from 'react';
import ErrorThree from '../blogs/pages/Errors/ErrorThree/ErrorThree';

const thirdError = () => {
    return (
        <>
            <Head>
                <title> 500 </title>
            </Head>
            <ErrorThree></ErrorThree>
        </>
    );
};

export default thirdError;