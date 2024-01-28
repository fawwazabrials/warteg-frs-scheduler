import { IJadwal } from '../models/Matakuliah';
import { IMatakuliahTerpilih } from '../models/MatakuliahTerpilih';

interface AgendaProps {
  matakuliahTerpilih: IMatakuliahTerpilih;
}

const Agenda = ({ matakuliahTerpilih }: AgendaProps) => {
  const { matakuliah, color } = matakuliahTerpilih;
  const { start, end } = matakuliah.jadwal as IJadwal;

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
      className={`absolute w-[98%] border rounded-md left-[1%] ${color}`}
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
