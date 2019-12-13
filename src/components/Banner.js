import React, { Component } from 'react';
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className="section">
      <div className="container">
        <h2 className="text-9 font-weight-500 text-center">Featured Offers</h2>
        <p className="lead text-center mb-4">Get Best Offers &amp; Discounts</p>
        <div className="owl-carousel owl-theme banner">
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-4.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">Up to 10% OFF</h5>
                <p className="card-text"><a href="#">On Flight Booking <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-5.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">5% OFF</h5>
                <p className="card-text"><a href="#">On Train Booking <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-1.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">100% Cashback</h5>
                <p className="card-text"><a href="#">On Bus Booking <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-6.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">$10 Cashback</h5>
                <p className="card-text"><a href="#">On Metro Card Recharge<i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-2.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">$50 Cashback</h5>
                <p className="card-text"><a href="#">On Brodband Bill<i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-3.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">Up to 20% OFF</h5>
                <p className="card-text"><a href="#">On Cable Payment<i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </React.Fragment>
         );
    }
}
 
export default Banner;