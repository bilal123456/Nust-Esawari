import React, { Component } from 'react';

import {Link} from 'react-router-dom';


class Header extends Component {
    state = {  
     

    }
    

  

    render() { 
        return ( 
            <div>
            
<header id="header" className="bg-transparent header-text-light">
    <div className="container-fluid">
      <div className="header-row">
        <div className="header-column justify-content-start"> 
       
          <div className="logo"> <a href="index.html" title="Quickai - HTML Template"><img src="../../public/images/logo-light.png" alt="Quickai" width="127" height="29" /></a> </div>
      
          
        </div>
        <div className="header-column justify-content-end"> 
          
        
          <nav className="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="dropdown active"> <Link className="dropdown-toggle" to="/">Home</Link>
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
                        
                        <li><a className="dropdown-item" href="/bookig">Layout 1</a></li>
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
                <li className="dropdown dropdown-mega"> <a className="dropdown-toggle" href="#">Booking</a>
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
                <li className="login-signup ml-lg-2"><a className="pl-lg-4 pr-0" data-toggle="modal" data-target="#login-signup" href="#" title="Login / Sign up">Login / Sign up <span className="d-none d-lg-inline-block"><i className="far fa-user"></i></span></a></li>
              </ul>
            </div>
          </nav>
          
        </div>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>
      </div>
    </div>
  </header>




  <div id="login-signup" className="modal fade" role="dialog" aria-hidden="true">

  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content p-sm-3">
      <div className="modal-body">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item"> <a id="login-tab" className="nav-link active text-4" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a> </li>
          <li className="nav-item"> <a id="signup-tab" className="nav-link text-4" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a> </li>
        </ul>
        <div className="tab-content pt-4">
          <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <form id="loginForm" method="post">
              <div className="form-group">
                <input type="email" className="form-control" id="loginMobile" required placeholder="Mobile or Email ID"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="loginPassword" required placeholder="Password"/>
              </div>
              <div className="row mb-4">
                <div className="col-sm">
                  <div className="form-check custom-control custom-checkbox">
                    <input id="remember-me" name="remember" className="custom-control-input" type="checkbox"/>
                    <label  className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                  </div>
                </div>
                <div className="col-sm text-right"> <a className="justify-content-end" href="#">Forgot Password ?</a> </div>
              </div>
              <button className="btn btn-primary btn-block" type="submit">Login</button>
            </form>
          </div>
          <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <form id="signupForm" method="post">
              <div className="form-group">
                <input type="text" className="form-control" data-bv-field="number" id="signupEmail" required placeholder="Email ID"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="signupMobile" required placeholder="Mobile Number"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="signuploginPassword" required placeholder="Password"/>
              </div>
              <button className="btn btn-primary btn-block" type="submit">Signup</button>
            </form>
          </div>
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1"/>
            <span className="mx-2">OR</span>
            <hr className="flex-grow-1"/>
          </div>
          <div className="row">
            <div className="col-12 mb-3">
              <button type="button" className="btn btn-block btn-outline-primary">Login with Facebook</button>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-block btn-outline-danger">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>




            </div>
           
        );
    }
}
 
export default Header;