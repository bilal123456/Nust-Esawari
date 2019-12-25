import React, { Component } from 'react';

class BookingDetails extends Component {
    state = {  }
    componentDidMount()
    {
        //get from name and get to name from search creteria 
       // document.getElementById('text2').value = document.getElementById('getfromtext').value;
        
       
    }
    render() { 
        return ( 
            <>
            <input type="text" id="seatno"/>
            <input type="text" id="transportname"/>
            <input type="text" id="servicetype"/>
            <input type="text" id="scheduletime"/>
            <input type="text" id="destinationtime"/>
            <input type="text" id="timetohour"/>
            <input type="text" id="price"/>
            <input type="hidden" id="servicecharges"/>
            <input type="hidden" id="getfromtext"/>
            <input type="hidden" id="gettotext"/>
            <div className="row align-items-sm-center flex-row mb-4">
            
                            <div className="col col-sm-4"> <span className="text-4 text-dark operator-name" id="transportername"></span> <span className="text-muted d-block ServiceType" id="getservicetype"></span> </div>

                            <div className="col col-sm-4  text-center time-info" style={{position:"relative",top:"5px"}}>  <span className="text-5 text-dark ScheduleTime" id="getscheduletime"></span><i className="fas fa-arrow-right" aria-hidden="true"></i>  <small className="text-5 text-dark ScheduleTime" id="getdestinationtime"></small> <span className="text-muted d-block ServiceType" id="gettimetohour"></span> </div>
                            <div className="col col-sm-4 text-center time-info" style={{position:"relative",top:"5px"}}> <span className="text-5 text-dark" id="getprice"></span> <small className="text-muted d-block"></small> </div>
                          </div>

                          {/* <MainContent/> */}
           
            </>
         );
    }
}
 
export default BookingDetails;