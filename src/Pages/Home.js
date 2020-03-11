import React, { Component } from 'react';
import Banner from '../Banner/Banner';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner></Banner>
        <div className="clearfix"></div>
      </React.Fragment>
    );
  }
}
export default Home; // Don’t forget to use export default!
