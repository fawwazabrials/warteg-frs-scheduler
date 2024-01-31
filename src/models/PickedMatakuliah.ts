import { Matakuliah } from './JSONData';

export interface PickedMatakuliah {
  matakuliah: Matakuliah;
  isEnabled: boolean;
  color: ColorVariants;
}

export enum ColorVariants {
  pink = 'bg-pink-500/20 border-pink-500/20 text-pink-500 hover:bg-pink-500/30',
  rose = 'bg-rose-500/20 border-rose-500/20 text-rose-500 hover:bg-rose-500/30',
  indigo = 'bg-indigo-500/20 border-indigo-500/20 text-indigo-500 hover:bg-indigo-500/30',
  yellow = 'bg-yellow-500/20 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30',
  teal = 'bg-teal-500/20 border-teal-500/20 text-teal-500 hover:bg-teal-500/30',
  blue = 'bg-blue-500/20 border-blue-500/20 text-blue-500 hover:bg-blue-500/30',
  red = 'bg-red-500/20 border-red-500/20 text-red-500 hover:bg-red-500/30',
  green = 'bg-green-500/20 border-green-500/20 text-green-500 hover:bg-green-500/30',
  orange = 'bg-orange-500/20 border-orange-500/20 text-orange-500 hover:bg-orange-500/30',
  purple = 'bg-purple-500/20 border-purple-500/20 text-purple-500 hover:bg-purple-500/30',
  primary = 'bp-background border-border text-primary hover:bg-primary/10'
}
