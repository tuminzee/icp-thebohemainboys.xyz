import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import Footer from '@/components/Custom/Footer';


function InfoPage() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

InfoPage.getLayout = page => <Layout>{page}</Layout>

export default InfoPage;
