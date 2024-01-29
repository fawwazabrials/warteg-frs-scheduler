import { Matakuliah } from '@/models/JSONData';
import { ColorVariants } from '@/models/PickedMatakuliah';

const getRandomColorVariant = () => {
  const values = Object.keys(ColorVariants);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return ColorVariants[enumKey as keyof typeof ColorVariants];
};

const getRandomMatakuliah = (matakuliahData: Matakuliah[]) => {
  console.log(matakuliahData);
  return matakuliahData[Math.floor(Math.random() * matakuliahData.length)];
};

export { getRandomColorVariant, getRandomMatakuliah };
