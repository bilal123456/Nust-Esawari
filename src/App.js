import React, { Component } from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import BookingDetail from './components/BookingDetails/bookingdetails';
import Comfirm from './components/ComfirmDetails/comfirm';







class App extends Component {
	state = {
		posts:[]
	  }
	
	 



    
	

    render() { 

        
        return (
			

            <BrowserRouter>
             <div>
			
				 <Route exact path="/" component={Home}/>
				 
				 <Route path="/books" component={BookingDetail}/>
				 <Route path="/comfirmDetails" component={Comfirm}/>
				 
				
			 </div>
			 </BrowserRouter>
			
        );
    }
}
 
export default App;