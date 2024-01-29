import Header from '../components/Header';
import Calendar from '../components/Calendar';
import useDebug from '@/hooks/useDebug';
import PickedMatakuliahList from '@/components/PickedMatakuliahList';

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
  const { addRandomMatakuliah } = useDebug();

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
          />
          <PickedMatakuliahList className="flex-1" />
        </div>
        <button onClick={addRandomMatakuliah}>DEBUG_AddRandomMatakuliah</button>
      </main>
    </div>
  );
};

export default Home;
