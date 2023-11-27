import Script from 'next/script'


import React, {useEffect} from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/OnePage/Header';
import About from '@/components/OnePage/About';
import Marq from '@/components/OnePage/Marq';
import ImageSection from '@/components/OnePage/Image';
// import Contact from '@/components/OnePage/Contact';
import Footer from '@/components/OnePage/Footer';

function HomeOnePage() {
    useEffect(() => {
        document.body.classList.add('sub-bg');
        return () => document.body.classList.remove('sub-bg');
    }, []);

    return (
        <>
            <Head>
                <title>The Bohemian Boys</title>
            </Head>
            <Script src={`https://www.googletagmanager.com/gtag/js?=G-E9471J9HJ2`}/>
            <Script id="google-analytics">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
         
                  gtag('config', 'G-E9471J9HJ2');
                `}
            </Script>

            <Loader/>
            <LinesTwo/>
            <Navbar curve noStatic/>
            <main className="main-bg">
                <Header/>
                <About/>
                <Marq/>
                {/*<Services />*/}
                {/*<Portfolio />*/}
                {/*<Intro />*/}
                {/*<Testimonials />*/}
                <ImageSection/>
                {/*<Team />*/}
                {/*<Blog />*/}
                {/*<Contact/>*/}
            </main>
            <Footer/>
        </>
    )
}

HomeOnePage.getLayout = page => <Layout>{page}</Layout>

export default HomeOnePage;
