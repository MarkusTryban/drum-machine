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

  onKeyUp = e => {
    const root = ReactDOM.findDOMNode(this);

    if (e.keyCode === this.props.padItem.keyCode) {
      setTimeout(() => {
        root.classList.remove('active');
      }, 33);
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
    document.addEventListener('keydown', this.onKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keydown', this.onKeyUp);
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
