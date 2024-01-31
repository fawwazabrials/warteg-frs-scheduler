import { Matakuliah } from '@/models/JSONData';
import { ColorVariants } from '@/models/PickedMatakuliah';

const getRandomColorVariant = () => {
  const values = Object.keys(ColorVariants);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  const key = enumKey === 'primary' ? 'blue' : enumKey;
  return ColorVariants[key as keyof typeof ColorVariants];
};

const getRandomMatakuliah = (matakuliahData: Matakuliah[]) => {
  return matakuliahData[Math.floor(Math.random() * matakuliahData.length)];
};

export { getRandomColorVariant, getRandomMatakuliah };
