import React, { Component } from 'react';
class Loginmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div id="login-signup" className="modal fade" role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content p-sm-3">
      <div className="modal-body">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item"> <a id="login-tab" className="nav-link active text-4" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a> </li>
          <li className="nav-item"> <a id="signup-tab" className="nav-link text-4" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a> </li>
        </ul>
        <div className="tab-content pt-4">
          <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <form id="loginForm" method="post">
              <div className="form-group">
                <input type="email" className="form-control" id="loginMobile" required placeholder="Mobile or Email ID"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="loginPassword" required placeholder="Password"/>
              </div>
              <div className="row mb-4">
                <div className="col-sm">
                  <div className="form-check custom-control custom-checkbox">
                    <input id="remember-me" name="remember" className="custom-control-input" type="checkbox"/>
                    <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                  </div>
                </div>
                <div className="col-sm text-right"> <a className="justify-content-end" href="#">Forgot Password ?</a> </div>
              </div>
              <button className="btn btn-primary btn-block" type="submit">Login</button>
            </form>
          </div>
          <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <form id="signupForm" method="post">
              <div className="form-group">
                <input type="text" className="form-control" data-bv-field="number" id="signupEmail" required placeholder="Email ID"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="signupMobile" required placeholder="Mobile Number"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="signuploginPassword" required placeholder="Password"/>
              </div>
              <button className="btn btn-primary btn-block" type="submit">Signup</button>
            </form>
          </div>
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1"/>
            <span className="mx-2">OR</span>
            <hr className="flex-grow-1"/>
          </div>
          <div className="row">
            <div className="col-12 mb-3">
              <button type="button" className="btn btn-block btn-outline-primary">Login with Facebook</button>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-block btn-outline-danger">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </React.Fragment>
        );
    }
}

export default Loginmodal;