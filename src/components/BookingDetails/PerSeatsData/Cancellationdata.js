import React, { Component } from 'react';
class CancellationData extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                              <table className="table table-hover table-bordered bg-light">
                                <thead>
                                  <tr>
                                    <td>Hours before Departure</td>
                                    <td className="text-center">Refund Percentage</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Before 0 Hrs.</td>
                                    <td className="text-center">0%</td>
                                  </tr>
                                  <tr>
                                    <td>Before 24 Hrs.</td>
                                    <td className="text-center">30%</td>
                                  </tr>
                                  <tr>
                                    <td>Before 48 Hrs.</td>
                                    <td className="text-center">60%</td>
                                  </tr>
                                  <tr>
                                    <td>Before 60 Hrs.</td>
                                    <td className="text-center">75%</td>
                                  </tr>
                                  <tr>
                                    <td>Above 60 Hrs. </td>
                                    <td className="text-center">80%</td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="font-weight-bold">Terms & Conditions</p>
                              <ul>
                                <li>Free baggage upto 15 kg per passenger is allowed.</li>

                                <li>  Non Transferable and Non Refundable.</li>

                                <li>   25% Cancellation charges if cancelled at least 4 hrs before departure, after the departure time no claim will be entertained.</li>

                                <li> The company takes no responsibility in the eventof cancellation of service, accident etc beyond their control.</li>
                              </ul>
                            </div>
            </React.Fragment>
         );
    }
}
 
export default CancellationData;