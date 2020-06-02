import React, { Component } from 'react';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.audioHandler = React.createRef();
  }

  drumPadOnClick = () => {
    const text = this.props.padItem.id;
    const audioElm = this.audioHandler.current;

    this.props.updateDisplayText(text);
    audioElm.play();
  };

  render() {
    const padItem = this.props.padItem;

    return (
      <div className='drum-pad' id={padItem.id} onClick={this.drumPadOnClick}>
        <audio
          className='clip'
          id={padItem.keyTrigger}
          src={padItem.url}
          ref={this.audioHandler}
        />
        {padItem.keyTrigger}
      </div>
    );
  }
}
