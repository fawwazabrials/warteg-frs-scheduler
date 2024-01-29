import { PickedMatakuliahContext } from '@/context/PickedMatakuliahContext';
import { useContext } from 'react';

const usePickedMataKuliahContext = () => {
  const context = useContext(PickedMatakuliahContext);

  if (!context) {
    throw new Error(
      'usePickedMataKuliahContext must be used within a PickedMatakuliahProvider'
    );
  }

  return context;
};

export default usePickedMataKuliahContext;
