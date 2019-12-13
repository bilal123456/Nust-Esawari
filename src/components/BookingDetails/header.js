import React, { Component } from 'react';

class Bookingheader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>

<header id="header">
<div className="container">
  <div className="header-row">
    <div className="header-column justify-content-start"> 
      
     
      <div className="logo">
          <a href="index.html" title="Quickai - HTML Template"><img src="images/logo.png" alt="Quickai" width="127" height="29" /></a>
      </div>
      
    </div>
    
    <div className="header-column justify-content-end">
    
     
      <nav className="primary-menu navbar navbar-expand-lg">
        <div id="header-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
          <li className="dropdown"> <a className="dropdown-toggle" href="#">Home</a>
              <ul className="dropdown-menu">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Home Version 1</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="index.html">Recharge or Bill Payment</a></li>
                      <li><a className="dropdown-item" href="booking-hotels.html">Booking</a></li>
                    </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Home Version 2</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="index-2.html">Recharge or Bill Payment</a></li>
                      <li><a className="dropdown-item" href="booking-hotels-2.html">Booking</a></li>
                    </ul>
                </li>
                <li><a className="dropdown-item" href="index-3.html">Home Version 3</a></li>
                <li><a className="dropdown-item" href="index-4.html">Home Version 4</a></li>
                <li><a className="dropdown-item" href="index-5.html">Home Version 5</a></li>
                <li><a className="dropdown-item" href="index-6.html">Home Version 6</a></li>
                <li><a className="dropdown-item" href="index-7.html">Home Version 7</a></li>
                <li><a className="dropdown-item" href="index-8.html">Home Version 8</a></li>
                <li><a className="dropdown-item" href="index-9.html">Home Version 9</a></li>
                <li><a className="dropdown-item" href="index-10.html">Home Version 10</a></li>
                
              </ul>
            </li>
            <li className="dropdown"> <a className="dropdown-toggle" href="#">Recharge & Bill Payment</a> 
              <ul className="dropdown-menu">
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Mobile</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="index.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="index-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">DTH</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-dth.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-dth-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Data Card</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-datacard.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-datacard-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Broadband</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-broadband.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-broadband-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Landline</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-landline.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-landline-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Cable TV</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-cabletv.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-cabletv-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Electricity</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-electricity.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-electricity-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Metro</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-metro.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-metro-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Gas</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-gas.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-gas-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Water</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="recharge-bill-water.html">Layout 1</a></li>
                      <li><a className="dropdown-item" href="recharge-bill-water-2.html">Layout 2</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="recharge-plans.html">Recharge Plans</a></li>
                  <li><a className="dropdown-item" href="payment.html">Payment</a></li>
                </ul>
            </li>
            <li className="dropdown dropdown-mega active"> <a className="dropdown-toggle" href="#">Booking</a> 
              <ul className="dropdown-menu">
                <li>
                  <div className="dropdown-mega-content">
                    <div className="row">
                      <div className="col-lg"> <span className="sub-title">Hotels</span>
                        <ul className="dropdown-mega-submenu">
                          <li><a className="dropdown-item" href="booking-hotels.html">Home Layout 1</a></li>
                          <li><a className="dropdown-item" href="booking-hotels-2.html">Home Layout 2</a></li>
                          <li><a className="dropdown-item" href="booking-hotels-list.html">Hotel List</a></li>
                          <li><a className="dropdown-item" href="booking-hotels-grid.html">Hotel Grid</a></li>
                          <li><a className="dropdown-item" href="booking-hotels-details.html">Hotel Details</a></li>
                        </ul>
                      </div>
                      <div className="col-lg"> <span className="sub-title">Flights</span>
                        <ul className="dropdown-mega-submenu">
                          <li><a className="dropdown-item" href="booking-flights.html">Home Layout 1</a></li>
                          <li><a className="dropdown-item" href="booking-flights-2.html">Home Layout 2</a></li>
                          <li><a className="dropdown-item" href="booking-flights-one-way.html">One Way Trip List</a></li>
                          <li><a className="dropdown-item" href="booking-flights-round-trip.html">Round Trip List</a></li>
                          <li><a className="dropdown-item" href="booking-flights-confirm-details.html">Confirm Details</a></li>
                        </ul>
                      </div>
                      <div className="col-lg"> <span className="sub-title">Trains</span>
                        <ul className="dropdown-mega-submenu">
                          <li><a className="dropdown-item" href="booking-trains.html">Home Layout 1</a></li>
                          <li><a className="dropdown-item" href="booking-trains-2.html">Home Layout 2</a></li>
                          <li><a className="dropdown-item" href="booking-trains-list.html">Trains List</a></li>
                          <li><a className="dropdown-item" href="booking-trains-confirm-details.html">Confirm Details</a></li>
                        </ul>
                      </div>
                      <div className="col-lg"> <span className="sub-title">Bus</span>
                        <ul className="dropdown-mega-submenu">
                          <li><a className="dropdown-item" href="booking-bus.html">Home Layout 1</a></li>
                          <li><a className="dropdown-item" href="booking-bus-2.html">Home Layout 2</a></li>
                          <li><a className="dropdown-item" href="booking-bus-list.html">Bus List</a></li>
                          <li><a className="dropdown-item" href="booking-bus-confirm-details.html">Confirm Details</a></li>
                        </ul>
                      </div>
                      <div className="col-lg"> <span className="sub-title">Other</span>
                        <ul className="dropdown-mega-submenu">
                          <li><a className="dropdown-item" href="payment.html">Payment</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown"> <a className="dropdown-toggle" href="#">Features</a>
              <ul className="dropdown-menu">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                    <li><a className="dropdown-item" href="index-4.html">Dark Version</a></li>
                    <li><a className="dropdown-item" href="index-5.html">Primary Version</a></li>
                    <li><a className="dropdown-item" href="index-8.html">Transparent</a></li>
                    <li><a className="dropdown-item" href="page-header-custom-background-with-transparent-header.html">Transparent with border</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                    <li><a className="dropdown-item" href="index-3.html">Dark Version</a></li>
                    <li><a className="dropdown-item" href="index-6.html">Primary Version</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Page Headers</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="page-header-left-alignment.html">Left Alignment</a></li>
                    <li><a className="dropdown-item" href="page-header-center-alignment.html">Center Alignment</a></li>
                    <li><a className="dropdown-item" href="page-header-light.html">Light Version</a></li>
                    <li><a className="dropdown-item" href="page-header-dark.html">Dark Version</a></li>
                    <li><a className="dropdown-item" href="page-header-primary.html">Primary Version</a></li>
                    <li><a className="dropdown-item" href="page-header-custom-background.html">Custom Background</a></li>
                    <li><a className="dropdown-item" href="page-header-custom-background-with-transparent-header.html">Custom Background 2</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="layout-boxed.html">Layout Boxed</a></li>
              </ul>
            </li>
            <li className="dropdown"> <a className="dropdown-toggle" href="#">Pages</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Login/Signup</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="login-signup.html">Page</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#login-signup" href="#">Dialog Popup</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                <li><a className="dropdown-item" href="orders.html">Orders</a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Elements</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="elements.html">Elements</a></li>
                    <li><a className="dropdown-item" href="elements-2.html">Elements 2</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="faq.html">Faq</a></li>
                <li><a className="dropdown-item" href="support.html">Support</a></li>
                <li><a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
              </ul>
            </li>
            <li className="login-signup ml-lg-2"><a className="pl-lg-4 pr-0" data-toggle="modal" data-target="#login-signup" href="#" title="Login / Sign up">Login / Sign up <span className="d-none d-lg-inline-block"><i className="fas fa-user"></i></span></a></li>
          </ul>
        </div>
      </nav> 
      
    </div>
   
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>
  </div>
</div>
</header>
                </React.Fragment>

        );
    }
}

export default Bookingheader;