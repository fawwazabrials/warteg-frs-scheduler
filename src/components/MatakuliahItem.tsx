import { Matakuliah } from '@/models/JSONData';
import { ColorVariants } from '@/models/PickedMatakuliah';
import { Card, CardContent } from './ui/card';

interface MatakuliahItemProps {
  className?: string;
  color?: ColorVariants;
  matakuliah: Matakuliah;
  showHour?: boolean;
}

const MatakuliahItem = ({
  className,
  color,
  matakuliah,
  showHour
}: MatakuliahItemProps) => {
  return (
    <Card className={`${className} ${color}`}>
      <CardContent className="flex flex-row gap-2 px-4 py-2">
        <p className="font-bold text-3xl align-middle">
          {String(matakuliah.no_kelas).padStart(2, '0')}
        </p>
        <div className="text-sm">
          <p className="break-normal">
            {matakuliah.kode} - {matakuliah.sks}{' '}
            <span className="text-xs">SKS</span>
          </p>
          <p>{matakuliah.nama}</p>
          <div className="text-xs italic">
            <div className="my-2">
              <p className="font-semibold">Jadwal:</p>
              {showHour &&
                (matakuliah.jadwal ? (
                  matakuliah.jadwal.map((jadwal) => (
                    <p
                      key={`${matakuliah.kode}${matakuliah.no_kelas}${jadwal.start.hari}${jadwal.start.jam}${jadwal.start.menit}${jadwal.end.jam}${jadwal.end.menit}`}
                    >
                      {jadwal.start.hari}, {jadwal.start.jam}.{jadwal.end.menit}{' '}
                      - {jadwal.end.jam}.{jadwal.end.menit}
                    </p>
                  ))
                ) : (
                  <p>Jadwal tdk tersedia</p>
                ))}
            </div>
            <div>
              <p className="font-semibold">Dosen:</p>
              {matakuliah.dosen ? (
                <ul>
                  {matakuliah.dosen.map((dosen) => (
                    <li
                      className="line-clamp-1"
                      key={`${matakuliah.kode}${matakuliah.no_kelas}${dosen.split(' ').join('')}`}
                    >
                      - {dosen}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Belum ada dosen</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatakuliahItem;
