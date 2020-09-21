import React, { useEffect } from 'react';

import ReactDOM from 'react-dom';

const DrumPad = (props) => {
  const audioHandler = React.createRef();

  const onKeyDown = (e) => {
    const root = ReactDOM.findDOMNode(this);

    if (e.keyCode === props.padItem.keyCode) {
      root.classList.add('active');

      drumPadOnClick();
    }
  };

  const onKeyUp = (e) => {
    const root = ReactDOM.findDOMNode(this);

    if (e.keyCode === props.padItem.keyCode) {
      setTimeout(() => {
        root.classList.remove('active');
      }, 33);
    }
  };

  const drumPadOnClick = () => {
    const text = props.padItem.id;
    const audioElm = audioHandler.current;

    props.updateDisplayText(text);
    audioElm.currentTime = 0;
    audioElm.play();
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const { padItem } = props.padItem;

  return (
    <div className='drum-pad' id={padItem.id} onClick={drumPadOnClick}>
      <audio
        className='clip'
        id={padItem.keyTrigger}
        src={padItem.url}
        ref={audioHandler}
      />
      {padItem.keyTrigger}
    </div>
  );
};

export default DrumPad;
