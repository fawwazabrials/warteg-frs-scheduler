import { IJadwal } from '../models/Matakuliah';
import { IMatakuliahTerpilih } from '../models/MatakuliahTerpilih';

interface AgendaProps {
  matakuliahTerpilih: IMatakuliahTerpilih;
}

const Agenda = ({ matakuliahTerpilih }: AgendaProps) => {
  const colors = new Map([
    ['blue', 'bg-blue-500/20 border-blue-500/20 text-blue-500'],
    ['red', 'bg-red-500/20 border-red-500/20 text-red-500'],
    ['green', 'bg-green-500/20 border-green-500/20 text-green-500'],
    ['orange', 'bg-orange-500/20 border-orange-500/20 text-orange-500'],
    ['purple', 'bg-purple-500/20 border-purple-500/20 text-purple-500']
  ]);

  const { matakuliah, isEnabled, color } = matakuliahTerpilih;
  const { start, end, ruang } = matakuliah.jadwal as IJadwal;

  const CALENDAR_START_TIME = 360;

  const top =
    ((parseInt(start.jam) * 60 + parseInt(start.menit) - CALENDAR_START_TIME) *
      7.7) /
    60;
  const height =
    ((parseInt(end.jam) * 60 +
      parseInt(end.menit) -
      parseInt(start.jam) * 60 +
      parseInt(start.menit)) /
      60) *
    7.7;

  return (
    <div
      style={{ top: `${top}%`, height: `${height}%` }}
      className={`absolute w-[98%] border rounded-md left-[1%] ${colors.get(color)}`}
    >
      <div className="py-1 px-2 flex flex-col">
        <p className="text-sm">{`${start.jam}:${start.menit} - ${end.jam}:${end.menit}`}</p>
        <h4 className="text-sm font-bold line-clamp-2">
          {matakuliah.kode} ({matakuliah.no_kelas}) - {matakuliah.nama}
        </h4>
      </div>
    </div>
  );
};

export default Agenda;
