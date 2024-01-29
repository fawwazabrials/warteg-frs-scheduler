import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import SearchMatakuliah from './SearchMatakuliah';
import usePickedMataKuliahContext from '@/hooks/usePickedMataKuliahContext';

interface PickedMatakuliahListProps {
  className?: string;
}

const PickedMatakuliahList = ({ className }: PickedMatakuliahListProps) => {
  const { pickedMatakuliah } = usePickedMataKuliahContext();

  return (
    <div className={`flex flex-col ${className}`}>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-sky-600 text-white p-2 w-full rounded-lg text-sm">
            Tambah Mata Kuliah
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[80%]">
          <SearchMatakuliah />
        </DialogContent>
      </Dialog>

      <div className="bg-white rounded-lg shadow-lg mt-2">
        <h2 className="text-white bg-sky-600 rounded-t-lg px-4 py-2 text-sm">
          Mata Kuliah Diambil
        </h2>

        {/* this part */}
        <div className="px-2 py-2 max-h-[500px] overflow-auto flex flex-col gap-2">
          {pickedMatakuliah.length == 0 && (
            <p className="text-sm text-slate-500 px-2">
              Kamu belum mengambil mata kuliah apapun D:
            </p>
          )}

          {pickedMatakuliah.map((mk) => (
            <div
              className={`border p-2 flex flex-row gap-2 rounded-lg ${mk.color}`}
            >
              <p className="font-bold text-3xl align-middle">
                {String(mk.matakuliah.no_kelas).padStart(2, '0')}
              </p>
              <div className="text-sm">
                <p>
                  {mk.matakuliah.kode} - {mk.matakuliah.sks}{' '}
                  <span className="text-xs">SKS</span>
                </p>
                <p>{mk.matakuliah.nama}</p>
                <div className="text-xs italic">
                  <p>Dosen:</p>
                  {mk.matakuliah.dosen ? (
                    <ul>
                      {mk.matakuliah.dosen.map((dosen) => (
                        <li>- {dosen}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Belum ada dosen</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickedMatakuliahList;
