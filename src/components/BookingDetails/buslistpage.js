import React, { Component } from 'react';
class Buslistpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                 <section className="page-header page-header-text-light bg-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1>Bus - List Page</h1>
          </div>
          <div className="col-md-4">
            {/* <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
              <li><a href="index.html">Home</a></li>
              <li><a href="booking-bus.html">Bus</a></li>
              <li className="active">Bus List Page</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
            </React.Fragment>
        );
    }
}

export default Buslistpage;