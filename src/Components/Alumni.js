import React, { Component } from 'react';
import './../styles/alumni.css';
class Alumni extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="Page-header">Alumni</h1>
        <img
          className="img"
          src="/images/alumni/brothers50th.jpg"
          alt="50th Anniversary Celebration"
        />
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <h2 className="Page-header">Newsletters</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="col-sm-4">This is where an image will go</div>
          </div>
        </div>
        <h2 className="Page-header">House Cleanup</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">This is where an image will go</div>
            <div className="col-sm-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Alumni;
