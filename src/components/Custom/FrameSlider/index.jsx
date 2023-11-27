import React, {useEffect} from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Link from "next/link";

function FrameSlider({data}) {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div className="slideshow">
            <div className="slides slides--images">
                {
                    data.map((item, index) => (
                        <div className={`slide ${index === 0 ? 'slide--current' : ''}`} key={item.id}>
                            <div className="slide__img bg-img" data-background={item.background}></div>
                        </div>
                    ))
                }
            </div>
            <div className="slides slides--titles">
                {
                    data.map((item, index) => (
                        <div className={`slide ${index === 0 ? 'slide--current' : ''}`} key={index}>
                            <div className="slide__title text-center">
                                <h2 className="mb-15">{(item?.place) ? (item?.place) + "," : ""} {item?.type}</h2>
                                <br/>
                                <h1>
                                    <Link href={`/explore/${item.link}`}>
                                        {item.title}
                                    </Link>
                                </h1>

                            </div>


                        </div>
                    ))
                }
            </div>
            <nav className="slidenav">
                <div className="container">
                    <button className="slidenav__item slidenav__item--prev cursor-pointer">
                        <span><i className="fas fa-chevron-left"></i></span>
                        <span><span>Prev</span></span>
                    </button>
                    <button className="slidenav__item slidenav__item--next cursor-pointer">
                        <span><span>Next</span></span>
                        <span><i className="fas fa-chevron-right"></i></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default FrameSlider
