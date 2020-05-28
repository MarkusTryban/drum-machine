import React, { Component } from 'react';

import drumPadClip from './DrumPadClip';

class DrumDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioData: [],
    };
    this.GET_AUDIO_CLIP = drumPadClip();
  }

  getAudio = () => {
    fetch(this.GET_AUDIO_CLIP)
      .then(res => res.json())
      .then(result => {
        this.setState({
          audioData: result,
        });
      });
  };

  render() {
    return (
      <div id='drum-machine' className='drums'>
        <div id='display'>
          <h1>Drum Machine</h1>
        </div>
        <div className='drum-pad-layout'>
          <button className='drum-pad'>Q</button>
          <button className='drum-pad'>W</button>
          <button className='drum-pad'>E</button>
          <button className='drum-pad'>A</button>
          <button className='drum-pad'>S</button>
          <button className='drum-pad'>D</button>
          <button className='drum-pad'>Z</button>
          <button className='drum-pad'>X</button>
          <button className='drum-pad'>C</button>
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

export default DrumDisplay;
