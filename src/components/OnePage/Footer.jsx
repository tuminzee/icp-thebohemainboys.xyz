import React from 'react';
//= Data
import data from '@/data/app-data.json';
import Link from "next/link";

function Footer() {
    // useEffect(() => {
    //     if (window.innerWidth > 991) {
    //         gsap.set('.footer-container', {yPercent: -50})
    //         const uncover = gsap.timeline({paused: true})
    //         uncover.to('.footer-container', {yPercent: 0, ease: 'none'});
    //         ScrollTrigger.create({
    //             trigger: 'main',
    //             start: 'bottom bottom',
    //             end: '+=50%',
    //             animation: uncover,
    //             scrub: true,
    //         });
    //     }
    // }, []);

    return (
        <footer>
            <div className="footer-container mt-25">
                <div className="container align-content-between pb-80 pt-80 ontop">
                    <div className="row justify-content-between">
                        <div className="col-lg-3">
                            <div className="colum md-mb50">
                                <div className="tit mb-20">
                                    <h6>Address</h6>
                                </div>
                                <div className="text">
                                    <p>Delaware, USA</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="colum md-mb50">
                                <div className="tit mb-20">
                                    <h6>Whitelisting Info</h6>
                                </div>
                                <div className="text">
                                    <Link href="https://zealy.io/c/thebohemianboys/questboard" target="_blank">
                                        <p>

                                            Complete our zealy quests and get yourself into Elite list.
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        {/*<div className="col-lg-3 offset-lg-1">*/}
                        {/*  <div className="colum md-mb50">*/}
                        {/*    <div className="tit mb-20">*/}
                        {/*      <h6>Say Hello</h6>*/}
                        {/*    </div>*/}
                        {/*    <div className="text">*/}
                        {/*      <p className="mb-10">*/}
                        {/*        <a href="#0">hello@design.com</a>*/}
                        {/*      </p>*/}
                        {/*      <h5>*/}
                        {/*        <a href="#">+1 840 841 25 69</a>*/}
                        {/*      </h5>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                        <div className="col-lg-3 md-mb50">
                            <div className="tit mb-20">
                                <h6>Social</h6>
                            </div>
                            <ul className="rest social-text">
                                <li>
                                    <a href="https://twitter.com/Bohemianboys" target="_blank">X</a>
                                </li>
                                <li>
                                    <a href="https://www.medium.com/@thebohemianboyss/" target="_blank">Medium</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/tf8Vj2K6Tu" target="_blank">Discord</a>
                                </li>
                                {/*<li>*/}
                                {/*  <a href="#0">Instagram</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        {/*<div className="col-lg-3">*/}
                        {/*  <div className="tit mb-20">*/}
                        {/*    <h6>Newsletter</h6>*/}
                        {/*  </div>*/}
                        {/*  <div className="subscribe">*/}
                        {/*    <form action="contact.php">*/}
                        {/*      <div className="form-group rest">*/}
                        {/*        <input type="email" placeholder="Type Your Email" />*/}
                        {/*        <button type="submit">*/}
                        {/*          <i className="fas fa-arrow-right"></i>*/}
                        {/*        </button>*/}
                        {/*      </div>*/}
                        {/*    </form>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="logo">
                                    The Bohemian Boys
                                    {/*<a href="#0">*/}
                                    {/*  <img src={`/dark/assets/imgs/logo-${lightMode ? 'dark' : 'light'}.png`} alt="" />*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="copyright d-flex">
                                    <div className="ml-auto">
                                        <p className="fz-13">© 2023 The Bohemian Boys by
                                            {/*<span className="underline"><a href={data.author_link} target="_blank">*/}
                                            {" "} {data.author}
                                            {/*</a></span>*/}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
