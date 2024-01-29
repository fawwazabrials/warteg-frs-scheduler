import { Fakultas, Matakuliah, Prodi } from '@/models/JSONData';
import mk from '../json/MKS1_2023-2.json';
import f from '../json/list_fakultas.json';
import p from '../json/list_prodi.json';

const useJSONData = () => {
  const matakuliahData: Matakuliah[] = mk as Matakuliah[];
  const fakultasData: Fakultas[] = f as Fakultas[];
  const prodiData: Prodi[] = p as Prodi[];

  return { matakuliahData, fakultasData, prodiData };
};

export default useJSONData;
