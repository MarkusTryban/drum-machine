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
        <h1>Drum Machine</h1>
        <button className='drum-pad' id='Q'>
          Q
        </button>
        <div id='display'></div>
      </div>
    );
  }
}

export default DrumDisplay;
