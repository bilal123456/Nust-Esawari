import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <footer id="footer">
<section className="section py-2">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="featured-box border bg-light rounded style-3">
          <div className="featured-box-icon h-100 border-right"> <i className="fas fa-lock"></i> </div>
          <h4 className="mt-3">Secure Payments</h4>
          <p className="text-muted">Moving your card details to a much more secured place.</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="featured-box border bg-light rounded style-3">
          <div className="featured-box-icon h-100 border-right"> <i className="fas fa-bullhorn"></i> </div>
          <h4 className="mt-3">Refer & Earn</h4>
          <p className="text-muted">Invite a friend to sign up and earn up to $100.</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="featured-box border bg-light rounded style-3">
          <div className="featured-box-icon h-100 border-right"> <i className="far fa-life-ring"></i> </div>
          <h4 className="mt-3">24X7 Support</h4>
          <p className="text-muted">We're here to help. Have a query and need help ? <a href="#">Click here</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container mt-4">
  <div className="row">
    <div className="col-md-4 mb-3 mb-md-0">
      <p>Payment</p>
      <ul className="payments-types">
        <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="../../public/images/payment/visa.png" alt="visa" title="Visa"/></a></li>
        <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="../../public/images/payment/discover.png" alt="discover" title="Discover"/></a></li>
        <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="../../public/images/payment/paypal.png" alt="paypal" title="PayPal"/></a></li>
        <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="../../public/images/payment/american.png" alt="american express" title="American Express"/></a></li>
        <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="../../public/images/payment/mastercard.png" alt="discover" title="Discover"/></a></li>
      </ul>
    </div>
    <div className="col-md-4 mb-3 mb-md-0">
      <p>Subscribe</p>
      <div className="input-group newsletter">
        <input className="form-control" placeholder="Your Email Address" name="newsletterEmail" id="newsletterEmail" type="text"/>
        <span className="input-group-append">
        <button className="btn btn-secondary" type="submit">Subscribe</button>
        </span> </div>
    </div>
    <div className="col-md-4 d-flex align-items-md-end flex-column">
      <p>Keep in touch</p>
      <ul className="social-icons social-icons-colored">
        <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
        <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
        <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
        <li className="social-icons-linkedin"><a data-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
        <li className="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube"></i></a></li>
        <li className="social-icons-instagram"><a data-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
</div>
<div className="container">
  <div className="footer-copyright">
    <ul className="nav justify-content-center">
      <li className="nav-item"> <a className="nav-link active" href="#">About Us</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#">Faq</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#">Support</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#">Terms of Use</a> </li>
      <li className="nav-item"> <a className="nav-link" href="#">Privacy Policy</a> </li>
    </ul>
    <p className="copyright-text">Copyright © 2018 <a href="#">Quickai</a>. All Rights Reserved.</p>
  </div>
</div>
</footer>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

            </React.Fragment>
         );
    }
}
 
export default Footer;