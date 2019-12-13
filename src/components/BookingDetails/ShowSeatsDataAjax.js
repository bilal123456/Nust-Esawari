import React, { Component } from 'react';
import axios from 'axios'
import BoardingData from './PerSeatsData/Boardingdata'
import CancellationData from './PerSeatsData/Cancellationdata'
import BookingDetails from './PerSeatsData/BookingDetails'
class ShowSeatsDataAjax extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      allSeats:[],
      GetNoofSeatsData:[],
      GetPickandDropData:[],
      PerSeatsAllData:[],
    
   };

  
}
    
     
    componentDidMount()
    {
     
     


      $('#Search').on("click",function(e){
        var fromvalue = $('#select2-seelctciites-container').text();
        var tovalue = $('#getcityid').val();
        var date = $('#busDepart').val();
      });
     

      //Per Seats data available


      // Seat Charts
    var firstSeatLabel = 1;
   var malecounter = 0;
    $(document).ready(function() {
        var $cart = $('#selected-seats'),
          $counter = $('#counter'),
          $total = $('#total'),
          sc = $('#seat-map').seatCharts({
           
          map: [
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa',
            'aa_aa'
          ],
          seats: {
            a: {
              price   : 250,
              classes : 'first-class', //your custom CSS class
              category: 'First Class'
            },
            e: {
              price   : 140,
              classes : 'economy-class', //your custom CSS class
              category: 'Economy Class'
            }	,
            s:{
              price:180,
              classes:'female-class'
            }				
          
          },
          naming : {
            top : false,
            getLabel : function (character, row, column) {
              return firstSeatLabel++;
            },
          },
          legend : {
            node : $('#legend'),
            items : [
              // [ 'm', 'available',   'First Class' ],
              // [ 'e', 'available',   'Economy Class'],
              [ 'f', 'available', 'Available']
            ]					
          },
          click: function () {

          
            if (this.status() == 'available') {
              var malecounter = 1;
              console.log("this is malecounter value",malecounter);
             console.log("this is a id",this.settings.id);
            
            //  this.node().css({
            //   'background' : 'black'
            //  })
              //let's create a new <li> which we'll add to the cart items
              $('<li>'+this.data().category+' Seat # '+this.settings.label+': <b>$'+this.data().price+'</b> <a href="#" className="cancel-cart-item text-danger text-4"><i className="far fa-times-circle"></i></a></li>')
                .attr('id', 'cart-item-'+this.settings.id)
                .data('seatId', this.settings.id)
                            .appendTo($cart);
                console.log(this.data());
                console.log(this.settings.label)
                           console.log(this.data().category);
                           console.log(this.settings.categpry);
                           console.log(this.data().price);
                           console.log(this.settings.id);
              
              
              $counter.text(sc.find('selected').length+1);
              $total.text(recalculateTotal(sc)+this.data().price);
              
              return 'male selected';
            }else if(this.status() == 'male selected'){
              this.node().css({
                'background':'#F84B89'
              })
              var malecounter = 2;
              console.log("this is malecounter value",malecounter);
             console.log("this is a id",this.settings.id);
            
            //  this.node().css({
            //   'background' : 'black'
            //  })
              //let's create a new <li> which we'll add to the cart items
              $('<li>'+this.data().category+' Seat # '+this.settings.label+': <b>$'+this.data().price+'</b> <a href="#" className="cancel-cart-item text-danger text-4"><i className="far fa-times-circle"></i></a></li>')
                .attr('id', 'cart-item-'+this.settings.id)
                .data('seatId', this.settings.id)
                            .appendTo($cart);
                console.log(this.data());
                console.log(this.settings.label)
                           console.log(this.data().category);
                           console.log(this.settings.categpry);
                           console.log(this.data().price);
                           console.log(this.settings.id);
              
              
              $counter.text(sc.find('selected').length+1);
              $total.text(recalculateTotal(sc)+this.data().price);
              
              return 'female selected';

            }
             else if (this.status() == 'female selected') {
               this.node().css({
                'background':'#999'
               })
              //update the counter
              $counter.text(sc.find('female selected').length-1);
              //and total
              $total.text(recalculateTotal(sc)-this.data().price);
            
              //remove the item from our cart
              $('#cart-item-'+this.settings.id).remove();
            
              //seat has been vacated
              return 'available';
            } else if (this.status() == 'unavailable') {
              //seat has been already booked
              return 'unavailable';
            } else {
              return this.style();
            }
          }
        });
        
  
        
  
        //this will handle "[cancel]" link clicks
        $('#selected-seats').on('click', '.cancel-cart-item', function () {
          //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
          sc.get($(this).parents('li:first').data('seatId')).click();
        });
  
        //let's pretend some seats have already been booked
        
        sc.get(['1_2', '4_1', '4_5', '7_2']).status('unavailable');
    
    });
    function recalculateTotal(sc) {
      var total = 0;
    
      //basically find every selected seat and sum its price
      sc.find('selected').each(function () {
        total += this.data().price;
      });
      
      return total;
    }

      var _this2 = this;                
      function qs() {
        var qsparam = new Array(10);
        var query = window.location.search.substring(1);
        var parms = query.split('&');
       for (var i = 0; i < parms.length; i++) {
       var pos = parms[i].indexOf('=');
       if (pos > 0)
      {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsparam[i] = val;    
      }                          
                           }
       text1.value = qsparam[0];
       text2.value = qsparam[1];
       text3.value = qsparam[2];
       cityidget.value =  qsparam[3];
       
                          }
                          var splitstr = qs();


                          var dateofmonth = $('#text1').val();
                          $('#busDepart').val(dateofmonth);
                          console.log(dateofmonth);
                          var cityname = $('#text2').val();
                          
                          
                          var text = cityname.replace("%20", " ");
                          var s = text.replace("%20"," ");
                          console.log(s);
                          $('#busFrom').val(s);
                          

                          var citicstta= $('#text3').val();
                          var citicstta2 = citicstta.replace("%20", " ");
                          var s1 = citicstta2.replace("%20"," ");
                          $('#busTo').val(s1);
                          
                          console.log(s1);
                          
                          
            var myurl="";						
                          
   myurl = "https://api.esawari.pk/api/v2/SearchResult_Result?forweb=true&DateOfMonth="+dateofmonth+"&From="+s+"&To="+s1+"&ServiceCategoryId=1&SortColumn=ScheduleTime&SortOrder=ASC&PageNumber=1&PageSize=50";
  console.log(myurl);
  axios({ method: 'GET',
        url: myurl,
         headers: { "authorization": "zafar:abc@123", "content-type":"application/json", }
      }).then(res=>{
         console.log(res);
          var allSeats = res.data.value;
  
      this.setState({allSeats:allSeats});
          console.log(allSeats);
 
  
  
                        });


                        setInterval(function(){ 
                       var s =  $('#Amenities').text();
                       var s= s.replace("",$('#Amenities').text());
                         }, 8000);

                         
    }
    //calculate Minutes to hours
    MinutesToHHMM(mins_num)
        {
            var hours   = Math.floor(mins_num / 60);
            var minutes = Math.floor((mins_num - ((hours * 3600)) / 60));
            
            // Appends 0 when unit is less than 10
            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            return hours + ' hrs ' + minutes + ' mins';
        }

        //Calculate Destination TIme
        formatAMPM(time) {
          var timeTokens = time.split(':');
          //Created dummy date
          var date = new Date(1970, 0, 1, timeTokens[0], timeTokens[1]);
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          if (minutes == 0)
              minutes = "00";
          minutes = (minutes > 0 && minutes < 10) ? '0' + minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
      }
         GetDestinationDateTime(currentDate,scheduleTime, mins_num)
        {
            var scheduleDate = new Date(currentDate);
            var timeTokens = scheduleTime.split(':');
            scheduleDate.setHours(scheduleDate.getHours() + timeTokens[0]);
            scheduleDate.setMinutes(scheduleDate.getMinutes() + timeTokens[1]);
            var hours = Math.floor(mins_num / 60);
            var minutes = Math.floor((mins_num - ((hours * 3600)) / 60));
            var destinationDateTime = new Date(scheduleDate)
            destinationDateTime.setHours(scheduleDate.getHours() + hours);
            destinationDateTime.setMinutes(scheduleDate.getMinutes() + minutes);
            //alert(destinationDateTime.toLocaleDateString());
            return this.formatAMPM(destinationDateTime.getHours() + ':' + destinationDateTime.getMinutes()); //destinationDateTime.toLocaleDateString();
        }

        listAmenities(id, amenityIds) {
          var strHtml = "";
          if (amenityIds != undefined && amenityIds != '' && amenityIds.length > 0) {
  
              for (var i = 0; i < amenityIds.split(',').length; i++) {
                  if (amenityIds[i] == ',')
                      continue;
                  if (amenityIds[i] == 1) {
                      strHtml = strHtml + ' <i class="fas fa-wifi" title="Wifi"></i> ';
                  }
                  if (amenityIds[i] == 2) {
                      strHtml = strHtml + ' <i class="fas fa-cocktail" title="Water"></i> ';
                  }
                  if (amenityIds[i] == 3) {
                      strHtml = strHtml + ' <i class="fas fa-charging-station" title="Charging Point"></i> ';
                  }
                  if (amenityIds[i] == 4) {
                      strHtml = strHtml + ' <i class="fas fa-film" title="Movie"></i> ';
                  }
                  if (amenityIds[i] == 5) {//reading light
                      //strHtml = strHtml + ' <i class="fas fa-film" title="Reading Light"></i> ';
                  }
                  if (amenityIds[i] == 6) {//Track my bus
                      strHtml = strHtml + ' <i class="fas fa-bus" title="Tracking"></i> ';
                  }
                  if (amenityIds[i] == 7) {//Emergency exit
                      //strHtml = strHtml + ' <i class="fas fa-film" title="Emergency Exit"></i> ';
                  }
                  if (amenityIds[i] == 8) {//Fire Extinguisher
                      
                      strHtml = strHtml + ' <i class="fas fa-fire-extinguisher" title="Fire Extinguisher"></i> ';
                  }
                  if (amenityIds[i] == 9) {//Seat Formation
                      //strHtml = strHtml + ' <i class="fas fa-film"  title="Seat Formation"></i> ';
                  }
                  if (amenityIds[i] == 10) {//Rest Room
                      //strHtml = strHtml + ' <i class="fas fa-film" title="Rest Room"></i> ';
                  }
                  if (amenityIds[i] == 11) {//Back Seat TV
                      //strHtml = strHtml + ' <i class="fas fa-film" title="Back Seat TV"></i> ';
                  }
                  if (amenityIds[i] == 12) {//Lunch Box
                      strHtml = strHtml + ' <i class="fas fa-utensils" title="Lunch Box"></i>';
                  }
                  if (amenityIds[i] == 13) {
                      strHtml = strHtml + ' <i class="fas fa-prescription-bottle" title="Cold drink"></i> ';
                  }
                  if (amenityIds[i] == 14) {//blanket
                      //strHtml = strHtml + ' <i class="fas fa-film" title="Blanket"></i> ';
                  }
                  if (amenityIds[i] == 15) {//Satellite TV
                      //strHtml = strHtml + ' <i class="fas fa-film"  title="Satellite TV"></i> ';
                  }
                  if (amenityIds[i] == 16) { //AC
                      //strHtml = strHtml + ' <i class="fas fa-film" title="AC"></i> ';
                  }
                  if (amenityIds[i] == 17) {//Host Bell
                      strHtml = strHtml + ' <i class="fas fa-bell" title="Host Bell"></i>';
                  }
  
              }
          }
          return strHtml;
      }
      

      amenityTab(id, amenityIds) {
        if ($('#tab_default_1' + id).hasClass("active")) {
            $('#tab_default_1' + id).slideUp('slow');
            $('#tab_default_1' + id).removeClass('active');
        } else
            $('#tab_default_1' + id).slideToggle('slow');

        $('#tab_default_2' + id).slideUp('slow');
        $('#tab_default_3' + id).slideUp('slow');

            var strHtml = "";
            strHtml = strHtml + '<div class="row amenities-row" id="amanity-row">';
            strHtml = strHtml + '<div class="col-sm-12">';
            strHtml = strHtml + '<label>Amenities</label>';
            strHtml = strHtml + '</div>';
            strHtml = strHtml + '<span style="color:black">';
            if (amenityIds.length > 0)
            {                
                for (var i = 0; i < amenityIds.split(',').length; i++)
                {
                    if (amenityIds[i] == 1) {
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-wifi"></i> Wifi';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 2) {
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + ' <i className="fas fa-cocktail"></i> Water';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 3) {
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-charging-station"></i> Charging Point';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 4) {
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 5) {//reading light
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 6) {//Track my bus
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-bus"></i> Track Bus';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 7) {//Emergency exit
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 8) {//Fire Extinguisher
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-fire-extinguisher"></i> Fire Extinguisher';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 9) {//Seat Formation
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 10) {//Rest Room
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 11) {//Back Seat TV
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 12) {//Lunch Box
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-utensils"></i> Lunch Box';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 13) {
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-prescription-bottle"></i> Cold drink';
                        strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 14) {//blanket
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 15) {//Satellie TV
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 16) { //AC
                        //strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        //strHtml = strHtml + '<i class="fas fa-film"></i> Movie';
                        //strHtml = strHtml + '</div>';
                    }
                    if (amenityIds[i] == 17) {//Host Bell
                        strHtml = strHtml + '<div class="col-xs-6 col-sm-3 col-md-3">';
                        strHtml = strHtml + '<i class="fas fa-bell"></i> Host Bell';
                        strHtml = strHtml + '</div>';
                    }
                    
                }
            }
            strHtml = strHtml + '</span>';
            strHtml = strHtml + '</div>';
            $('#tab_default_1' + id).html(strHtml);
        }

         formatAMPM(time) {
          var timeTokens = time.split(':');
          //Created dummy date
          var date = new Date(1970, 0, 1, timeTokens[0], timeTokens[1]);
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          if (minutes == 0)
              minutes = "00";
          minutes = (minutes > 0 && minutes < 10) ? '0' + minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
      }
        Getdata=(e)=>{
         
          var sd = e.currentTarget;
          console.log("sd",sd);
          var data = sd.getAttribute('data-id');
          console.log(data);
          var getcityid = document.getElementById("cityidget").value;
          $('#getpickedanddropdata').val(data);

          axios({ method: 'GET',
          url: 'https://api.esawari.pk/api/v2/SearchResult_Result?ScheduleDetailId='+data+'&CityId='+getcityid,
           headers: { "authorization": "zafar:abc@123", "content-type":"application/json", }
        }).then(res=>{
           console.log("check dataarray",res.data);
           this.setState({PerSeatsAllData:res.data});
           console.log("PerseatData",this.state.PerSeatsAllData);
          //  var GetNoofSeatsData = res.data.BookingDetails;
          //  var GetPickandDropData = res.data.RoutePickDropPoints;
          //  console.log(GetNoofSeatsData);
          //  this.setState({GetNoofSeatsData:GetNoofSeatsData});
          //  console.log("Finishedthedatafinally",GetNoofSeatsData)
          //  this.setState({GetPickandDropData:GetPickandDropData});
          //  console.log(GetPickandDropData);
           
          });

          $('#select-busseats').modal('show');
         
          
        }

    render() { 
      console.log("propsdatadata",this.props.getpassvaluefromSearchtoData);
        return ( 

            <React.Fragment>
               
              <div id="ModifyData">
                    {this.state.allSeats.map(seats=><div className="bus-list" key={seats.id}>
                    
                <div className="bus-item">

                  <div className="row align-items-sm-center flex-row py-4 px-3">
                    
        <div className="col col-sm-3"> <span className="text-3 text-dark operator-name" data-id={seats.id}>{seats.TransporterName}</span> <span className="text-1 text-muted d-block">{seats.ServiceType}</span><span className="text-1 text-muted d-block" id="Amenities" dangerouslySetInnerHTML={{ __html: this.listAmenities(seats.id, seats.AmenityIds) }}>     
        
   </span> </div>
        <div className="col col-sm-3 text-center time-info"> <span className="text-4 text-dark">{this.formatAMPM(seats.ScheduleTime)} <i className="fas fa-arrow-right"></i>{this.GetDestinationDateTime(seats.ScheduleDate,seats.ScheduleTime,seats.TotalTravelTime)}</span> <small className="text-muted d-block">{this.MinutesToHHMM(seats.TotalTravelTime)}</small> </div>
                    <div className="col col-sm-3 text-center d-none d-sm-block time-info"> <span className="text-3 duration">{seats.NoOfSeats} Available</span> <small className="text-muted d-block">{seats.Description}</small> </div>
                    <div className="col-12 col-sm-3 align-self-center text-right text-sm-center mt-2 mt-sm-0">
                      <div className="d-inline-block d-sm-block text-dark text-5 price mb-sm-1">RS {seats.Price}</div>
                      <a onClick={this.Getdata} id="seatmodalopen"  href="#" data-id={seats.id} className="btn btn-sm btn-outline-primary shadow-none" data-toggle="modal"><i className="fas fa-ellipsis-h d-none d-sm-block d-lg-none" data-toggle="tooltip" title="Select Seats"></i> <span className="d-block d-sm-none d-lg-block">Select Seats</span></a> </div>
                      
                  </div>
                </div>
              
                
              
               
              </div>)}

              </div>


            


              <div id="select-busseats" className="modal fade" role="dialog" aria-hidden="true">
                  
                  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Bus Booking Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                      </div>
                      <div className="modal-body">
                        <div className="bus-details">
                          {/* <BookingDetails showdata={this.state.allSeats}/> */}
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item"> <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">Available Seats</a> </li>
                            <li className="nav-item"> <a className="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="third" aria-selected="false">Cancellation Fee</a> </li>
                            <li className="nav-item"> <a className="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="second" aria-selected="false">Boarding Point</a> </li>
                          </ul>
                          <div className="tab-content my-3" id="myTabContent">
                            <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                              <div className="row">
                                <div className="col-12 col-lg-6 text-center">
                                  <p className="text-muted text-1">Click on Seat to select/ deselect</p>
                                  <div id="seat-map">
                                    <div className="front-indicator">Front</div>
                                  </div>
                                  <div id="legend"></div>
                                </div>
                                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                                  <div className="booking-details">
                                    <h2 className="text-5">Booking Details</h2>
                                    <p>Selected Seats (<span id="counter">0</span>):</p>
                                    <ul id="selected-seats">
                                    </ul>
                                    <div className="d-flex bg-light-4 px-3 py-2 mb-3">Total Fare: <span className="text-dark text-5 font-weight-600 ml-2">$<span id="total">0</span></span></div>
                                    <button className="btn btn-primary btn-block">Continue</button>
                                  </div>
                                </div>
                              </div>
                            </div>



                            <BoardingData getpickanddroppoint={this.state.PerSeatsAllData}/>
                            <CancellationData/>
                            
                            
                            
                            
                           
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
 
export default ShowSeatsDataAjax;