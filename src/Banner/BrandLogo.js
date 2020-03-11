import React, { Component } from 'react';
import '../Banner/Banner.css';
import {vaio, airbnb, slack, walmart, logitech} from '../images';

class BrandLogo extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="brand-logo">
        <div className="container">
            <ul>
            <li><a href="/"><img src={vaio} alt=""/></a></li>
            <li><a href="/"><img src={airbnb} alt=""/></a></li>
            <li><a href="/"><img src={slack} alt=""/></a></li>
            <li><a href="/"><img src={walmart} alt=""/></a></li>
            <li><a href="/"><img src={logitech} alt=""/></a></li>
            </ul>
        </div>
        </section>
      </React.Fragment>
    );
  }
}
export default BrandLogo; // Don’t forget to use export default!
