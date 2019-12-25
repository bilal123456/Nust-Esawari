import React, { Component } from 'react'
import Autocomplete from '../../Autocomplete/autcompete'
import Multiplecities from '../../Autocomplete/multiplecities'
import axios from 'axios'
import Filters from './filters'
import Seats from './Seats.js'
import {Link} from 'react-router-dom'
import './autocomplete.css'
class SearchCriteria extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          allSeats:[],
          getfromvaluepasstourl:"ok"
          };

    }
   
   componentDidMount()
   {

    //getcity id na 
    $('.selectpickers').change(function(e){
      console.log($(this).val());
      var abc = $('option:selected',this).data("id");
      console.log("dummydata",abc);
      $('#cityidget').val(abc);
    }) ;

    $('#Search').on('click',function(e){
      var getfromvalueget = document.getElementById('autosearchfrom').value;
     var gettovalueget = document.getElementById('autosearchto').value;
     
     var getdateget = document.getElementById('busDepart').value;
     var abc = document.getElementById('cityidget').value;;
    
      window.location.href = "/books?DateOfMonth="+getdateget+"&From="+getfromvalueget+"&To="+gettovalueget+"&Cityid="+abc;

    })
   
   $('#modify').on('click',function(e)
   {
   $('#autosearch').css('display','block');
   $('#autosearchs').css('display','block');
     $('#busFrom').addClass('style');
     $('#busTo').addClass('style');

     $('#busFrom').hasClass('style');
     $('.style').css('display','none');
     $('#Search').css('display','block');
     
     $('#modify').css('display','none');
     $('#ModifyData').css('display','block');
    // $('#SearchData').css('display','block');
   });


   $('.selectpickers').change(function() { 
     var getcities = $('#select2-seelctciites-container').text();
     console.log("getnewcity",getcities);
     
    var  selectcitiesvalues = $(this).val();
     
     console.log("newdata",selectcitiesvalues);
     $('#autosearchfrom').val(getcities);
     $('#autosearchto').val(selectcitiesvalues);
     var date = $('#busDepart').val();

   });

}


   SearchCriteria=()=>{
     var getfromvalue = document.getElementById('autosearchfrom').value;
     var gettovalue = document.getElementById('autosearchto').value;
     
     var getdate = document.getElementById('busDepart').value;
    
 

   console.log("getfromvaluepasstourl",this.state.getfromvaluepasstourl);

        var  myurl = "https://api.esawari.pk/api/v2/SearchResult_Result?forweb=true&DateOfMonth="+getdate+"&From="+getfromvalue+"&To="+gettovalue+"&ServiceCategoryId=1&SortColumn=ScheduleTime&SortOrder=ASC&PageNumber=1&PageSize=50";
   console.log(myurl);
   axios({ method: 'GET',
         url: myurl,
          headers: { "authorization": "zafar:abc@123", "content-type":"application/json", }
       }).then((res)=>{
          console.log(res);
           var allSeats = res.data.value;
          console.log("getnewdatasdummy",allSeats);
           this.setState({allSeats:allSeats});
           console.log("allSeats",allSeats);
       });

   }
    render() {
      console.log("working data successfully",this.state.allSeats)
        return (
            <React.Fragment>
              <input id="autosearchfrom" type="hidden"/>
              <input id="autosearchto" type="hidden"/>
               <div className="row" style={{position:"relative",left:"25px"}}>
          <div className="col-md-12">
           
              <div className="form-row">
                <div className="col-md-3 col-lg-3 form-group">
                  
                  <input type="text" className="form-control" id="busFrom" required placeholder="From" style={{lineHeight:"8px",border:"1px solid #444"}}/>
                  <div id="autosearch" style={{display:"none"}}>
                  <Autocomplete/>
                  </div>
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" style={{position:"relative",top:"0px",left:"10px"}}></i></span> 
                 </div>
                <div className="col-md-3 col-lg-3 ">
                  <input type="text" className="form-control" id="busTo" required placeholder="To" style={{lineHeight:"8px",border:"1px solid #444"}}/>
                  <div id="autosearchs" style={{display:"none"}}>
                  <Multiplecities/>

                  
                  </div>
                  <span className="icon-inside"><i className="fas fa-map-marker-alt" style={{position:"relative",top:"-8px"}}></i></span> 

                  </div>
                <div className="col-md-3 col-lg-3 form-group">
                  <input id="busDepart" type="text" className="form-control" required placeholder="Depart Date" style={{lineHeight:"8px",border:"1px solid #444",borderRadius: "0px"}}/>
                  <span className="icon-inside"><i className="far fa-calendar-alt" style={{position: "absolute",top: "0px"}}></i></span> </div>
                  <button id="modify" style={{display:'block',position:"relative",top:"-10px"}} className="btn btn-sm btn-primary m-2" type="submit">Modify</button>
                  <button  id="Search"  onClick={this.SearchCriteria} className="btn btn-sm btn-info m-2" style={{display:"none",position:"relative",top:"-10px"}} >Search</button>
                 
             <a id="toggleadd" style={{position:"relative",top:"10px"}} href="#">Advance Search</a>
                {/* <div className="col-md-4 col-lg travellers-class form-group">
                  <input type="text" id="busTravellersClass"  className="travellers-class-input form-control" name="bus-travellers-class" placeholder="Seats"  required />
                  <span className="icon-inside"><i className="fas fa-caret-down" style={{position: "absolute",top: "-15px"}}></i></span>
                  <div className="travellers-dropdown">
                    <div className="row align-items-center mb-3">
                      <div className="col-sm-7">
                        <p className="mb-sm-0">Seats</p>
                      </div>
                      <div className="col-sm-5">
                        <div className="qty input-group">
                          <div className="input-group-prepend">
                            <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#adult-travellers" data-toggle="spinner">-</button>
                          </div>
                          <input type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner form-control" value="1" />
                          <div className="input-group-append">
                            <button type="button" className="btn bg-light-4" data-value="increase" data-target="#adult-travellers" data-toggle="spinner">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block submit-done" type="button">Done</button>
                  </div>
                </div> */}
                <div className="col-md-3 col-lg form-group">
                  
                 
                </div>
              </div>
         
          </div>
   
          
            
           
         
        </div>
       


<Filters/>

<Seats searchcriteriadata={this.state.allSeats} />

       
            </React.Fragment>
        );
    }
}

export default SearchCriteria;