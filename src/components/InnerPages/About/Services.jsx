import React from 'react';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
const data = [
    {
        id: 1,
        image: 'assets/imgs/serv-icons/0.png',
        title: 'Curated Luxury Travel Itineraries',
        text: 'Our NFTs aren\'t just pixels; they\'re portals to curated journeys that redefine adventure'
    },
    {
        id: 2,
        image: 'assets/imgs/serv-icons/1.png',
        title: 'Ultra Luxe Stays',
        text: 'When we say luxury, we mean it – in every bedsheet thread and sunset view. We\'ve handpicked accommodations that redefine lavish living.'
    },
    {
        id: 3,
        image: 'assets/imgs/serv-icons/2.png',
        title: 'Innovative Loyalty Program',
        text: 'Our loyalty program isn\'t just about points; it\'s about pampering. Rewards at every step of the booking.'
    }


]

function Services({lightMode}) {
    return (
        <section className="serv-box section-padding">
            <div className="container">
                <div className="sec-lg-head mb-80">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="position-re">
                        <h2 className="fz-60 fw-700">Our Utilities</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                    {
                        data.map(item => (
                            <div className="col-lg-4" key={item.id}>
                                <div className="serv-item md-mb50 radius-10">
                                    <div className="icon-img-60 mb-40">
                                        <img src={`/${lightMode ? 'light' : 'dark'}/${item.image}`} alt=""/>
                                    </div>
                                    <h5 className="mb-30 pb-30 bord-thin-bottom"><StatementSplitter
                                        statement={item.title}/></h5>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
