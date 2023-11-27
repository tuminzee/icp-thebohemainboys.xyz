import React from "react";
//= Packages
import Script from "next/script";
import Head from "next/head";
//= Common Styles
import '@/styles/modal-video.css';
import "swiper/css/bundle";
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>The Bohemian Boys</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Component {...pageProps} />
        <Analytics />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/parallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/ScrollTrigger.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/ScrollSmoother.min.js"></Script>
      <Script strategy="beforeInteractive" src="/showcase/assets/js/anime.min.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/imgReveal/demo.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/scripts.js"></Script>
    </>
  );
}

export default App;
