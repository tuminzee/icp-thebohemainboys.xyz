import React, {useEffect} from 'react';
//= Scripts
import isInView from '@/common/isInView';

function Block() {
    useEffect(() => {
        window.addEventListener('scroll', handleShowProgressValues);
        return () => window.removeEventListener('scroll', handleShowProgressValues);
    }, []);

    function handleShowProgressValues() {
        isInView({
            selector: ".skill-progress .progres",
            isElements: true,
            callback: (element) => {
                element.style.width = element.getAttribute('data-value');
            }
        });
    }

    return (
        <section className="block-sec section-padding pt-0">
            <div className="container">
                <div className="row lg-marg">
                    <div className="col-lg-6 valign">
                        <div className="md-mb50">
                            <div className="item-flex d-flex align-items-center mb-50">
                                <div>
                                    <div className="icon-img-60">
                                        <img src="/dark/assets/imgs/serv-icons/0.png" alt=""/>
                                    </div>
                                </div>
                                <div className="cont ml-50">
                                    <h6>What's this project's superpower?</h6>
                                    <p className="fz-15">Imagine luxury travel that pampers you so much, your suitcase
                                        gets jealous. We're talking top-notch trips, loyalty treats, and more adventure
                                        categories than you can shake a passport at!</p>
                                </div>
                            </div>

                            <div>

                                <div className="item-flex d-flex align-items-center mb-50">
                                    <div>
                                        <div className="icon-img-60">
                                            <img src="/dark/assets/imgs/serv-icons/1.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="cont ml-50">
                                        <h6>What's The Bohemian Boys NFT Collection?</h6>
                                        <p className="fz-15">It's a swanky collection of 8090 digital gems on the
                                            Ethereum blockchain giving you the real life utility with tremendous
                                            discounts on bookings.</p>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="item-flex d-flex align-items-center mb-50">
                                    <div>
                                        <div className="icon-img-60">
                                            <img src="/dark/assets/imgs/serv-icons/2.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="cont ml-50">
                                        <h6>How are they shaking up luxury travel with web3?</h6>
                                        <p className="fz-15">Think of web3 as the magic wand. It makes luxury travel
                                            accessible to us commoners. By teaming up with travel companies, The
                                            Bohemian Boys give you deals that'll make your piggy bank dance.</p>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="item-flex d-flex align-items-center">
                                    <div>
                                        <div className="icon-img-60">
                                            <img src="/dark/assets/imgs/serv-icons/03.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="cont ml-50">
                                        <h6>Why are these NFTs cooler than an ice sculpture at a desert party?</h6>
                                        <p className="fz-15">Because they're like magic keys to castles, Michelin stars,
                                            and private jet
                                            adventures. They're the golden tickets of luxury living.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cont">
                            <h6 className="sub-title mb-15">Minting value</h6>
                            <h3 className="mb-15">Just 850 seats available, so don't nap on this one! <span
                                className="stroke fw-700 opacity-7">let's go!</span>.</h3>
                            <div className="skills mt-50">
                                <div className="skills-box">
                                    <div className="skill-item mb-40">
                                        <h5 className="fz-14 mb-25">Elite list price: 0.08ETH</h5>
                                        <div className="skill-progress">
                                            <div className="progres" data-value="11%">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-item mt-20">
                                        <h5 className="fz-14 mb-15">Public sale price: 0.09ETH</h5>
                                        <div className="skill-progress">
                                            <div className="progres" data-value="89%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block
