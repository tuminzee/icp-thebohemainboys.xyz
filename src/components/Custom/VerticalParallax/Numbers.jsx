import React from 'react'

function Numbers() {
  return (
    <section className="numbers section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item md-mb50">
              <h2 className="fw-800 stroke">850</h2>
              <h6>Elite list spots</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-around">
            <div className="item md-mb50">
              <h2 className="fw-800">500<span className="fz-80 fw-600"></span></h2>
              <h6>Membership card giveaways</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-around">
            <div className="item sm-mb50">
              <h2 className="fw-800 stroke">1<span className="fz-80 fw-600">K+</span></h2>
              <h6>Ultra luxe stay</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="item ml-auto">
              <h2 className="fw-800">8090</h2>
              <h6>Total supply</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers
