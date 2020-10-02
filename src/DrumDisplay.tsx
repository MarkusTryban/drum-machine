import React, { useState } from 'react';

import drumPadArray from './DrumPadArray';

import DrumPad from './DrumPad';

import './DrumDisplay.css';

const bankOne = drumPadArray();

const DrumDisplay = (): JSX.Element => {
  const [displayText, setDisplayText] = useState('Drum Machine');

  const updateDisplayText = (text: string): void => {
    setDisplayText(text);
  };

  return (
    <>
      <div className='drums-container'>
        <div className='drums' id='drum-machine'>
          <div id='display'>
            <h1>{displayText}</h1>
          </div>
          <div className='drum-pad-layout'>
            {bankOne.map((item) => {
              return (
                <DrumPad
                  key={item.id}
                  padItem={item}
                  updateDisplayText={updateDisplayText}
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
      </div>
    </>
  );
};

export default DrumDisplay;
