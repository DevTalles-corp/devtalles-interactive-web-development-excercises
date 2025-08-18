import applause from '../sounds/applause.mp3'
import boo from '../sounds/boo.mp3'
import gasp from '../sounds/gasp.mp3'
import tada from '../sounds/tada.mp3'
import victory from '../sounds/victory.mp3'
import wrong from '../sounds/wrong.mp3'

export interface Sound {
  icon: string;
  id: string;
  file: string
  name: string;
}

export const sounds: Sound[] = [
  { id: 'applause', icon: '👏🏻', name: 'Applause', file: applause },
  { id: 'boo', icon: '👎🏻', name: 'Boo', file: boo },
  { id: 'gasp', icon: '😮', name: 'Gasp', file: gasp },
  { id: 'tada', icon: '🎉', name: 'Tada', file: tada },
  { id: 'victory', icon: '✌🏻', name: 'Victory', file: victory },
  { id: 'wrong', icon: '❌', name: 'Wrong', file: wrong },
];