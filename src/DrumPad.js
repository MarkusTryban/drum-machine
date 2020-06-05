import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.audioHandler = React.createRef();
  }

  onKeyDown = e => {
    const root = ReactDOM.findDOMNode(this);

    if (e.keycode === this.props.padItem.keyCode) {
      root.classList.add('active');

      this.drumPadOnClick();
    }
  };

  drumPadOnClick = () => {
    const text = this.props.padItem.id;
    const audioElm = this.audioHandler.current;

    this.props.updateDisplayText(text);
    audioElm.play();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

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
