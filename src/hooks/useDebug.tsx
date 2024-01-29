import { getRandomColorVariant, getRandomMatakuliah } from '@/utils/getRandom';
import useJSONData from './useJSONData';
import usePickedMataKuliahContext from './usePickedMataKuliahContext';

const useDebug = () => {
  const { matakuliahData } = useJSONData();
  const { addPickedMatakuliah } = usePickedMataKuliahContext();

  const addRandomMatakuliah = () => {
    addPickedMatakuliah(
      getRandomMatakuliah(matakuliahData),
      true,
      getRandomColorVariant()
    );
  };

  return { addRandomMatakuliah };
};

export default useDebug;
