import React, { Component } from 'react';
import axios from 'axios';
import './multiplecitiesselect.css'


class Multiplecities extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        suggestion : [],
        
        items:[],
        text:'',
        }
    
       // this.GetCities = this.GetCities.bind(this);
      
    

    }
    

    
  componentDidMount = ()=> 
   {
     
    var selectcitiesvalues = ""; 
    var _this = this;  
    $('.selectcities').change(function() { 
       selectcitiesvalues = $(this).val();
      console.log($('#cityid').val(selectcitiesvalues));
        console.log("the value is "+selectcitiesvalues);
        console.log("text is "+$(this).text());
       
        
        
        axios({ method: 'GET',
        url: 'https://api.esawari.pk/api/v2/SearchCityList_Result?cityId='+selectcitiesvalues,
         headers: { "authorization": "zafar:abc@123", "content-type":"application/json", }
      }).then(res=>{
         console.log(res);
         var items = res.data.value;
         _this.setState({items:items});
        
          console.log(items);
       });
       
    });

    var getnewcity = "";
    

    
      $(document).ready(function() {
        $('.selectpickers').select2({width: '100%',
        placeholder: "To"});

      });
    $('.selectpickers').change(function(e){
      console.log($(this).val());
      var abc = $('option:selected',this).data("id");
      console.log(abc);
      $('#getcityid').val(abc);
    })   
      
   
             
    
            }
           
     
   
    
    

      renderSuggestion =()=>
      {
        
        return (
          <React.Fragment>
            <input id="cityid" type="hidden"/>
            <input id="getcityid" type="hidden"/>
          <div>


          <select  placeholder="Search" className="selectpickers"  data-live-search="true">
          <option></option>
            {this.state.items.map(d => <option value={d.Name} data-id={d.Id}  className="form-control" key={d.Id}>{d.Name}</option>)}
</select>
            </div>



  </React.Fragment>   
        );
        
      }

     

    
    render() { 
        
        const {text} = this.state;
        return (  
           <React.Fragment>
               {/* <input value={text} type="text" onChange={this.onTextChanged}/> */}
               
               {this.renderSuggestion()}
              
  </React.Fragment>
        );
    }
}
 
export default Multiplecities;