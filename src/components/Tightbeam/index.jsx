import React, { Component } from 'react';

class Tightbeam extends Component {
  constructor(props, context) {
    super(props, context);

    this.test = 'testing';
  }
  render() {
    return (
      <div>
        <p><strong>Tightbeam</strong>: {this.test}</p>
      </div>
    );
  }
}

export default Tightbeam;
