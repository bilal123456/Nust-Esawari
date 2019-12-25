import React, { Component } from 'react';

import Bookingheader from '../BookingDetails/header';
import Footer from '../footer';
import ComfirmDetailsHeader from './comfirmDetailsHeader'
import MainContent from './content'
import LoginModal from './loginmodal';



class Comfirm extends Component {
    state = {  }
    // componentDidMount=()=>
    // {
    //   $(window).on('load', function () {
    //     $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
    //     $('#preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
    //     $('body').delay(333);
    //   });
    // }
    render() { 
        return (
            <>
              <Bookingheader/>
              <ComfirmDetailsHeader/>
              <MainContent/>
              <LoginModal/>
              <Footer/>


              
            </>
          );
    }
}
 
export default Comfirm;