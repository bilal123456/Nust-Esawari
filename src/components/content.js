import React,{Component} from 'react';
import axios from 'axios';
import Autocomplete from '../Autocomplete/autcompete';
import Multiplecities from '../Autocomplete/multiplecities';

class Content extends Component {
   componentDidMount()
   {
     var  getnewcity="";
    $('.selectpickers').change(function() { 
     var  selectcitiesvalues = $(this).val();
      getnewcity = selectcitiesvalues;
     console.log("error",selectcitiesvalues);
     $('#busDepart').focus();

     });

     

     $('#datasubmit').on('click',function(e){
       e.preventDefault();
     var getcityname =  $('#select2-seelctciites-container').text();
     console.log(getcityname);
       var getchildcityname =getnewcity;
      
       var date = $('#busDepart').val();
       console.log(getcityname);
       console.log(getchildcityname);
       console.log(date);
       var cityid=$('#cityid').val();
       console.log(cityid);
      var getcitynewid=$('#getcityid').val();
       
       window.location.href = "/books?DateOfMonth="+date+"&From="+getcityname+"&To="+getchildcityname+"&Cityid="+getcitynewid;


     });
   }
  
    

    render() { 
      let imgUrl = 'http://localhost:8080/public/images/bg/image-4.jpg';
      let imgUrl1 = 'http://localhost:8080/public/images/bg/image-4.jpg';
      let imgUrl2 = 'http://localhost:8080/public/images/bg/image-4.jpg'; 

      
      
        return (
        <React.Fragment>

       {
        //<img src="/images/bg/image-4.jpg" width="100px" height="100px"></img>
      //  <div style={{border:"1px solid black",width:"250px",height:"250px",backgroundImage: 'url(' + imgUrl + ')' }}></div>

       }   
<div className="hero-wrap py-5">
<div className="hero-mask opacity-7 bg-dark"></div>

<div className="hero-bg-slideshow owl-carousel">
  <div className="item">
    <div className="hero-bg">
      <img src="../../public/images/bg/image-4.jpg" height="628"></img>
    </div>
  </div>
  <div className="item">
    <div className="hero-bg">
    <img src="../../public/images/bg/image-1.jpg" height="628"></img>
    </div>
  </div>
  <div className="item">
    <div className="hero-bg">
    <img src="../../public/images/bg/image-2.jpg" height="628"></img>
    </div>
  </div>
</div>

<div className="hero-content py-lg-5 my-lg-5">
  <div className="container mt-5 pt-4">
    <h2 className="text-9 font-weight-300 text-light text-center mb-4 mb-md-5">Online Booking. Save Time and Money!</h2>
   
    {/* <ul className="nav nav-tabs border-bottom style-3 justify-content-center" id="myTab" role="tablist">
      <li className="nav-item"> <a className="nav-link active" id="hotels-tab" data-toggle="tab" href="#hotels" role="tab" aria-controls="hotels" aria-selected="true"><span><i className="fas fa-bed"></i></span> Hotels</a> </li>
      <li className="nav-item"> <a className="nav-link" id="flights-tab" data-toggle="tab" href="#flights" role="tab" aria-controls="flights" aria-selected="true"><span><i className="fas fa-plane"></i></span> Flights</a> </li>
      <li className="nav-item"> <a className="nav-link" id="trains-tab" data-toggle="tab" href="#trains" role="tab" aria-controls="trains" aria-selected="false"><span><i className="fas fa-train"></i></span> Trains</a> </li>
      <li className="nav-item"> <a className="nav-link" id="bus-tab" data-toggle="tab" href="#bus" role="tab" aria-controls="bus" aria-selected="false"><span><i className="fas fa-bus"></i></span> Bus</a> </li>
    </ul> */}
    {/* <div className="tab-content pt-4 pb-2" id="myTabContent">
      
      <div className="tab-pane fade show active" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
        <form id="bookingHotels" method="post">
<div className="row no-gutters search-input-2">
<div className="col-lg form-group">
  <Autocomplete/>
{/* <input type="text" className="form-control" onChange={this.onTextChanged} id="hotelsFrom" required placeholder="Enter City/Hotel" /> */}
{/* <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span> </div> */}
{/* {() =>this.renderSuggestion} */}
{/* <div className="col-lg form-group">
<input id="hotelsCheckIn" type="text" className="form-control" required placeholder="Check In" />
<span className="icon-inside"><i className="far fa-calendar-alt"></i></span> </div>
<div className="col-lg form-group">
<input id="hotelsCheckOut" type="text" className="form-control" required placeholder="Check Out" />
<span className="icon-inside"><i className="far fa-calendar-alt"></i></span> </div>
<div className="col-lg travellers-class form-group">
<input type="text" id="hotelsTravellersClass" className="travellers-class-input form-control" name="hotels-travellers-class" placeholder="Rooms / People" required onKeyPress="return false;" />
<span className="icon-inside"><i className="fas fa-caret-down"></i></span>
<div className="travellers-dropdown" style={{display: "none"}}>
  <div className="row align-items-center">
    <div className="col-sm-7">
      <p className="mb-sm-0">Rooms</p>
    </div>
    <div className="col-sm-5">
      <div className="qty input-group">
        <div className="input-group-prepend">
          <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#hotels-rooms" data-toggle="spinner">-</button>
        </div>
        <input type="text" data-ride="spinner" id="hotels-rooms" className="qty-spinner form-control" value="1" readonly />
        <div className="input-group-append">
          <button type="button" className="btn bg-light-4" data-value="increase" data-target="#hotels-rooms" data-toggle="spinner">+</button>
        </div>
      </div>
    </div>
  </div>
  <hr className="mt-2 mb-4" />
  <div className="row align-items-center">
    <div className="col-sm-7">
      <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
    </div>
    <div className="col-sm-5">
      <div className="qty input-group">
        <div className="input-group-prepend">
          <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#adult-travellers" data-toggle="spinner">-</button>
        </div>
        <input type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner form-control" value="1" readonly />
        <div className="input-group-append">
          <button type="button" className="btn bg-light-4" data-value="increase" data-target="#adult-travellers" data-toggle="spinner">+</button>
        </div>
      </div>
    </div>
  </div>
  <hr className="my-2" />
  <div className="row align-items-center">
    <div className="col-sm-7">
      <p className="mb-sm-0">Children <small className="text-muted">(1-12 yrs)</small></p>
    </div>
    <div className="col-sm-5">
      <div className="qty input-group">
        <div className="input-group-prepend">
          <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#children-travellers" data-toggle="spinner">-</button>
        </div>
        <input type="text" data-ride="spinner" id="children-travellers" className="qty-spinner form-control" value="0" readonly />
        <div className="input-group-append">
          <button type="button" className="btn bg-light-4" data-value="increase" data-target="#children-travellers" data-toggle="spinner">+</button>
        </div>
      </div>
    </div>
  </div>
  <button className="btn btn-primary btn-block submit-done mt-3" type="button">Done</button>
</div>
</div>
<div className="col-lg-2 form-group">
<button className="btn btn-primary btn-block" type="submit">Search</button>
</div>
</div>
</form>
      </div> */} 

      {/* <div className="tab-pane fade" id="flights" role="tabpanel" aria-labelledby="flights-tab">
        <form id="bookingFlight" method="post">
          <div className="row">
            <div className="col-12 order-lg-12 text-light mb-3 mb-lg-0">
              {/* <div className="custom-control custom-radio custom-control-inline">
                <input id="oneway" name="flight-trip" className="custom-control-input" checked="" required type="radio"/>
                <label className="custom-control-label" for="oneway">One Way</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input id="roundtrip" name="flight-trip" className="custom-control-input" required type="radio"/>
                <label className="custom-control-label" for="roundtrip">Round Trip</label>
              </div> */}
            {/* </div>
            <div className="col-12">
              <div className="row no-gutters search-input-2">
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" id="flightFrom" required placeholder="From"/>
                  <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span> </div>
                <div className="col-lg-2 form-group">
                  <input type="text" className="form-control" id="flightTo" required placeholder="To"/>
                  <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span> </div>
                <div className="col-lg-2 form-group">
                  <input id="flightDepart" type="text" className="form-control" required placeholder="Depart Date"/>
                  <span className="icon-inside"><i className="far fa-calendar-alt"></i></span> </div>
                <div className="col-lg-2 form-group">
                  <input id="flightReturn" type="text" className="form-control" required placeholder="Return Date"/>
                  <span className="icon-inside"><i className="far fa-calendar-alt"></i></span> </div>
                <div className="col-lg-2 travellers-class form-group">
                  <input type="text" id="flightTravellersClass" className="travellers-class-input form-control" name="flight-travellers-class" placeholder="Travellers, Class" readOnly required onKeyPress="return false;"/>
                  <span className="icon-inside"><i className="fas fa-caret-down"></i></span>
                  <div className="travellers-dropdown">
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Adults <small className="text-muted">(12+ yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#flightAdult-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="flightAdult-travellers" className="qty-spinner form-control" value="1" readOnly/>
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#flightAdult-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Children <small className="text-muted">(2-12 yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#flightChildren-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="flightChildren-travellers" className="qty-spinner form-control" value="0" readOnly/>
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#flightChildren-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="row align-items-center">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Infants <small className="text-muted">(Below 2 yrs)</small></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#flightInfants-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="flightInfants-travellers" className="qty-spinner form-control" value="0" readOnly/>
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#flightInfants-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    <div className="mb-3">
                      <div className="custom-control custom-radio">
                        <input id="flightClassEconomic" name="flight-class" className="flight-class custom-control-input" value="0" checked="" required type="radio"/>
                        <label className="custom-control-label" for="flightClassEconomic">Economic</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="flightClassPremiumEconomic" name="flight-class" className="flight-class custom-control-input" value="1" required type="radio"/>
                        <label className="custom-control-label" for="flightClassPremiumEconomic">Premium Economic</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="flightClassBusiness" name="flight-class" className="flight-class custom-control-input" value="2" required type="radio"/>
                        <label className="custom-control-label" for="flightClassBusiness">Business</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="flightClassFirstClass" name="flight-class" className="flight-class custom-control-input" value="3" required type="radio"/>
                        <label className="custom-control-label" for="flightClassFirstClass">First Class</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block submit-done" type="button">Done</button>
                  </div>
                </div>
                <div className="col-lg-2 form-group">
                  <button className="btn btn-primary btn-block" type="submit">Search</button>
                </div>
              </div> */}
            {/* </div>
          </div>
        </form>
      </div> */}

       

      {/* <div class="tab-pane fade" id="trains" role="tabpanel" aria-labelledby="trains-tab">
<form id="bookingTrain" method="post">
  <div class="row no-gutters search-input-2">
    <div class="col-lg form-group">
      <input type="text" class="form-control" id="trainFrom" required placeholder="From"/>
      <span class="icon-inside"><i class="fas fa-map-marker-alt"></i></span> </div>
    <div class="col-lg form-group">
      <input type="text" class="form-control" id="trainTo" required placeholder="To"/>
      <span class="icon-inside"><i class="fas fa-map-marker-alt"></i></span> </div>
    <div class="col-lg form-group">
      <input id="trainDepart" type="text" class="form-control" required placeholder="Depart Date"/>
      <span class="icon-inside"><i class="far fa-calendar-alt"></i></span> </div>
    <div class="col-lg travellers-class form-group">
      <input type="text" id="trainTravellersClass"  class="travellers-class-input form-control" name="train-travellers-class" placeholder="Travellers, Class" required onkeypress="return false;"/>
      <span class="icon-inside"><i class="fas fa-caret-down"></i></span>
      <div class="travellers-dropdown">
        <div class="row align-items-center">
          <div class="col-sm-7">
            <p class="mb-sm-0">Adults <small class="text-muted">(12+ yrs)</small></p>
          </div>
          <div class="col-sm-5">
            <div class="qty input-group">
              <div class="input-group-prepend">
                <button type="button" class="btn bg-light-4" data-value="decrease" data-target="#trainAdult-travellers" data-toggle="spinner">-</button>
              </div>
              <input type="text" data-ride="spinner" id="trainAdult-travellers" class="qty-spinner form-control" value="1" readonly/>
              <div class="input-group-append">
                <button type="button" class="btn bg-light-4" data-value="increase" data-target="#trainAdult-travellers" data-toggle="spinner">+</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-2"/>
        <div class="row align-items-center">
          <div class="col-sm-7">
            <p class="mb-sm-0">Children <small class="text-muted">(2-12 yrs)</small></p>
          </div>
          <div class="col-sm-5">
            <div class="qty input-group">
              <div class="input-group-prepend">
                <button type="button" class="btn bg-light-4" data-value="decrease" data-target="#trainChildren-travellers" data-toggle="spinner">-</button>
              </div>
              <input type="text" data-ride="spinner" id="trainChildren-travellers" class="qty-spinner form-control" value="0" readonly/>
              <div class="input-group-append">
                <button type="button" class="btn bg-light-4" data-value="increase" data-target="#trainChildren-travellers" data-toggle="spinner">+</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-2"/>
        <div class="row align-items-center">
          <div class="col-sm-7">
            <p class="mb-sm-0">Infants <small class="text-muted">(Below 2 yrs)</small></p>
          </div>
          <div class="col-sm-5">
            <div class="qty input-group">
              <div class="input-group-prepend">
                <button type="button" class="btn bg-light-4" data-value="decrease" data-target="#trainInfants-travellers" data-toggle="spinner">-</button>
              </div>
              <input type="text" data-ride="spinner" id="trainInfants-travellers" class="qty-spinner form-control" value="0" readonly/>
              <div class="input-group-append">
                <button type="button" class="btn bg-light-4" data-value="increase" data-target="#trainInfants-travellers" data-toggle="spinner">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group mt-3">
          <select id="train-class" name="train-class" class="custom-select">
            <option value="0">All Class</option>
            <option value="1">First Class</option>
            <option value="2">Second Class</option>
            <option value="3">First Class Sleeper (SL)</option>
            <option value="4">Second Class Sleeper (SL)</option>
            <option value="5">Business</option>
          </select>
        </div>
        <button class="btn btn-primary btn-block submit-done" type="button">Done</button>
      </div>
    </div>
    <div class="col-lg-2 form-group">
      <button class="btn btn-primary btn-block" type="submit">Search</button>
    </div>
  </div>
</form>
</div> */}

    
       
          <div className="row no-gutters search-input-2">
            {/* <div className="col-lg form-group"> */}
            <div className="col-lg form-group">
              <Autocomplete/>
              <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span> </div>

              {/* <input type="text" className="form-control" id="busFrom" required placeholder="From"/> */}
              {/* <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span> </div> */}
            <div className="col-lg form-group">
             <Multiplecities/>
              {/* <input type="text" className="form-control" id="busTo" required placeholder="To"/> */}
              <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span> </div>
            <div className="col-lg form-group">
              <input style={{height:"45px"}} id="busDepart" type="text" className="form-control" required placeholder="Depart Date"/>
              <span className="icon-inside"><i className="far fa-calendar-alt"></i></span> </div>
            {/* <div className="col-lg travellers-class form-group">
              <input style={{height:"45px"}} type="text" id="busTravellersClass"  className="travellers-class-input form-control" name="bus-travellers-class" placeholder="Seats" required />
              <span className="icon-inside"><i className="fas fa-caret-down"></i></span> */}
              {/* <div className="travellers-dropdown">
                <div className="row align-items-center mb-3">
                  <div className="col-sm-7">
                    <p className="mb-sm-0">Seats</p>
                  </div>
                  <div className="col-sm-5">
                    <div className="qty input-group">
                      <div className="input-group-prepend">
                        <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#adult-travellers" data-toggle="spinner">-</button>
                      </div>
                      <input type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner form-control" value="1" readOnly/>
                      <div className="input-group-append">
                        <button type="button" className="btn bg-light-4" data-value="increase" data-target="#adult-travellers" data-toggle="spinner">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button  className="btn btn-primary btn-block submit-done" type="button">Done</button>
              </div> 
            </div>*/}
            <div className="col-lg-2 form-group">
              <button style={{height:"45px"}} id="datasubmit" className="btn btn-primary btn-block" type="submit">Search</button>
            </div>
          </div>
      
      </div>
    
    




  </div>



</div>





            </React.Fragment>

         );
    }
}
 
export default Content;