import React, { Component } from 'react';
import './banner.css';
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className="section">
      <div className="container">
        <h2 className="text-9 font-weight-500 text-center">Featured Offers</h2>



        <div class="container">
    <div class="row">
        <div class="col-md-4">
            {/* <!-- begin panel group --> */}
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                
                {/* <!-- panel 1 --> */}
                <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab1" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingOne"data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>1</span></div></h4>
                            </div>
                           <div class="col-lg-8">
                           <h3 class="title">Get Started!</h3>
                            </div>
                        </div>
                    </div>
                    </span>
                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                        Sign Up to Create an Account


                        {/* <!-- Tab content goes here -->
                        That fall, as Nadia and Masha got shipped off to prison camps in Siberia, South Brooklyn tried to recover from the storm. My dad and I spent a lot of time in the same apartment engrossed in separate laptops, separate internet missives. He followed Russian news bloggers closely and would update me on troubling developments. A rise in protofascist nationalism */}
                        </div>
                    </div>
                </div> 
                {/* <!-- / panel 1 -->
                
                <!-- panel 2 --> */}
                <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab2" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>2</span></div></h4>
                            </div>
                           <div class="col-lg-8">
                           <h3 class="title">Lets Go!</h3>
                            </div>
                        </div>
                        </div>
                       
                    </span>

                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                        Enter Departure and Destination Cities to look for available Buses.
                        </div>
                    </div>
                </div>
                {/* <!-- / panel 2 -->
                
                <!--  panel 3 --> */}
                <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab3" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingThree"  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>3</span></div></h4>
                            </div>
                           <div class="col-lg-8">
                           <h3  class="title">Choose Bus of your Choice! </h3>
                            </div>
                        </div>
                           
                           
                          
                        </div>
                    </span>

                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div class="panel-body">
                          <div class="info">Select a Bus that suits your Needs.</div>
                          </div>
                        </div>
                      </div>





                    {/* <!--  panel 4 --> */} 
                <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab4" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingfour"  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>4</span></div></h4>
                            </div>
                           <div class="col-lg-8">
                             <h3 class="title">Select Seats!</h3>
                           
                            </div>
                        </div>
                            
                        </div>
                    </span>

                        <div id="collapsefour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                          <div class="panel-body">
                          Select seats from available Options.
                          </div>
                        </div>
                      </div>


                         {/* <!--  panel 4 --> */} 
                <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab5" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingfour"  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>5</span></div></h4>
                            </div>
                           <div class="col-lg-8"> <h3  class="title">Choose Boarding/ Dropping points!</h3>
                           
                            </div>
                        </div>
                           
                        </div>
                    </span>

                        <div id="collapsefive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                          <div class="panel-body">
                          Choose your nearby Boarding and Droppng points.
                          </div>
                        </div>
                      </div>




                      <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab5" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingfour"  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>6</span></div></h4>
                            </div>
                           <div class="col-lg-8">
                          <h3 class="title">Punch in all details!</h3>
                            </div>
                        </div>
                           
                        </div>
                    </span>

                        <div id="collapsesix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                          <div class="panel-body">
                          Enter required details of Passengers.
                          </div>
                        </div>
                      </div>







                      <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab7" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingfour"  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsesevent" aria-expanded="false" aria-controls="collapseThree">
                           
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>7</span></div></h4>
                            </div>
                           <div class="col-lg-8">   <h3 class="title">Pay that way you want to!</h3>
                          
                            </div>
                        </div>
                         
                        </div>
                    </span>

                        <div id="collapsesevent" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                          <div class="panel-body">
                          
                          <div class="info">Review Details, Pay and Confirm your Ticket from available Payment Methods.</div>
                          </div>
                        </div>
                      </div>





                      <div class="panel panel-default">
                    {/* <!--wrap panel heading in span to trigger image change as well as collapse --> */}
                    <span class="side-tab" data-target="#tab8" data-toggle="tab" role="tab" aria-expanded="false">
                        <div class="panel-heading" role="tab" id="headingfour"  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseeight" aria-expanded="false" aria-controls="collapseThree">
                        <div class="row">
                            <div class="col-lg-2">
                            <h4 class="panel-title"><div class="number mr-2"><span style={{marginTop:"20px",marginLeft:"12px",position:"relative",top:"5px"}}>8</span></div></h4>
                            </div>
                           <div class="col-lg-8"><h3 class="title">Get your Ticket!</h3>
                          
                            </div>
                        </div>
                            
                        </div>
                    </span>

                        <div id="collapseeight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                          <div class="panel-body">
                          <div class="row">
                            Your Ticket has been Confirmed/Reserved based on your Payment Medium Selection.

Follow Onscreen/SMS Instructions.</div>
                          </div>
                        </div>
                      </div>
            </div> 
             
        </div> 
        <div class="col-md-8">
            {/* <!-- begin macbook pro mockup --> */}
            <div class="md-macbook-pro md-glare">
                <div class="md-lid">
                    <div class="md-camera"></div>
                    <div class="md-screen">
                    {/* <!-- content goes here -->                 */}
                        <div class="tab-featured-image">
                            <div class="tab-content">
                                <div class="tab-pane  in active" id="tab1">
                                        <img src="https://ununsplash.imgix.net/photo-1417024321782-1375735f8987?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>
                                <div class="tab-pane " id="tab2">
                                    
                                        <img src="https://unsplash.imgix.net/uploads/1411724908903377d4696/2e9b0cb2?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950"/>
                                    
                                </div>
                                <div class="tab-pane fade" id="tab3">
                                    
                                        <img src="https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>


                                <div class="tab-pane fade" id="tab4">
                                    
                                        <img src="https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>


                                <div class="tab-pane fade" id="tab5">
                                    
                                        <img src="https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>


                                <div class="tab-pane fade" id="tab6">
                                    
                                        <img src="https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>


                                <div class="tab-pane fade" id="tab7">
                                    
                                        <img src="https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>


                                <div class="tab-pane fade" id="tab8">
                                    
                                        <img src="https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950" alt="tab1" class="img img-responsive"/>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md-base"></div>
            </div>
             {/* <!-- end macbook pro mockup --> */}



        </div> 
    </div> 
    {/* <!--/ .row --> */}
</div></div>
        {/* <p className="lead text-center mb-4">Get Best Offers &amp; Discounts</p>
        <div className="owl-carousel owl-theme banner">
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-4.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">Up to 10% OFF</h5>
                <p className="card-text"><a href="#">On Flight Booking <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-5.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">5% OFF</h5>
                <p className="card-text"><a href="#">On Train Booking <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-1.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">100% Cashback</h5>
                <p className="card-text"><a href="#">On Bus Booking <i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-6.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">$10 Cashback</h5>
                <p className="card-text"><a href="#">On Metro Card Recharge<i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-2.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">$50 Cashback</h5>
                <p className="card-text"><a href="#">On Brodband Bill<i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card"> <img className="card-img-top" src="../../public/images/slider/small-banner-3.jpg" alt="banner"/>
              <div className="card-body">
                <h5 className="card-title">Up to 20% OFF</h5>
                <p className="card-text"><a href="#">On Cable Payment<i className="fas fa-arrow-right ml-1"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
</section>

      </React.Fragment>
   
         );
    }
}
 
export default Banner;