import { IMatakuliah } from './Matakuliah';

export interface IMatakuliahTerpilih {
  matakuliah: IMatakuliah;
  isEnabled: boolean;
  color: ColorVariants;
}

export enum ColorVariants {
  blue = 'bg-blue-500/20 border-blue-500/20 text-blue-500',
  red = 'bg-red-500/20 border-red-500/20 text-red-500',
  green = 'bg-green-500/20 border-green-500/20 text-green-500',
  orange = 'bg-orange-500/20 border-orange-500/20 text-orange-500',
  purple = 'bg-purple-500/20 border-purple-500/20 text-purple-500'
}
