import React, {useEffect} from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
// import Menu from '@/components/Showcases/Menu';
import VerticalParallax from '@/components/Custom/VerticalParallax';
import Numbers from '@/components/Custom/VerticalParallax/Numbers';
import Block from '@/components/Custom/VerticalParallax/Block';
import Footer from '@/components/OnePage/Footer';
import Navbar from "@/components/Common/MainNavbar";

function MintInfo() {
    useEffect(() => {
        document.body.classList.add('main-bg');
        return () => document.body.classList.remove('main-bg');
    }, []);

    return (
        <>
            <Head>
                <title>Mint Info - The Bohemian Boys</title>
            </Head>

            <Loader/>
            <Navbar curve noStatic/>
            {/*<Menu/>*/}
            <main className="main-bg">
                <VerticalParallax/>
                <Numbers paddingTop/>
                <Block/>
            </main>
            <Footer/>
        </>
    )
}

MintInfo.getLayout = page => <Layout>{page}</Layout>

export default MintInfo;
