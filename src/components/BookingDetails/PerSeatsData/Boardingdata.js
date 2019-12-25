import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import MainContent from '../../ComfirmDetails/content'
class BoardingData extends Component {
    state = { 
     handleevent:false
     }


    //  MangeDate=()=>
    //  {
    //   <Redirect exact from="/" to="/home" />

    //  }
     
    RedirectMethod=()=>
    {
      console.log("working");
      this.setState({handleevent:true})
      $('#select-busseats').modal('hide');
      
       
    }
  render() { 
    console.log("dummy",this.props.getpickanddroppoint);
    if(this.state.handleevent ===true){
      console.log("working");
      alert(document.getElementById("seatno").value);
      return (<Redirect to={{
        pathname:"/comfirmDetails",
        Scheduleid:document.getElementById("seatno").value,
        transportname:document.getElementById("transportname").value,
        servicetype:document.getElementById("servicetype").value,
        scheduletime:document.getElementById("scheduletime").value,
        destinationtime:document.getElementById("destinationtime").value,
        timetohour:document.getElementById("timetohour").value,
        price:document.getElementById("price").value,
        servicecharges:document.getElementById("servicecharges").value,
        getfromtext:document.getElementById("getfromtext").value,
        gettotext:document.getElementById("gettotext").value,
        busDepart:document.getElementById("busDepart").value,

      }}/>)
    }
    if(this.props.getpickanddroppoint.RoutePickDropPoints){
      //console.log(this.props.getpickanddroppoint.RoutePickDropPoints.map(s=>s.City))
      //this.props.getpickanddroppoint.RoutePickDropPoints.map(s=><div>{s.City}</div>)
    
    }

    if(this.state.handleevent === false){
      return (  
        <React.Fragment>
          
            <div className="tab-pane fade show" id="second" role="tabpanel" aria-labelledby="second-tab">
                          <div className="row">
                          
                           <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                          <div className="booking-details">
                            <h2 className="text-5">Pick Point</h2>
   {(this.props.getpickanddroppoint.RoutePickDropPoints)?this.props.getpickanddroppoint.RoutePickDropPoints.map((s,index)=><div key={s.PickDropPointId}>
   { (s.PickDropType == "P") ? <div  className="d-flex bg-light-4 px-3 py-2 mb-3"><table><thead></thead><tbody><tr><td><input value={s.PickDropPointId} defaultChecked={!(!!index)}  type="radio"/></td><td style={{paddingLeft:"10px"}}>{s.PointName}</td></tr></tbody></table> </div>:   ""}
   
  </div> ):"sd"}

  
              
                           
                          </div>
                        </div>

                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                          <div className="booking-details">
                            
                       
                          <h2 className="text-5">Drop Point</h2>
                            
                            {(this.props.getpickanddroppoint.RoutePickDropPoints)?this.props.getpickanddroppoint.RoutePickDropPoints.map((s,index)=><div key={s.PickDropPointId}>
   { (s.PickDropType == "D") ? <div key={s.PickDropPointId} className="d-flex bg-light-4 px-3 py-2 mb-3"><table><thead></thead><tbody><tr><td><input value={s.PickDropPointId} defaultChecked="checked"   type="radio"/></td><td style={{paddingLeft:"10px"}}>{s.PointName}</td></tr></tbody></table> </div>:   ""}
   
  </div> ):"sd"}
                            {/* <Link to={{
    pathname: "/comfirmDetails",
    users: "sdfds" // your data array of objects
  }}  className="btn btn-primary btn-block">Continue</Link> */}

  <button onClick={this.RedirectMethod}>Continue</button>
                          </div>
                        </div>
                 
                            
                         </div>
                        </div>
                         
        </React.Fragment>
    );
      
    }else{
      return(
        <MainContent/>
      )
    }
       
    }
}
 
export default BoardingData;
