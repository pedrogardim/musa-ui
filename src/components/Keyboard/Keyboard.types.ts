import { MouseEventHandler } from 'react';
export interface KeyboardProps {
  initialOctave?: number;
  octave?: number;
  onNoteAttack: (note: number) => void;
  onNoteRelease: (note: number) => void;
  activeNotes: number[];
  color: string;
  setPlayingOctave: (note: number) => void;
  octaves: number;
  notesLabel?: string;
  style: Object;
  dark: boolean;
}
