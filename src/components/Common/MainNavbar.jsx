import React, {useEffect} from 'react';
import Link from 'next/link';

function MainNavbar({lightMode, mainBg, subBg, noStatic, curve}) {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleScroll() {
        const bodyScroll = window.scrollY;
        const navbar = document.querySelector(".navbar");

        if (bodyScroll > 300) navbar.classList.add("nav-scroll");
        else navbar.classList.remove("nav-scroll");
    }

    function handleDropdownMouseMove(event) {
        event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
    }

    function handleDropdownMouseLeave(event) {
        event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
    }

    function handleDropdownSideMouseMove(event) {
        event.currentTarget.querySelector('.dropdown-side').classList.add('show');
    }

    function handleDropdownSideMouseLeave(event) {
        event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
    }

    function toggleNavbar() {
        document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
    }

    // function toggleSearch() {
    //     let form = document.querySelector(".navbar .search-form");
    //     let closeBtn = document.querySelector(".search-form .close-search");
    //
    //     form.classList.toggle("open");
    //     if (form.classList.contains('open')) closeBtn.style.display = 'block';
    //     else closeBtn.style.display = 'none';
    // }

    return (
        <nav
            className={`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`}>
            <div className="container">
                <Link href="/" className="logo icon-img-60">
                    {/*<a className="logo icon-img-60" href="./">*/}
                    {
                        lightMode ?
                            <img src="/dark/assets/imgs/tbb-logo.png" alt="logo"/>
                            :
                            <img src="/dark/assets/imgs/tbb-logo.png" alt="logo"/>
                    }
                    {/*</a>*/}
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" href={`/`}><span*/}
                        {/*        className="rolling-text">HOME</span></Link>*/}
                        {/*</li>*/}


                        {/*<li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove}*/}
                        {/*    onMouseLeave={handleDropdownMouseLeave}>*/}
                        {/*    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"*/}
                        {/*       aria-haspopup="true" aria-expanded="false">*/}
                        {/*        <span className="rolling-text">Home</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu mega-menu">*/}
                        {/*        <div className="container">*/}
                        {/*            <div className="row">*/}
                        {/*                <div className="col-lg-3">*/}
                        {/*                    <div className="clumn">*/}
                        {/*                        <div className="title">*/}
                        {/*                            <h6 className="sub-title ls1">Home Dark</h6>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="links">*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-main">Main*/}
                        {/*                                Home</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-corporate">Corporate*/}
                        {/*                                Business</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-onepage">Home One*/}
                        {/*                                page</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-digital-agency">Digital*/}
                        {/*                                Agency</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/dark/home-freelancer">Freelancer</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-marketing-agency">Marketing*/}
                        {/*                                Agency</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-creative-agency">Creative*/}
                        {/*                                Agency</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/home-startup">Startup*/}
                        {/*                                Bussines</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/dark/home-architecture">Architecture</Link>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="col-lg-3">*/}
                        {/*                    <div className="clumn">*/}
                        {/*                        <div className="title">*/}
                        {/*                            <h6 className="sub-title ls1">Home Light</h6>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="links">*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-main">Main*/}
                        {/*                                Home</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-corporate">Corporate*/}
                        {/*                                Business</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-onepage">Home One*/}
                        {/*                                page</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-digital-agency">Digital*/}
                        {/*                                Agency</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/light/home-freelancer">Freelancer</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-marketing-agency">Marketing*/}
                        {/*                                Agency</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-creative-agency">Creative*/}
                        {/*                                Agency</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/home-startup">Startup*/}
                        {/*                                Bussines</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/light/home-architecture">Architecture</Link>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="col-lg-3">*/}
                        {/*                    <div className="clumn">*/}
                        {/*                        <div className="title">*/}
                        {/*                            <h6 className="sub-title ls1">Showcases</h6>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="links">*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/dark/showcase-parallax-slider">Parallax Slider</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/showcase-frame-slider">Frame*/}
                        {/*                                Slider</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/showcase-circle-slider">Circle*/}
                        {/*                                Slider</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/showcase-carousel">Showcase*/}
                        {/*                                Carousel</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/dark/showcase-interactive-center-horizontal">Interactive*/}
                        {/*                                Links1</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/dark/showcase-interactive-center">Interactive*/}
                        {/*                                Links2</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/dark/showcase-parallax">Vertical*/}
                        {/*                                Parallax</Link>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="col-lg-3">*/}
                        {/*                    <div className="clumn">*/}
                        {/*                        <div className="title">*/}
                        {/*                            <h6 className="sub-title ls1">Showcases Light</h6>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="links">*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/light/showcase-parallax-slider">Parallax Slider</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/showcase-carousel">Showcase*/}
                        {/*                                Carousel</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/showcase-frame-slider">Frame*/}
                        {/*                                Slider</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/light/showcase-circle-slider">Circle Slider</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/light/showcase-interactive-center-horizontal">Interactive*/}
                        {/*                                Links1</Link>*/}
                        {/*                            <Link className="dropdown-item"*/}
                        {/*                                  href="/light/showcase-interactive-center">Interactive*/}
                        {/*                                Links2</Link>*/}
                        {/*                            <Link className="dropdown-item" href="/light/showcase-parallax">Vertical*/}
                        {/*                                Parallax</Link>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                        <li className="nav-item">
                            <Link className="nav-link" href="/about-us"><span
                                className="rolling-text">About Us</span></Link>
                        </li>


                        {/*<li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove}*/}
                        {/*    onMouseLeave={handleDropdownMouseLeave}>*/}
                        {/*    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="/info/about-us"*/}
                        {/*          role="button"*/}
                        {/*          aria-haspopup="true" aria-expanded="false"><span*/}
                        {/*        className="rolling-text">About Us</span></Link>*/}
                        {/*    <div className="dropdown-menu">*/}
                        {/*        <Link className="dropdown-item"*/}
                        {/*              href="#">Team</Link>*/}
                        {/*        <Link className="dropdown-item"*/}
                        {/*              href="#">Partners</Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                        <li className="nav-item">
                            <Link className="nav-link" href="/experiences"><span
                                className="rolling-text">Experiences</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="#"><span
                                className="rolling-text">Loyalty Program</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/mint-info"><span
                                className="rolling-text">Mint Info</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="#"><span
                                className="rolling-text">Seasonal Calendar</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/ultra-luxe-stays"><span
                                className="rolling-text">Ultra Luxe Stay</span></Link>
                        </li>


                        {/*<li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove}*/}
                        {/*    onMouseLeave={handleDropdownMouseLeave}>*/}
                        {/*    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"*/}
                        {/*       aria-haspopup="true" aria-expanded="false">*/}
                        {/*        <span className="rolling-text">Portfolio</span>*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu">*/}
                        {/*        <li className="dropdown-item" onMouseMove={handleDropdownSideMouseMove}*/}
                        {/*            onMouseLeave={handleDropdownSideMouseLeave}>*/}
                        {/*            <a href="#0">Classic Grid <i className="fas fa-angle-right icon-arrow"></i></a>*/}
                        {/*            <ul className="dropdown-side">*/}
                        {/*                <li><Link className="dropdown-item"*/}
                        {/*                          href={`/${lightMode ? 'light' : 'dark'}/portfolio-grid-2`}>Grid 2*/}
                        {/*                    Columns</Link></li>*/}
                        {/*                <li><Link className="dropdown-item"*/}
                        {/*                          href={`/${lightMode ? 'light' : 'dark'}/portfolio-grid-3`}>Grid 3*/}
                        {/*                    Columns</Link></li>*/}
                        {/*                <li><Link className="dropdown-item"*/}
                        {/*                          href={`/${lightMode ? 'light' : 'dark'}/portfolio-grid-4`}>Grid 4*/}
                        {/*                    Columns</Link></li>*/}
                        {/*            </ul>*/}
                        {/*        </li>*/}
                        {/*        <li className="dropdown-item" onMouseMove={handleDropdownSideMouseMove}*/}
                        {/*            onMouseLeave={handleDropdownSideMouseLeave}>*/}
                        {/*            <a href="#0">Masonry <i className="fas fa-angle-right icon-arrow"></i></a>*/}
                        {/*            <ul className="dropdown-side">*/}
                        {/*                <li><Link className="dropdown-item"*/}
                        {/*                          href={`/${lightMode ? 'light' : 'dark'}/portfolio-masonry-2`}>Masonry*/}
                        {/*                    2 Columns</Link></li>*/}
                        {/*                <li><Link className="dropdown-item"*/}
                        {/*                          href={`/${lightMode ? 'light' : 'dark'}/portfolio-masonry-3`}>Masonry*/}
                        {/*                    3 Columns</Link></li>*/}
                        {/*                <li><Link className="dropdown-item"*/}
                        {/*                          href={`/${lightMode ? 'light' : 'dark'}/portfolio-masonry-4`}>Masonry*/}
                        {/*                    4 Columns</Link></li>*/}
                        {/*            </ul>*/}
                        {/*        </li>*/}
                        {/*        <li><Link className="dropdown-item"*/}
                        {/*                  href={`/${lightMode ? 'light' : 'dark'}/portfolio-metro`}>Portfolio*/}
                        {/*            Metro</Link></li>*/}
                        {/*        <li><Link className="dropdown-item"*/}
                        {/*                  href={`/${lightMode ? 'light' : 'dark'}/portfolio-modern`}>Modern Grid</Link>*/}
                        {/*        </li>*/}
                        {/*        <li><Link className="dropdown-item"*/}
                        {/*                  href={`/${lightMode ? 'light' : 'dark'}/project-details1`}>Project Details*/}
                        {/*            1</Link></li>*/}
                        {/*        <li><Link className="dropdown-item"*/}
                        {/*                  href={`/${lightMode ? 'light' : 'dark'}/project-details2`}>Project Details*/}
                        {/*            2</Link></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove}*/}
                        {/*    onMouseLeave={handleDropdownMouseLeave}>*/}
                        {/*    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"*/}
                        {/*       aria-haspopup="true" aria-expanded="false">*/}
                        {/*        <span className="rolling-text">Blogs</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu">*/}
                        {/*        <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-classic`}>Blog*/}
                        {/*            Standerd</Link>*/}
                        {/*        <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-list`}>Blog*/}
                        {/*            List</Link>*/}
                        {/*        <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-half-img`}>Image*/}
                        {/*            Out Frame</Link>*/}
                        {/*        <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/blog-details`}>Blog*/}
                        {/*            Details</Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove}*/}
                        {/*    onMouseLeave={handleDropdownMouseLeave}>*/}
                        {/*    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"*/}
                        {/*       aria-haspopup="true" aria-expanded="false">*/}
                        {/*        <span className="rolling-text">Shop</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu">*/}
                        {/*        <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/shop-list`}>Shop*/}
                        {/*            List</Link>*/}
                        {/*        <Link className="dropdown-item" href={`/${lightMode ? 'light' : 'dark'}/shop-product`}>Single*/}
                        {/*            Product</Link>*/}
                        {/*        <Link className="dropdown-item"*/}
                        {/*              href={`/${lightMode ? 'light' : 'dark'}/shop-cart`}>Cart</Link>*/}
                        {/*        <Link className="dropdown-item"*/}
                        {/*              href={`/${lightMode ? 'light' : 'dark'}/shop-checkout`}>Checkout</Link>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" href={`/${lightMode ? 'light' : 'dark'}/page-contact`}><span*/}
                        {/*        className="rolling-text">Contact</span></Link>*/}
                        {/*</li>*/}


                    </ul>
                </div>

                {/*<div className="search-form">*/}
                {/*    <div className="form-group">*/}
                {/*        <input type="text" name="search" placeholder="Search"/>*/}
                {/*        <button><span className="pe-7s-search"></span></button>*/}
                {/*    </div>*/}
                {/*    <div className="search-icon" onClick={toggleSearch}>*/}
                {/*        <span className="pe-7s-search open-search"></span>*/}
                {/*        <span className="pe-7s-close close-search"></span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}

export default MainNavbar
