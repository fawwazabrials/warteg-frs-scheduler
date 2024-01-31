import Header from '../components/Header';
import Calendar from '../components/Calendar';
import PickedMatakuliahList from '@/components/PickedMatakuliahList';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Search from '@/components/Search/Search';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen px-8 py-4 bg-gradient-to-r from-amber-50 to-slate-100">
      <header className="mb-4">
        <Header />
      </header>
      <main>
        <div className="flex flex-col xl:flex-row gap-2 h-[700px] flex-1">
          <Card className="flex-auto grow-[1]">
            <CardContent className="p-0">
              <Calendar
                className="flex-auto grow-[1] rounded-lg h-[700px]"
                days={days}
                timeblocks={timeblocks}
              />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2 flex-auto h-[700px]">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Tambah Mata Kuliah</Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90%] sm:max-w-[70%]">
                <Search setIsDialogOpen={setIsDialogOpen} />
              </DialogContent>
            </Dialog>
            <PickedMatakuliahList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
