import Head from 'next/head';
import React from 'react';
import LayoutStatic from '../blogs/pages/LayoutPages/LayoutStatic/LayoutStatic';

const layoutStatic = () => {
    return (
        <>
            <Head> <title>Static navigation </title> </Head>
            <LayoutStatic></LayoutStatic>
        </>
    );
};

export default layoutStatic;