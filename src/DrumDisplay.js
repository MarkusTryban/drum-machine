import React, { Component } from 'react';

class DrumDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
  }

  render() {
    return (
      <div id='drum-machine'>
        <div id='display'>
          <h1>Drum Machine</h1>
        </div>
      </div>
    );
  }
}

export default DrumDisplay;
