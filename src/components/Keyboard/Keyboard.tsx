import React, { useState, useEffect, FC } from 'react';

import { KeyboardProps } from './Keyboard.types';

import './Keyboard.scss';

const Keyboard: FC<KeyboardProps> = ({
  initialOctave,
  octave = 0,
  color = '#707',
  setPlayingOctave = () => {},
  octaves = 2,
  notesLabel = null,
  style = {},
  onNoteAttack = () => {},
  onNoteRelease = () => {},
  dark = false,
}) => {
  const [octaveState, setOctaveState] = useState(
    initialOctave ? initialOctave : !isNaN(octave) ? octave : 0
  );
  const [isMouseDown, setIsMouseDown] = useState(false);

  const [activeNotes, setActiveNotes] = useState([]);

  const handleKeyClick = (key: number) => {
    let note = key + 24;
    onNoteAttack(note);
    setActiveNotes((notes) => [...notes, note]);
  };
  const handleKeyUp = (key: number) => {
    let note = key + 24;
    onNoteAttack(note);
    setActiveNotes((notes) => notes.filter((c) => c !== note));
  };

  const handleTouch = (e) => {
    let touchedKeys = [
      ...new Set(
        Array(e.touches.length)
          .fill(0)
          .map((t, ti) =>
            parseInt(
              document
                .elementFromPoint(
                  e.touches.item(ti).clientX,
                  e.touches.item(ti).clientY
                )
                .getAttribute('data-keyIndex')
            )
          )
          .filter((e) => e !== null && e !== NaN)
      ),
    ];

    const activeKeys =
      activeNotes.length > 0
        ? [...new Set(activeNotes.map((n) => n - 24 - octave * 12))]
        : [];

    const toPlay = [
      ...new Set(touchedKeys.filter((obj) => activeKeys.indexOf(obj) == -1)),
    ];
    const toRelease = [
      ...new Set(activeKeys.filter((obj) => touchedKeys.indexOf(obj) == -1)),
    ];

    toPlay.forEach((e) => handleKeyClick(e));
    toRelease.forEach((e) => handleKeyUp(e));
  };

  const _octave = !isNaN(octave) ? octave : octaveState;

  useEffect(() => {
    //console.log(setPlayingOctave);
    if (setPlayingOctave) setPlayingOctave(_octave);
  }, [octaveState]);

  useEffect(() => {
    if (!isMouseDown) activeNotes.map((note) => onNoteRelease(note));
  }, [isMouseDown]);

  return (
    <div
      className="keyboard"
      style={{ ...style }}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
      //onTouchStart={(e) => handleTouch(e)}
      onTouchEnd={handleTouch}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
    >
      {Array(Math.floor(octaves * 12))
        .fill(1)
        .map((e, i) => {
          let isBlackKey =
            i % 12 === 1 ||
            i % 12 === 3 ||
            i % 12 === 6 ||
            i % 12 === 8 ||
            i % 12 === 10;
          let isActive =
            activeNotes.length > 0 &&
            activeNotes.map((note) => note - 24).includes(i + _octave * 12);
          return (
            <div
              onMouseDown={() => handleKeyClick(i)}
              onMouseLeave={() => handleKeyUp(i)}
              onMouseUp={() => handleKeyUp(i)}
              onMouseEnter={() => isMouseDown && handleKeyClick(i)}
              key={i}
              data-keyIndex={i}
              style={{
                boxShadow: dark ? '0 0 4px black' : 'none',
                left: (i * 100) / (octaves * 12) + '%',
                backgroundColor: isActive
                  ? dark
                    ? color
                    : color
                  : dark
                  ? 'lightgray'
                  : isBlackKey
                  ? '#444'
                  : 'white',
                outline: !dark ? `solid 1px #555` : 'none',
                width: isBlackKey
                  ? 100 / ((78 / 7) * octaves) + '%'
                  : 100 / ((49 / 7) * octaves) + '%',
              }}
              className={`keyboard-key ${
                isBlackKey ? 'keyboard-black-key' : 'keyboard-white-key'
              } ${'keyboard-key-active'}`}
            >
              <span>{notesLabel && notesLabel[i]}</span>
              <span style={{ opacity: 0.5 }}>
                {/* Tone.Frequency(i + _octave * 12 + 24, 'midi').toNote() */}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Keyboard;
