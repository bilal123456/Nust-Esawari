import React, { Component } from 'react';

class Partners extends Component {
    state = {  }
    render() { 
        let imgUrl = '../../public/images/bg/image-2.jpg';
        return ( 
            <React.Fragment>
                <div className="hero-wrap section">
<div className="hero-mask opacity-8 bg-secondary"></div>
<div className="hero-bg" style={{backgroundImage: 'url(' + imgUrl + ')' }}></div>
<div className="hero-content">
  <div className="container">
    <h2 className="text-9 font-weight-500 text-light text-center mb-4">Our Partners</h2>
     <ul className="nav nav-tabs style-2 justify-content-center" id="myPartners" role="tablist">
      <li className="nav-item"> <a className="nav-link active" id="operator-one-tab" data-toggle="tab" href="#operator-one" role="tab" aria-controls="operator-one" aria-selected="true">Flights</a> </li>
      <li className="nav-item"> <a className="nav-link" id="operator-two-tab" data-toggle="tab" href="#operator-two" role="tab" aria-controls="operator-two" aria-selected="false">Trains</a> </li>
      <li className="nav-item"> <a className="nav-link" id="operator-three-tab" data-toggle="tab" href="#operator-three" role="tab" aria-controls="operator-three" aria-selected="false">Bus</a> </li>
    </ul> 
    <div className="tab-content bg-light border shadow-sm rounded-bottom px-3" id="myPartnersContent">
      <div className="tab-pane fade show active" id="operator-one" role="tabpanel" aria-labelledby="operator-one-tab">
        <div className="brands-grid">
          <div className="row justify-content-center">
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-1.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-2.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-3.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-4.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-5.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-6.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-7.png" alt="Brands"/></a></div>
          </div>
        </div>
      </div>
       <div className="tab-pane fade" id="operator-two" role="tabpanel" aria-labelledby="operator-two-tab">
        <div className="brands-grid">
          <div className="row justify-content-center">
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-1.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-2.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-3.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-4.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-5.png" alt="Brands"/></a></div>
          </div>
        </div>
      </div> 
       <div className="tab-pane fade" id="operator-three" role="tabpanel" aria-labelledby="operator-three-tab">
        <div className="brands-grid">
          <div className="row justify-content-center">
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-1.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-2.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-3.png" alt="Brands"/></a></div>
            <div className="col-4 col-md-3 col-lg-2 text-center"><a href=""><img className="img-fluid" src="../../public/images/brands/flights/airlines-4.png" alt="Brands"/></a></div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</div>
</div>
            </React.Fragment>
         );
    }
}
 
export default Partners;