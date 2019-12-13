import React, { Component } from 'react';
class BoardingData extends Component {
    state = {  }
  render() { 
    console.log("dummy",this.props.getpickanddroppoint);
    if(this.props.getpickanddroppoint.RoutePickDropPoints){
      console.log(this.props.getpickanddroppoint.RoutePickDropPoints.map(s=>s.City))
      //this.props.getpickanddroppoint.RoutePickDropPoints.map(s=><div>{s.City}</div>)
    
    }
       return (  
            <React.Fragment>
              
                <div className="tab-pane fade show" id="third" role="tabpanel" aria-labelledby="third-tab">
                              <div className="row">
                              
                               <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                              <div className="booking-details">
                                <h2 className="text-5">Pick Point</h2>
       {(this.props.getpickanddroppoint.RoutePickDropPoints)?this.props.getpickanddroppoint.RoutePickDropPoints.map(s=><div>
       { (s.PickDropType == "P") ? <div className="d-flex bg-light-4 px-3 py-2 mb-3"><input value={s.PickDropPointId} type="radio"/>{s.PointName} </div>:   ""}
       
      </div> ):"sd"}

      
                  
                               
                              </div>
                            </div>

                            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                              <div className="booking-details">
                                
                           
                              <h2 className="text-5">Drop Point</h2>
                                
                                {(this.props.getpickanddroppoint.RoutePickDropPoints)?this.props.getpickanddroppoint.RoutePickDropPoints.map(s=><div>
       { (s.PickDropType == "D") ? <div className="d-flex bg-light-4 px-3 py-2 mb-3"><input value={s.PickDropPointId} type="radio"/>{s.PointName} </div>:   ""}
       
      </div> ):"sd"}
                                <button className="btn btn-primary btn-block">Continue</button>
                              </div>
                            </div>
                     
                                
                             </div>
                            </div>
                             
            </React.Fragment>
        );
    }
}
 
export default BoardingData;
