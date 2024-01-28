import { IMatakuliah } from '../models/Matakuliah';
import data from '../json/MKS1_2023-2.json';

export const useMatakuliah = () => {
	const matakuliahData: IMatakuliah[] = data as IMatakuliah[];

	return { matakuliahData };
};
