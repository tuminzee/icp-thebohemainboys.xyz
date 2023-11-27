import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/random/03.jpg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/random/04.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h3>{"Our Story".toUpperCase()}</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>We at Boho Labs are creating The Bohemian Boys NFT collection. Our mission is to redefine luxury travel, making it seamless and rewarding. Imagine hassle-free booking, exclusive rewards, and immersive adventures. As NFT pioneers, we're crafting unique journeys for collectors and travel aficionados, setting a new standard in unforgettable experiences.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
