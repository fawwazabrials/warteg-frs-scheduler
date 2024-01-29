import { Matakuliah } from '@/models/JSONData';
import { ColorVariants, PickedMatakuliah } from '@/models/PickedMatakuliah';
import React from 'react';

type PickedMatakuliahContextType = {
  pickedMatakuliah: PickedMatakuliah[];
  addPickedMatakuliah: (
    matakuliah: Matakuliah,
    isEnabled: boolean,
    color: ColorVariants
  ) => void;
  removePickedMatakuliah: (kodeMatakuliah: string) => void;
  updatePickedMatakuliah: (pickedMatakuliah: PickedMatakuliah) => void;
};

export const PickedMatakuliahContext =
  React.createContext<PickedMatakuliahContextType>({
    pickedMatakuliah: [],
    addPickedMatakuliah: () => {},
    removePickedMatakuliah: () => {},
    updatePickedMatakuliah: () => {}
  });

const PickedMatakuliahProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [pickedMatakuliah, setPickedMatakuliah] = React.useState<
    PickedMatakuliah[]
  >([]);

  const addPickedMatakuliah = (
    matakuliah: Matakuliah,
    isEnabled: boolean,
    color: ColorVariants
  ) => {
    setPickedMatakuliah((prev) => [
      ...prev,
      { matakuliah: matakuliah, isEnabled: isEnabled, color: color }
    ]);
  };

  const removePickedMatakuliah = (kodeMatakuliah: string) => {
    setPickedMatakuliah((prev) =>
      prev.filter((m) => m.matakuliah.kode !== kodeMatakuliah)
    );
  };

  const updatePickedMatakuliah = (pickedMatakuliah: PickedMatakuliah) => {
    setPickedMatakuliah((prev) =>
      prev.map((pmk) =>
        pmk.matakuliah.kode === pickedMatakuliah.matakuliah.kode
          ? pickedMatakuliah
          : pmk
      )
    );
  };

  return (
    <PickedMatakuliahContext.Provider
      value={{
        pickedMatakuliah,
        addPickedMatakuliah,
        removePickedMatakuliah,
        updatePickedMatakuliah
      }}
    >
      {children}
    </PickedMatakuliahContext.Provider>
  );
};

export default PickedMatakuliahProvider;
