import React, { Component } from 'react';
import axios from 'axios';
class PopularRoutes extends Component {
  constructor(props)
  {
    super(props);
    this.items = [
     
    ];
  }
 
  state = {
    posts : []
    }
    

 
    render() { 
        return ( 
            <React.Fragment>
    
                <section className="section bg-light shadow-md">
      <div className="container">
        <h2 className="text-9 font-weight-500 text-center">Popular Bus Routes</h2>
        <p className="lead text-center mb-4">Search  Bus</p>
        <div className="row">
              <div className="col-lg-12">
                <p className="d-flex align-items-center">Hyderabad To Bengaluru <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Chennai To Coimbatore<a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Ahmedabad to Mumbai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bhopal To Indore <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bangalore to Chennai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
              </div>
              
              </div>
        {/* <ul className="nav nav-tabs nav-fill justify-content-center mb-5" id="myRoutes" role="tablist">
          <li className="nav-item"> <a className="nav-link active text-4" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">Hotels</a> </li>
          <li className="nav-item"> <a className="nav-link text-4" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">Flights</a> </li>
          <li className="nav-item"> <a className="nav-link text-4" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">Trains</a> </li>
          <li className="nav-item"> <a className="nav-link text-4" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="four" aria-selected="true">Bus</a> </li>
        </ul> */}
        {/* <div className="tab-content" id="myRoutesContent"> */}
          {/* <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
            <div className="row"> */}
              {/* <div className="col-lg-6">
                <p className="d-flex align-items-center">Bangkok - <small className="text-muted">655 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Newyork - <small className="text-muted">243 properties available</small><a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Singapore - <small className="text-muted">468 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Dubai - <small className="text-muted">474 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">India - <small className="text-muted">525 properties available</small><a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
              </div> */}
              {/* <div className="col-lg-6">
                <p className="d-flex align-items-center">Lodon - <small className="text-muted">387 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Toronto - <small className="text-muted">299 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">China - <small className="text-muted">466 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Russia - <small className="text-muted">341 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">United States - <small className="text-muted">712 properties available</small> <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Hotels</span></a></p>
                <hr/>
              </div> */}
              {/* <div className="col-12">
                <p className="text-center mb-0"><a href="#" className="btn btn-link">View All <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div> */}
            {/* </div>
          </div> */}
          {/* <div className="tab-pane fade show" id="two" role="tabpanel" aria-labelledby="two-tab">
            <div className="row">
              <div className="col-lg-6">
                <p className="d-flex align-items-center">Delhi to Mumbai Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bangalore to Delhi Flights<a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Hyderabad to Delhi Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Ahmedabad to Mumbai Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Mumbai to Chennai Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
              </div>
              <div className="col-lg-6">
                <p className="d-flex align-items-center">Mumbai to Dubai Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Delhi to Toronto Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Chennai to Singapore Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Delhi to London Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Kolkata to Bangkok Flights <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Search Flights</span></a></p>
                <hr/>
              </div>
              <div className="col-12">
                <p className="text-center mb-0"><a href="#" className="btn btn-link">View All <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
            <div className="row">
              <div className="col-lg-6">
                <p className="d-flex align-items-center">Chennai to Madurai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">London to Manchester<a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Ahmedabad to Mumbai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Liverpool to Manchester <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bangalore to Chennai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
              </div>
              <div className="col-lg-6">
                <p className="d-flex align-items-center">Bangalore to Chennai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">London to Manchester<a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Ahmedabad to Mumbai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Chennai to Madurai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Liverpool to Manchester <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Find Tickets</span></a></p>
                <hr/>
              </div>
              <div className="col-12">
                <p className="text-center mb-0"><a href="#" className="btn btn-link">View All <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="four" role="tabpanel" aria-labelledby="four-tab">
            <div className="row">
              <div className="col-lg-6">
                <p className="d-flex align-items-center">Hyderabad To Bengaluru <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Chennai To Coimbatore<a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Ahmedabad to Mumbai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bhopal To Indore <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bangalore to Chennai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
              </div>
              <div className="col-lg-6">
                <p className="d-flex align-items-center">Chennai To Coimbatore<a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bangalore to Chennai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Ahmedabad to Mumbai <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Hyderabad To Bengaluru <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>
                <p className="d-flex align-items-center">Bhopal To Indore <a href="#" className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book Now</span></a></p>
                <hr/>  
              </div>
              <div className="col-12">
                <p className="text-center mb-0"><a href="#" className="btn btn-link">View All <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
            </React.Fragment>
         );
    }
}
 
export default PopularRoutes;