import React, { Component } from 'react';

class ComfirmDetailsHeader extends Component {
    state = {  }
    render() { 
        return (
            <>
            <section class="page-header page-header-text-light bg-secondary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1>Bus - Confirm Details</h1>
          </div>
          {/* <div class="col-md-4">
            <ul class="breadcrumb justify-content-start justify-content-md-end mb-0">
              <li><a href="index.html">Home</a></li>
              <li><a href="booking-flights.html">Flights</a></li>
              <li class="active">Flights Confirm Details</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
            </>
          );
    }
}
 
export default ComfirmDetailsHeader;

