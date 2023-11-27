import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/InnerPages/About/Services';
import Team from '@/components/Custom/Team';
import Footer from '@/components/OnePage/Footer';

function PageAbout() {
    useEffect(() => {
        document.body.classList.add('main-bg');
        return () => document.body.classList.remove('main-bg');
    }, []);

    const headerMetadata = {
        subTitle: "Who we are?",
        title: "We are curating extraordinary journeys through our NFTs",
        text: "About Us"
    }

    return (
        <>
            <Head>
                <title>About Us - The Bohemian Boys</title>
            </Head>

            <Loader />
            <Navbar mainBg />
            <main>
                <Header data={headerMetadata} />
                <Story />
                <Services />
                <Team />
            </main>
            <br/>
            <Footer />
        </>
    )
}

PageAbout.getLayout = page => <Layout>{page}</Layout>

export default PageAbout;
