import { ColorVariants } from '@/models/MatakuliahTerpilih';

export const getRandomColorVariant = () => {
  const values = Object.keys(ColorVariants);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return ColorVariants[enumKey as keyof typeof ColorVariants];
};
