import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className='col-10 mx-auto text-center text-title text-uppercase pt-5 m-10'>
        <h1 className='display-3'>404</h1>
        <h1>Error</h1>
        <h2>Not found</h2>
        <h3>
          the requested URL
          was not found
        </h3>
      </div>
    );
  }
}

export default NotFound;
