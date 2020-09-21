import React, { Component } from 'react';

import { drumPadArray } from './DrumPadArray';

import DrumPad from './DrumPad';

import './DrumDisplay.css';

const bankOne = drumPadArray();

export default class DrumDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: 'Drum Machine',
    };

    this.updateDisplayText = this.updateDisplayText.bind(this);
  }

  updateDisplayText = (text) => {
    this.setState({
      displayText: text,
    });
  };

  render() {
    return (
      <div className='drums' id='drum-machine'>
        <div id='display'>
          <h1>{this.state.displayText}</h1>
        </div>
        <div className='drum-pad-layout'>
          {bankOne.map((item, idx) => {
            return (
              <DrumPad
                key={idx}
                padItem={item}
                updateDisplayText={this.updateDisplayText}
              />
            );
          })}
        </div>
        <div className='footer'>
          by{' '}
          <a
            href='https://markustryban.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Markus Tryban
          </a>
        </div>
      </div>
    );
  }
}
