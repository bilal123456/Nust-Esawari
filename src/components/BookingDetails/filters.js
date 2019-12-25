import React, { Component } from 'react';
import axios from 'axios'
class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filterOperators:[],
          };
    }


    componentDidMount()
    {
      //Advanced Serch Bus Operator
      axios({ method: 'GET',
         url: "https://api.esawari.pk/api/v1/Transporters",
          headers: { "authorization": "zafar:abc@123", "content-type":"application/json", }
       }).then((res)=>{
          console.log(res);
           var filterOperators = res.data.value;
          console.log("filterOperators",filterOperators);
           this.setState({filterOperators});
           console.log("filterOperators",filterOperators);
       });

    }
    


    render() {
      const filterOperatorsfilter = this.state.filterOperators.filter( function (transporter) {
        return transporter.IsActive===true
      });
      console.log("filterOperatorsfilter",filterOperatorsfilter);
        return (
          
            <React.Fragment>
                   
    
                <div id="hidencontent" className="container">
                <aside  className="col-md-12" id="multiCollapseExample1" style={{position:"relative",display:"none",left:"10px",height:"250px",background:"white"}}>
            <div className="bg-light shadow-md rounded p-3">
              <h3 className="text-5">Filter</h3>
              <div className="accordion accordion-alternate style-2" id="toggleAlternate">
                 
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="departure">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#toggleDeparture" aria-expanded="true" aria-controls="togglePrice">Departure Time</a> </h5>
                  </div>
                  <div id="toggleDeparture" className="collapse show" aria-labelledby="departure">
                    <div className="card-body">
                      <p><span className="slider-time-departure">00:00</span> - <span className="slider-time-departure">23:59</span></p>
                      <div id="slider-range-departure"></div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="price">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglePrice" aria-expanded="true" aria-controls="togglePrice">Price</a> </h5>
                  </div>
                  <div id="togglePrice" className="collapse show" aria-labelledby="price">
                    <div className="card-body">
                      <p>
                        <input id="amount" type="text"  className="form-control border-0 bg-transparent p-0"/>
                      </p>
                      <div id="slider-range"></div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="busType">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglebusType" aria-expanded="true" aria-controls="togglebusType">Bus Type</a> </h5>
                  </div>
                  <div id="togglebusType" className="collapse show" aria-labelledby="busType">
                    <div className="card-body">
                      <div className="custom-control custom-checkbox">
                        <input  type="checkbox" id="sleeper" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="sleeper">Ac</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="seater" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seater">Non Ac</label>
                      </div>
                     
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3" style={{float:"left",overflow: "auto",overflowY:"scroll",height:"180px"}}>
                  <div className="card-header" id="busOperators">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglebusOperators" aria-expanded="true" aria-controls="togglebusOperators">Bus Operators</a> </h5>
                  </div>
                  <div id="togglebusOperators" className="collapse show" aria-labelledby="busOperators">
                    <div className="card-body">
                  {filterOperatorsfilter.map(s=>
                  
                      <div key={s.Id}  className="custom-control custom-checkbox">
                        <input value={s.Id} type="checkbox" id="akTour" name="busOperators" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="akTour">{s.TransporterName}</label>
                      </div>
                    
                     
                     
                   
                   )}
                    </div>
                  </div>
                </div>
               
                <div className="col-md-3" style={{float:"left"}}>
                  <div className="card-header" id="sortby">
                    <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglePrice" aria-expanded="true" aria-controls="togglePrice">Price</a> </h5>
                  </div>
                  <div id="togglePrice" className="collapse show" aria-labelledby="price">
                    <div className="card-body">
                      <div style={{clear:"both"}}></div>
                   <table>
                     <thead></thead>
                     <tbody>
                   <tr>
                       <td>                        <input id="radio" type="radio"/><span style={{paddingLeft:"10px"}}>Departure Time</span>
</td>
                     </tr>
                     <tr>
                       <td>                        <input id="radio" type="radio"/><span style={{paddingLeft:"10px"}}>Travel to Duration</span>
</td>
                     </tr>
                     <tr>
                       <td>                        <input id="radio" type="radio"/><span style={{paddingLeft:"10px"}}>Price</span>
</td>
                     </tr>
                     </tbody>
                     </table>
                     <div className="custom-control custom-checkbox">
                        <input  type="checkbox" id="sleeper" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="sleeper">Ascending</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input  type="checkbox" id="sleeper" name="busType" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="sleeper">Desending</label>
                      </div>
                   
                        
                      
                      {/* <div id="slider-range"></div> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </aside>
           
           
                </div>
                
            
           
            </React.Fragment>
        );
    }
}

export default Filters;