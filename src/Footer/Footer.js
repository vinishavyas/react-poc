import React, { Component } from 'react';
import '../Footer/Footer.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
            <div className="container">
                <div className="social-icon"> <a href="/"><i className="fa fa-facebook"></i></a> <a href="/"><i className="fa fa-twitter"></i></a> <a href="/"><i className="fa fa-google-plus"></i></a> </div>
                <ul className="footer-menus">
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms and Conditions</a></li>
                <li><a href="/">Contact us</a></li>
                </ul>
                <div className="copyright-text">Copyright © 2019 Job portal. All rights reserved</div>
            </div>
        </footer>
        <div className="clearfix"></div>
      </React.Fragment>
    );
  }
}
export default Footer; // Don’t forget to use export default!
