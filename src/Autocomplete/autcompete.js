import React, { Component } from 'react';
import axios from 'axios';
import Axios from 'axios';
import './autocomplet.css';

class Autocomplete extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        suggestion : [],
        items :[],
        itemscities:[],
        text:'',
        }
    
   
      
    

    }
    
   componentDidMount ()
   {

    axios({
        method: 'GET', //you can set what request you want to be
        url: 'https://api.esawari.pk/api/v2/SearchCityList_Result?cityId=0',
        
        headers: {
            "authorization": "zafar:abc@123",
            "content-type":"application/json",
        }
      }).then(res=>{
        console.log(res);
        var items = res.data.value;
         this.setState({items:items});
         console.log(items);

      
      });
      
      $(document).ready(function() {
        $('.selectcities').select2({width:"100%",
        placeholder: "From"});

      });

      

   }

      renderSuggestion =()=>
      {
        
        
        return (
          <React.Fragment>
          

          <select placeholder="Search" id="seelctciites"   className="selectpicker selectcities" data-live-search="true">
          <option></option>
            {this.state.items.map(d => <option value={d.Id}  className="form-control" key={d.Id}>{d.Name}</option>)}
            </select>
           
           



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
 
export default Autocomplete;