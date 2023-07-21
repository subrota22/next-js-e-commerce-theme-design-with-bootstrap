import Head from 'next/head';
import React from 'react';
import StaticNavigation from '../blogs/pages/LayoutPages/StaticNavigation/StaticNavigation';

const staticNavigation = () => {
    return (
        <>
            <Head> <title>Static navigation </title> </Head>
            <StaticNavigation></StaticNavigation>
        </>
    );
};

export default staticNavigation;