import React, { Component } from 'react';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    


    render() {
        return (
            <React.Fragment>
                   
    
                <div id="hidencontent" className="container">
                <aside  className="col-md-12" id="multiCollapseExample1" style={{position:"relative",display:"none",left:"10px",height:"250px",background:"white"}}>
            <div className="bg-light shadow-md rounded p-3">
              <h3 className="text-5">Filter</h3>
              <div className="accordion accordion-alternate style-2" id="toggleAlternate">
                 
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="departure">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#toggleDeparture" aria-expanded="true" aria-controls="togglePrice">Departure Time</a> </h5>
                  </div>
                  <div id="toggleDeparture" className="collapse show" aria-labelledby="departure">
                    <div className="card-body">
                      <p><span className="slider-time-departure">00:00</span> - <span className="slider-time-departure">23:59</span></p>
                      <div id="slider-range-departure"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="price">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglePrice" aria-expanded="true" aria-controls="togglePrice">Price</a> </h5>
                  </div>
                  <div id="togglePrice" className="collapse show" aria-labelledby="price">
                    <div className="card-body">
                      <p>
                        <input id="amount" type="text"  className="form-control border-0 bg-transparent p-0"/>
                      </p>
                      <div id="slider-range"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="busType">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglebusType" aria-expanded="true" aria-controls="togglebusType">Bus Type</a> </h5>
                  </div>
                  <div id="togglebusType" className="collapse show" aria-labelledby="busType">
                    <div className="card-body">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="sleeper" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="sleeper">Sleeper</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="seater" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seater">Seater</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="semiseater" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="semiseater">Semi-Seater</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="busOperators">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglebusOperators" aria-expanded="true" aria-controls="togglebusOperators">Bus Operators</a> </h5>
                  </div>
                  <div id="togglebusOperators" className="collapse show" aria-labelledby="busOperators">
                    <div className="card-body">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="akTour" name="busOperators" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="akTour">AK Tour &amp; Travels</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="vikasTravels" name="busOperators" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="vikasTravels">Vikas Travels</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="gujaratTravels" name="busOperators" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="gujaratTravels">Gujarat Travels</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="shrinathTravel" name="busOperators" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="shrinathTravel">Shrinath Travel Agency</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="indianTravels" name="busOperators" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="indianTravels">Indian Travels Agency</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
           
           
                </div>
                
            
           
            </React.Fragment>
        );
    }
}

export default Filters;