import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import { useMatakuliah } from '../hooks/useMatakuliah';
import {
  ColorVariants,
  IMatakuliahTerpilih
} from '../models/MatakuliahTerpilih';
import { IMatakuliah } from '../models/Matakuliah';
import ListMatakuliahTerpilih from '@/components/ListMatakuliahTerpilih';
import { getRandomColorVariant } from '@/utils/getRandomColorVariant';

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const timeblocks = [
  '6AM',
  '7AM',
  '8AM',
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM'
];

const Home = () => {
  useEffect(() => {
    document.title = 'Warteg ITB FRS Scheduler';
  }, []);

  // [agenda, setAgenda] = useState<IMatakuliah[]>([]);
  const [matakuliahTerplih, setMatakuliahTerplih] = useState<
    IMatakuliahTerpilih[]
  >([]);
  const { matakuliahData } = useMatakuliah();

  const addMatakuliah = (
    matakuliah: IMatakuliah,
    isEnabled: boolean,
    color: ColorVariants
  ) => {
    setMatakuliahTerplih((prev) => [
      ...prev,
      { matakuliah: matakuliah, isEnabled: isEnabled, color: color }
    ]);
  };

  const addRandomMatakuliah_DEBUG = () => {
    const randomMatakuliah =
      matakuliahData[Math.floor(Math.random() * matakuliahData.length)];
    const randomColor = getRandomColorVariant();

    addMatakuliah(randomMatakuliah, true, randomColor);
  };

  return (
    <div className="min-h-screen px-8 py-4 bg-gradient-to-r from-amber-50 to-slate-100">
      <header className="mb-4">
        <Header />
      </header>
      <main>
        <div className="flex flex-col sm:flex-row gap-2 flex-auto grow-[3]">
          <Calendar
            className="flex-1 grow-[2.5]"
            days={days}
            timeblocks={timeblocks}
            matakuliahTerpilih={matakuliahTerplih}
          />
          <ListMatakuliahTerpilih
            className="flex-1"
            mataKuliahTerpilih={matakuliahTerplih}
            setMataKuliahTerpilih={setMatakuliahTerplih}
          />
        </div>
        <button onClick={addRandomMatakuliah_DEBUG}>
          DEBUG_AddRandomMatakuliah
        </button>
      </main>
    </div>
  );
};

export default Home;
