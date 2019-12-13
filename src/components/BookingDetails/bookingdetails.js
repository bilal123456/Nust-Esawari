import React, { Component } from 'react'
import Bookingheader from './header.js'
import SearchCriteria from './SearchCriteria'

import Buslistpage from './buslistpage'

import Footer from '../footer'


import Loginmodal from './Loginmodal.js'
import axios from 'axios'
class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			allSeats:[],
         };
    }
    componentDidMount(){

$(function() {
 'use strict';
  // Depart Date
  $('#busDepart').daterangepicker({
	locale: {
		format: 'YYYY-MM-DD'
	},
	singleDatePicker: true,
	minDate: moment(),
	autoUpdateInput: false,
	}, function(chosen_date) {
  $('#busDepart').val(chosen_date.format('YYYY-MM-DD'));
  });

// Departure Time Slider Range (jQuery UI)
	$("#slider-range-departure").slider({
  range: true,
  min: 0,
  max: 1439,
  values: [0, 1439],
  slide: function(e, ui) {
    $('.slider-time-departure').each(function(i) {
      var hours = ("00" + Math.floor(ui.values[i] / 60)).slice(-2);
      var mins = ("00" + (ui.values[i] - (hours * 60))).slice(-2);
      $(this).html(hours + ':' + mins);
    });
  }
});

// Slider Range (jQuery UI)
    $( "#slider-range" ).slider({
      range: true,
      min: 125,
      max: 1250,
      values: [ 125, 1250 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
 });
	



    }
    render() {
        return (
            <React.Fragment>
            
           <div id="main-wrapper">
		   <input   id="text1" type="hidden" />
		   <input id="text2" type="hidden" />
		   <input id="text3" type="hidden" />
		   <input id="cityidget" type="hidden" />
<Bookingheader/>
<Buslistpage/>

<div id="content">
<section className="container">
<SearchCriteria/>


</section>
</div>
<Loginmodal/>

 <Footer/>



               </div>
               </React.Fragment>
        );
    }
}

export default BookingDetail;