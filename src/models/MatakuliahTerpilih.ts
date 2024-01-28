import { IMatakuliah } from './Matakuliah';

export interface IMatakuliahTerpilih {
  matakuliah: IMatakuliah;
  isEnabled: boolean;
  color: string;
}
