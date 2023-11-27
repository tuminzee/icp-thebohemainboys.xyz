import React, {useEffect} from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/showcases';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';
import showcaseScript from '@/common/showcase-script';
//= Components
import Loader from '@/components/Common/Loader';
import Navigation from '@/components/Custom/Navigation';
import FrameSlider from '@/components/Custom/FrameSlider';
import data from '@/data/Custom/hotel-slider.json';


const UltraLuxeStayFilterData = data.filter(item => item.type === 'Ultra Luxe Stay');


function ShowcaseFrameSlider() {
    useEffect(() => {
        customScript();
        showcaseScript.demo();
    }, []);

    return (
        <>
            <Head>
                <title>The Bohemian Boys</title>
            </Head>

            <Loader/>
            <Navigation/>
            {/*<Menu />*/}
            <main>
                <FrameSlider data={UltraLuxeStayFilterData}/>
            </main>
        </>
    )
}

ShowcaseFrameSlider.getLayout = page => <Layout>{page}</Layout>

export default ShowcaseFrameSlider;
