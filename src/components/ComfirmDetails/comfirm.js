import React, { Component } from 'react';

import Bookingheader from '../BookingDetails/header';
import Footer from '../footer';
import ComfirmDetailsHeader from './comfirmDetailsHeader'




class Comfirm extends Component {
    state = {  }
    render() { 
        return (
            <>
              <Bookingheader/>
              <ComfirmDetailsHeader/>
              {/* <Footer/> */}
            </>
          );
    }
}
 
export default Comfirm;