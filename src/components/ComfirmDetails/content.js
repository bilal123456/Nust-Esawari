import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
 

class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {
        item: ""
    }
}



grayscale(image, bPlaceImage)
{
  var i=0;
  var j=0;
 var myCanvas = document.createElement("canvas");
 var myCanvasContext = myCanvas.getContext("2d");

 var imgWidth = image.width;
 var imgHeight = image.height;
 // You'll get some string error if you fail to specify the dimensions
 myCanvas.width = imgWidth;
 myCanvas.height = imgHeight;
 //  alert(imgWidth);
 myCanvasContext.drawImage(image, 0, 0);

 // The getImageData() function cannot be called if the image is not from the same domain.
 // You'll get security error
 var imageData = myCanvasContext.getImageData(0, 0, imgWidth, imgHeight);
 for ( i = 0; i < imageData.height; i++) {
     for (j = 0;  j < imageData.width; j++) {
         var index = (i * 4) * imageData.width + (j * 4);
         var red = imageData.data[index];
         var green = imageData.data[index + 1];
         var blue = imageData.data[index + 2];
         var alpha = imageData.data[index + 3];
         var average = (red + green + blue) / 3;
        
         imageData.data[index] = average;
         imageData.data[index + 1] = average;
         imageData.data[index + 2] = average;
         imageData.data[index + 3] = alpha;
     }
 }
 myCanvasContext.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
 // myCanvasContext.drawIMage(imageData,0,0);//,0,0, imageData.width, imageData.height);

 if (bPlaceImage) {
     var myDiv = document.createElement("div");
     myDiv.appendChild(myCanvas);
     image.parentNode.appendChild(myCanvas);//, image);
 }
 return myCanvas.toDataURL();
}



   
    componentDidMount=()=>
    {
      $(".jazz-cash-radio").click(function () {
        $(".pin").slideUp('slow');
        $("#MANumber").slideDown('slow');
        $(".mobile-msg").slideDown('slow');            
    });
    $(".mobile-account-radio").click(function () {
        $(".pin").slideDown('slow');
        $("#MANumber").slideDown('slow');
        $(".mobile-msg").slideDown('slow');
    });
    $(".card-account-radio").click(function () {
        $(".pin").slideUp('slow');
        $("#MANumber").slideUp('slow');
        $(".mobile-msg").slideUp('slow');
    });
      
     // $('#transportername').val("s")
     let setTransportername = "";
     let GetTransportername = "";

     let setScheduleid = "";
     let GetScheduleid = "";


     let setservicetype = "";
     let Getservicetype = "";


     let setscheduletime = "";
     let Getscheduletime = "";


     let setdestinationtime = "";
     let Getdestinationtime = "";


     let settimetohour = "";
     let Gettimetohour = "";


     let setprice = "";
     let Getprice = "";


     let setservicecharges = "";
     let Getservicecharges = "";


     let setgetfromtext = "";
     let Getgetfromtext = "";


     let setgettotext = "";
     let Getgettotext = "";

     let settodaydate = "";
     let Getodaydate = "";
     if(this.props.location.transportname !=null)
     {
       alert("null");
        setTransportername =  JSON.stringify(this.props.location.transportname)
        localStorage.setItem('TransporterState', setTransportername);

        setScheduleid =  JSON.stringify(this.props.location.Scheduleid)
        localStorage.setItem('setScheduleid', setScheduleid);


        setservicetype =  JSON.stringify(this.props.location.servicetype)
        localStorage.setItem('setservicetype', setservicetype);

        setscheduletime =  JSON.stringify(this.props.location.scheduletime)
        localStorage.setItem('setscheduletime', setscheduletime);

        setdestinationtime =  JSON.stringify(this.props.location.destinationtime)
        localStorage.setItem('setdestinationtime', setdestinationtime);

        settimetohour =  JSON.stringify(this.props.location.timetohour)
        localStorage.setItem('settimetohour', settimetohour);

        setprice =  JSON.stringify(this.props.location.price)
        localStorage.setItem('setprice', setprice);

        setservicecharges =  JSON.stringify(this.props.location.servicecharges)
        localStorage.setItem('setservicecharges', setservicecharges);

        setgetfromtext =  JSON.stringify(this.props.location.getfromtext)
        localStorage.setItem('setgetfromtext', setgetfromtext);

        setgettotext =  JSON.stringify(this.props.location.gettotext)
        localStorage.setItem('setgettotext', setgettotext);

        settodaydate =  JSON.stringify(this.props.location.busDepart)
        localStorage.setItem('settodaydate', settodaydate);

        
     
   
     }
     GetTransportername = JSON.parse(localStorage.getItem('TransporterState'));
     console.log(GetTransportername);

     GetScheduleid = JSON.parse(localStorage.getItem('setScheduleid'));
     console.log(GetScheduleid);

     Getservicetype = JSON.parse(localStorage.getItem('setservicetype'));
     console.log(Getservicetype);

     Getscheduletime = JSON.parse(localStorage.getItem('setscheduletime'));
     console.log(Getscheduletime);

     Getdestinationtime = JSON.parse(localStorage.getItem('setdestinationtime'));
     console.log(Getdestinationtime);

     Gettimetohour = JSON.parse(localStorage.getItem('settimetohour'));
     console.log(Gettimetohour);

     Getprice = JSON.parse(localStorage.getItem('setprice'));
     console.log(Getprice);

     Getservicecharges = JSON.parse(localStorage.getItem('setservicecharges'));
     console.log(Getservicecharges);
     
     Getgetfromtext = JSON.parse(localStorage.getItem('setgetfromtext'));
     console.log(Getgetfromtext);

     Getgettotext = JSON.parse(localStorage.getItem('setgettotext'));
     console.log(Getgettotext);
     
     Getodaydate = JSON.parse(localStorage.getItem('settodaydate'));
     console.log(Getodaydate);
     
     
     
     
     $('#transportername').val(GetTransportername);
    $('#schedueid').val(GetScheduleid);
    $('#scheduletime').val(Getscheduletime);
    $('#destinationtime').val(Getdestinationtime);
    $('#timetohour').val(Gettimetohour);
    $('#price').val(Getprice);
    $('#servicecharges').val(Getservicecharges);
    $('#fromtext').val(Getgetfromtext);
    $('#servicetype').val(Getservicetype);
    $('#totext').val(Getgettotext);


    $('#FromValue').text($('#fromtext').val());
     $('#toValue').text($('#totext').val());
     $('#Transportername').text($('#transportername').val());
     $('#ServiceType').text($('#servicetype').val());
     $('#savescheduletime').text($('#scheduletime').val());
     $('#saveDestinationtime').text($('#destinationtime').val());
     $('#savetimetohour').text($('#timetohour').val());
     $('#saveprice').text("RS "+ $('#price').val()+"/-");
     $('#savetodaydate').text(Getodaydate);

    
     
     


 
 


}

 // This function is responsible to draw Passenger detail section based on user selected seats.
