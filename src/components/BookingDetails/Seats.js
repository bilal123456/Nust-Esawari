import React, { Component } from 'react';
import ShowSeatsDataAjax from './ShowSeatsDataAjax';

class Seats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allSeats:[],
          getnewSeats:[],
          s1:"",
          s2:"",
          };

        
    }
    componentDidMount()
    {
      var t1= true;
     $('#toggleadd').on('click',function(){
      if(t1)
      {
        $('#multiCollapseExample1').css("display","block");
        t1=false;
      }
      else
      { $('#multiCollapseExample1').css("display","none");
      t1=true;

      }
      
      
       
       
       
     //   $('#hidencontent').toggle();
     })

     

     var citicstta= $('#text3').val();
     var citicstta2 = citicstta.replace("%20", " ");
     var s2 = citicstta2.replace("%20"," ");
    
     var text2 = $('#text2').val();
                          var text21 =  text2.replace("%20"," ");
                          var s1 = text21.replace("%20"," ")
     this.setState({
      s1:s1
     })
     

                     

                          
    
                          

                         
     this.setState({
      s2:s2
     })
    }

    render() {
      console.log("propsdata",this.props.searchcriteriadata.map(s=>s.AmenityIds));
      
        return (
            <React.Fragment>
             
<div className="col-md-12" id="SeatsModule" style={{margin:"10px"}}>
            <div className="bg-light shadow-md rounded py-4">
              <div className="mx-3 mb-3 text-center">
        <h2 className="text-6">{this.state.s1} <small className="mx-2">to</small>{this.state.s2}</h2>
              </div>
              <div className="text-1 bg-light-3 border border-right-0 border-left-0 py-2 px-3">
                <div className="row">
                  <div className="col col-sm-3"><span className="d-none d-sm-block">Name</span></div>
                  <div className="col col-sm-3 text-center">Time</div>
                  <div className="col-sm-3 text-center d-none d-sm-block">Seats</div>
                  <div className="col col-sm-3 text-center">Price</div>
                
                </div>
              </div>
             <ShowSeatsDataAjax getpassvaluefromSearchtoData={this.props.searchcriteriadata} />
              
{/*               
              <ul className="pagination justify-content-center mt-4 mb-0">
                <li className="page-item disabled"> <a className="page-link" href="#" tabindex="-1"><i className="fas fa-angle-left"></i></a> </li>
                <li className="page-item active"> <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a> </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"> <a className="page-link" href="#"><i className="fas fa-angle-right"></i></a> </li>
              </ul> */}
            </div>
          </div>
</React.Fragment>
        );
    }
}

export default Seats;