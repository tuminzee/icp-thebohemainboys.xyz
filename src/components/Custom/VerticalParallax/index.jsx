import React, {useEffect} from 'react';
// import Link from 'next/link';
//= Scripts
import parallaxieGroup from '@/common/parallaxieGroup';

function VerticalParallax() {
    useEffect(() => {
        parallaxieGroup(`.bg-img.parallaxie`, 0.2);
    }, []);

    return (
        <section className="parallax-show">

            <div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/roadmap/01.jpg"
                 data-overlay-dark="3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="caption text-center">
                                <h3 data-swiper-parallax="-1000">Online merchandise store</h3>
                                <h3 className="mb-30" data-swiper-parallax="-1000">Membership card giveaways</h3>
                                <h2>PHASE 1</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/roadmap/02.jpg"
                 data-overlay-dark="3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="caption text-center">
                                <h3 data-swiper-parallax="-1000">IRL meetups</h3>
                                <h3 className="mb-30" data-swiper-parallax="-1000">Ultra luxe stay giveaways</h3>
                                <h2>PHASE 2</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/roadmap/03.png"
                 data-overlay-dark="3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="caption text-center">
                                <h3 data-swiper-parallax="-1000">Walking tours listing</h3>
                                <h3 className="mb-30" data-swiper-parallax="-1000">More perks added on loyalty program</h3>
                                <h2>PHASE 3</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/roadmap/04.jpg"
                 data-overlay-dark="3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="caption text-center">
                                <h3 data-swiper-parallax="-1000">All-expense paid experience giveaways</h3>
                                <h3 className="mb-30" data-swiper-parallax="-1000">Culinary experience listing</h3>
                                <h2>PHASE 4</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/2.jpg"*/}
            {/*     data-overlay-dark="3">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row justify-content-center">*/}
            {/*            <div className="col-lg-10">*/}
            {/*                <div className="caption text-center">*/}
            {/*                    <h6 className="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>*/}
            {/*                    <h1>*/}
            {/*                        <Link href="/project-details1">Fisherman Portrait</Link>*/}
            {/*                    </h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/3.jpg"*/}
            {/*     data-overlay-dark="3">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row justify-content-center">*/}
            {/*            <div className="col-lg-10">*/}
            {/*                <div className="caption text-center">*/}
            {/*                    <h6 className="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>*/}
            {/*                    <h1>*/}
            {/*                        <Link href="/project-details1">Tribos Urbanas</Link>*/}
            {/*                    </h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/4.jpg"*/}
            {/*     data-overlay-dark="3">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row justify-content-center">*/}
            {/*            <div className="col-lg-10">*/}
            {/*                <div className="caption text-center">*/}
            {/*                    <h6 className="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>*/}
            {/*                    <h1>*/}
            {/*                        <Link href="/project-details1">Monsoon in the city</Link>*/}
            {/*                    </h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    )
}

export default VerticalParallax