drawpassengerDetail(selectedSeats) {
  alert("enter");
  if (selectedSeats.trim().length == 0) {
    var passengersArray = new Array(0);
    alert(passengersArray);
  }
  else {
      var passengersArray = selectedSeats.split(',');
      alert(passengersArray);
  }
      //Add top heading
      var passenger = "<div class='container Passenger-detail-container'>";
      passenger = passenger + "<i class='fas fa-user'></i>";
      passenger = passenger + "<label class='Passenger-contact-label'>&nbsp; Passenger Details</label>";
      passenger = passenger + "<p>Please enter Individual detail for all seats</p>";
      passenger = passenger + "</div>";
      //Add Passenger detail fields
      for (var i = 0; i <= passengersArray.length - 1; i++) {
        passenger = passenger + "<div class='form-row'>";
            passenger = passenger + "<div class='col-lg-12'>";
             passenger = passenger + "<label class='passenger-label'> Passenger " + (i + 1) + " Seat no." + passengersArray[i] + "</label>";
           passenger = passenger + "</div>";
           passenger = passenger + "<div class='col-sm-3 form-group'>";
           passenger = passenger + "<input type=hidden id='co" + i + "seatno' name='BookingDetails[" + i + "].SeatNo' value=" + passengersArray[i] + "/>"; 
           passenger = passenger + "<input required='required' id='PassangerName" + i + "' type='text' class='form-control name-form-control' name='BookingDetails[" + i + "].PassangerName' placeholder='First Name'></div>";
           passenger = passenger + "<div class='col-sm-3 form-group'><input required id='Age" + i + "' type='text' class='form-control age-form-control' name='BookingDetails[" + i + "].Age' placeholder='Age'></div>";
           passenger = passenger + "<br/>";
           passenger = passenger + "<div class='gender-container' style='margin-top:10px'><b>Gender: </b>";
         passenger = passenger + "<label class='radio-inline' style='margin-left:20px'><input type='radio' id='Gender" + i + "' name='BookingDetails[" + i + "].Gender " + i + "' required checked> Male</label>";
         passenger = passenger + "<label class='radio-inline' style='margin-left:20px'><input type='radio' id='Gender" + i + "' name='BookingDetails[" + i + "].Gender " + i + "'> Female</label>";
         passenger = passenger + "</div>";
         passenger = passenger + "</div>"; 
             
             
             
             
             

            }

      $(passenger).appendTo(".Passenger-detail");
 
  }
  cdrawpassengerDetail=()=>
  {
    console.log("error");
    var seatsnos=$('#seatsno').val().trim();
    this.drawpassengerDetail(seatsnos.substring(0,(seatsnos.length-1)));
  }
