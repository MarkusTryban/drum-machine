import React, { useState, useEffect } from 'react';

const useKey = (): boolean => {
  const [pressedKey, setPressedKey] = useState(false);

  const drumPadOnClick = (props: {
    padItem: { id: string };
    updateDisplayText: (arg0: string) => void;
  }): void => {
    const text = props.padItem.id;
    const audioElm = audioHandler.current;

    props.updateDisplayText(text);
    audioElm.currentTime = 0;
    audioElm.play();
  };

  const onKeyDown = (e: { key: string }): void => {
    if (e.key) {
      setPressedKey(true);

      drumPadOnClick();
    }
  };

  const onKeyUp = (e: { key: string }): void => {
    if (e.key) {
      setPressedKey(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return (): void => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pressedKey;
};

const DrumPad = (props: { padItem: { id: string } }): JSX.Element => {
  return (
    <div className='drum-pad' id={props.padItem.id} onClick={drumPadOnClick()}>
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