JazzImage=()=>
{
  console.log("dummy");
  $("#PaymentChannelId").val(3);
 $("#shoplbl").html("Jazz Cash Shop");
      $("#pin-msg-lbl").html("Please Enter your Jazz Cash 4-digit PIN once promoted on your mobile screen.");
      $(".jazz-cash-radio").click();
      $("#PaymentChannelId").val(2);

      $("#Shop_PaymentMediumTypeId").prop("checked", true);

      $("#easy-paisa-link")[0].src = "../../../public/easy_paisa_icon.jpg";
      console.log( $("#easy-paisa-link")[0].src = "../../../public/easy_paisa_icon.jpg");
      $("#easy-paisa-link")[0].src = this.grayscale($("#easy-paisa-link")[0],false);

      $("#credit-card-link")[0].src = "../../../public/images/creditcard.png";
      $("#credit-card-link")[0].src = this.grayscale($("#easy-paisa-link")[0],false);

      $("#jazz-cash-link")[0].src = "../../../public/images/jazzcashred.png";
      $('#easy-paisa-link')[0].src="../../../public/images/easypaisablack.png";
      $('#credit-card-link')[0].src="../../../public/images/creditcard.png";

      $("#shopRow").show();
      $("#mobileAccountRow").show();
      $("#creditCardRow").hide();
}
EasyPaisaLink=()=>
{
  $("#shoplbl").html("EasyPaisa Shop");
            $("#pin-msg-lbl").html("Please Enter your EasyPaisa 5-digit PIN once promoted on your mobile screen.");
            $(".jazz-cash-radio").click();

            $("#PaymentChannelId").val(3);
            $("#Shop_PaymentMediumTypeId").prop("checked", true);

            $("#jazz-cash-link")[0].src = "./../../public/download.png";
            $("#jazz-cash-link")[0].src = this.grayscale($("#jazz-cash-link")[0], false);

            $("#credit-card-link")[0].src = ".../../../public/image/creditcard.png";
            $("#credit-card-link")[0].src = this.grayscale($("#credit-card-link")[0], false);

            $("#easy-paisa-link")[0].src = "../../../public/images/easypaisagreen.jpg";
            $('#credit-card-link')[0].src="../../../public/images/creditcard.png";
            $("#jazz-cash-link")[0].src = "../../../public/images/jazzcashblack.png";
            $("#shopRow").show();
            $("#mobileAccountRow").show();
            $("#creditCardRow").hide();
}
CreditCardLink=()=>
{
  $(".card-account-radio").click();

            $("#PaymentChannelId").val(2);//jazz cash credit card
            $("#CreditCard_PaymentMediumTypeId").prop("checked", true);

            $("#easy-paisa-link")[0].src = "../../../public/easy_paisa_icon.jpg";
            $("#easy-paisa-link")[0].src = this.grayscale($("#easy-paisa-link")[0], false);

            $("#jazz-cash-link")[0].src = "./../../public/download.png";
            $("#jazz-cash-link")[0].src = this.grayscale($("#jazz-cash-link")[0], false);

            $("#credit-card-link")[0].src = ".../../../public/images/creditcardblue.png";
            $("#jazz-cash-link")[0].src = ".../../../public/images/jazzcashblack.png";
             $("#easy-paisa-link")[0].src = ".../../../public/images/easypaisablack.png";

            $("#shopRow").hide();
            $("#mobileAccountRow").hide();
            $("#creditCardRow").show();
}


     

    
    render() { 
      console.log(this.state.item);
    
      console.log(this.state.item);
      
        return ( 
          
            <div id="content">
                          {/* <div id="preloader"><div data-loader="dual-ring"></div></div> */}
 <input type="text" id="seatsno" defaultValue="34,29,09,97,3,"/>
 <button onClick={this.cdrawpassengerDetail}>Click</button>
<input type="hidden" id="transportername"/>
<input type="hidden" id="schedueid"/>
<input type="hidden" id="servicetype"/>
<input type="hidden" id="scheduletime"/>
<input type="hidden" id="destinationtime"/>
<input type="hidden" id="timetohour"/>
<input type="hidden" id="price"/>
<input type="hidden" id="servicecharges"/>
<input type="hidden" id="fromtext"/>
<input type="hidden" id="totext"/>
<input type="hidden" id="todaydate"/>
    <section className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="bg-light shadow-md rounded p-3 p-sm-4 confirm-details">
              <h2 className="text-6 mb-3">Confirm Flight Details</h2>
             
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center trip-title">
                    <div className="col-5 col-sm-auto text-center text-sm-left">
                      <h5 className="m-0 trip-place" id="FromValue"> </h5>
                    </div>
                    <div className="col-2 col-sm-auto text-8 text-black-50 text-center trip-arrow">➝</div>
                    <div className="col-5 col-sm-auto text-center text-sm-left">
                      <h5 className="m-0 trip-place" id="toValue"></h5>
                    </div>
                    <div className="col-12 mt-1 d-block d-md-none"></div>
                    <div className="col-6 col-sm col-md-auto text-3 date" id="savetodaydate"></div>
                    {/* <div className="col-6 col-sm col-md-auto text-right order-sm-1"><a className="text-1" data-toggle="modal" data-target="#fare-rules" href="">Fare Rules</a></div>
                    <div className="col col-md-auto text-center ml-auto order-sm-0"><span className="badge badge-danger py-1 px-2 font-weight-normal text-1">Non Refundable</span></div> */}
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-sm-4 text-center text-md-left d-lg-flex company-info"> <span className="align-middle"><img className="img-fluid" alt="" src=""/> </span> <span className="align-middle ml-lg-2"> <span className="text-4 text-dark" id="Transportername"></span> <small className="text-muted d-block" id="ServiceType"></small> </span> </div>
                    <div className="col-12 col-sm-4 text-center time-info mt-3 mt-sm-0"> <span className="text-5 text-dark" id="savescheduletime"></span><i class="fas fa-arrow-right" aria-hidden="true"></i><span className="text-4 text-dark" id="saveDestinationtime"></span> <small className="text-muted d-block" id="savetimetohour"></small> </div>
                    <div className="col-12 col-sm-4 text-center time-info mt-3 mt-sm-0"> <span className="text-5 text-dark" id="saveprice"></span> </div>
                   
                  </div>
                  
                  <div id="fare-rules" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Fare Rules</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                        </div>
                        <div className="modal-body">
                          <ul className="nav nav-tabs" id="departureTab" role="tablist">
                            <li className="nav-item"> <a className="nav-link active" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">Baggage Details</a> </li>
                            <li className="nav-item"> <a className="nav-link" id="fourth-tab" data-toggle="tab" href="#fourth" role="tab" aria-controls="fourth" aria-selected="false">Cancellation Fee</a> </li>
                          </ul>
                          <div className="tab-content my-3" id="departureContent">
                            <div className="tab-pane fade show active" id="third" role="tabpanel" aria-labelledby="third-tab">
                              <div className="table-responsive-md">
                                <table className="table table-hover table-bordered bg-light">
                                  <thead>
                                    <tr>
                                      <th>&nbsp;</th>
                                      <td className="text-center">Cabin</td>
                                      <td className="text-center">Check-In</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Adult</td>
                                      <td className="text-center">7 Kg</td>
                                      <td className="text-center">15 Kg</td>
                                    </tr>
                                    <tr>
                                      <td>Child</td>
                                      <td className="text-center">7 Kg</td>
                                      <td className="text-center">15 Kg</td>
                                    </tr>
                                    <tr>
                                      <td>Infant</td>
                                      <td className="text-center">0 Kg</td>
                                      <td className="text-center">0 Kg</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="fourth-tab">
                              <table className="table table-hover table-bordered bg-light">
                                <thead>
                                  <tr>
                                    <th>&nbsp;</th>
                                    <td className="text-center">Per Passenger Fee</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>24 hrs - 365 days</td>
                                    <td className="text-center">250 + 50</td>
                                  </tr>
                                  <tr>
                                    <td>2-24 hours</td>
                                    <td className="text-center">350 + 50</td>
                                  </tr>
                                  <tr>
                                    <td>0-2 hours</td>
                                    <td className="text-center">550 + 50</td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="font-weight-bold">Terms &amp; Conditions</p>
                              <ul>
                                <li>The penalty is subject to 4 hrs before departure. No Changes are allowed after that.</li>
                                <li>The charges are per passenger per sector.</li>
                                <li>Partial cancellation is not allowed on tickets booked under special discounted fares.</li>
                                <li>In case of no-show or ticket not cancelled within the stipulated time, only statutory taxes are refundable subject to Service Fee.</li>
                                <li>No Baggage Allowance for Infants</li>
                                <li>Airline penalty needs to be reconfirmed prior to any amendments or cancellation.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            
              <div className="alert alert-info mt-4"> <span className="badge badge-info">NOTE:</span> This is a special fare given by the airline. Airlines cancellation charges do apply. </div>
              <h2 className="text-6 mb-3 mt-5">Traveller Details - <span className="text-3"><a data-toggle="modal" data-target="#login-signup" href="#" title="Login / Sign up">Login</a> to book faster</span></h2>
              <p className="font-weight-600">Contact Details</p>
              <div className="form-row">
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="email" required="" placeholder="Enter Email" type="text"/>
                </div>
                <div className="col-sm-6 form-group">
                  <input className="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Enter Mobile Number" type="text"/>
                </div>
              </div>
              <p className="text-info">Your booking details will be sent to this email address and mobile number.</p>
              <p className="font-weight-600">Details</p>
              








              <div class="Passenger-detail"></div>
            </div>
          </div>
          
 
          <aside className="col-lg-4 mt-4 mt-lg-0">
            <div className="bg-light shadow-md rounded p-3">
              <h3 className="text-5 mb-3">Fare Details</h3>
              <ul className="list-unstyled">
                {/* <li className="mb-2">Base Fare <span className="float-right text-4 font-weight-500 text-dark">980</span><br/>
                  <small className="text-muted">Adult : 1, Child : 0, Infant : 0</small></li> */}
                <li className="mb-2">Service Charges <span className="float-right text-4 font-weight-500 text-dark">215</span></li>
                {/* <li className="mb-2">Insurance <span className="float-right text-4 font-weight-500 text-dark">95</span></li> */}
              </ul>
              <div className="text-dark bg-light-4 text-4 font-weight-600 p-3"> Total Amount <span className="float-right text-6">1290</span> </div>
              <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
              <div className="input-group form-group">
                <input className="form-control" placeholder="Promo Code" aria-label="Promo Code" type="text"/>
                <span className="input-group-append">
                <button className="btn btn-secondary" type="submit">APPLY</button>
                </span> </div>
              {/* <ul className="promo-code pre-scrollable">
                <li><span className="d-block text-3 font-weight-600">FLTOFFER</span>Up to 500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms &amp; Conditions</a></li>
                <li><span className="d-block text-3 font-weight-600">HOTOFFER</span>Up to 500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms &amp; Conditions</a></li>
                <li><span className="d-block text-3 font-weight-600">SUMMEROFFER</span>Up to 500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms &amp; Conditions</a></li>
                <li><span className="d-block text-3 font-weight-600">BIGOFFER</span>Up to 500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms &amp; Conditions</a></li>
                <li><span className="d-block text-3 font-weight-600">FLTOFFER</span>Up to 500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms &amp; Conditions</a></li>
                <li><span className="d-block text-3 font-weight-600">FLTOFFER</span>Up to 500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms &amp; Conditions</a></li>
              </ul> */}
              <div class="payment-method-container">
                                                <div class="row payment-heading-row">
                                                    <div class="payment-method-label col-md-12 col-sm-12 col-xs-12">Payment Method</div>                                                    
                                                </div>
                                                <div class="row payment-heading-row" style={{marginTop:"30px"}}>
                                                   
                                                     
                                                    
                                                </div>
                                                <div class="row payment-channel-row">
                                                    <div class="col-sm-4">
                                                        <img id="easy-paisa-link" onClick={this.EasyPaisaLink} src="../../../public/images/easypaisablack.png" style={{maxWidth:"73px",maxHeight:"43px", maxWidth:"73px", maxHeight: "43px"}}/>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <img id="jazz-cash-link" onClick={this.JazzImage} src="../../../public/images/jazzcashblack.png" style={{maxWidth:"73px",maxHeight: "43px",maxWidth:"73px", maxHeight: "43px"}}/>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <img id="credit-card-link" onClick={this.CreditCardLink} src="../../../public/images/creditcard.png" style={{maxWidth :"63px",maxHeight: "44px",maxWidth: "63px", maxHeight: "44px"}}/>
                                                    </div>
                                                </div>
                                                <div class="payment-channel-dd-row col-sm-2" style={{display:"none"}}>
                                                    <select id="payment-channel-dd" class="form-control dropdown">
                                                        <option selected="selected">Easy Paisa</option>
                                                        <option>Jazz Cash</option>
                                                        <option>Credit/Debit Card</option>
                                                    </select>
                                                </div>
                                                <div class="row payment-company-row">
                                                    <div class="maxl">
                                                        <label id="shopRow" class="radio inline jazz-cash-radio">
                                                            <input type="radio" name="PaymentMediumTypeId" id="Shop_PaymentMediumTypeId" value="3" checked=""/>
                                                            <span id="shoplbl">EasyPaisa Shop</span>
                                                        </label>
                                                        <label id="mobileAccountRow" class="radio inline mobile-account-radio">
                                                            <input type="radio" name="PaymentMediumTypeId" id="Mobile_PaymentMediumTypeId" value="2"/>
                                                            <span class="mobile-span">Mobile Account </span>
                                                        </label>
                                                        <label id="creditCardRow" class="radio inline card-account-radio" style={{marginTop: "15px", display: "none"}}>
                                                            <input type="radio" name="PaymentMediumTypeId" id="CreditCard_PaymentMediumTypeId" value="4"/>
                                                            <span class="mobile-span">Credit / Debit Card </span>
                                                        </label>
                                                    </div>
                                                    <p class="pin" id="pin-msg-lbl">Please Enter your EasyPaisa 5-digit PIN once promoted on your mobile screen.</p>
                                                    <div class="input-group user-mobile-input-group">
                                                        
                                                            <input class="form-control self-form-control text-box single-line hkjs--empty hkjs--pristine hkjs--untouched" id="MANumber" maxlength="11" name="MANumber" placeholder="03xxxxxxxxx" required="required" type="text" value=""/>
                                                    </div>
                                                </div>
                                                <p class="mobile-msg">Please confirm your Mobile Number</p>
                                                <button type="submit" class="btn btn-block finish-button" id="finish_button">Finish and Pay</button>
                                            </div>

              <button className="btn btn-primary btn-block"  type="submit">Select Payment Method</button>
            </div>
          </aside>
          
        </div>
    </section>
  </div>
  
         );
    }
}
 
export default withRouter(MainContent);