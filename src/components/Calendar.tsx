import usePickedMataKuliahContext from '@/hooks/usePickedMataKuliahContext';
import { PickedMatakuliah } from '@/models/PickedMatakuliah';
import Agenda from './Agenda';

interface CalendarProps {
  days: string[];
  timeblocks: string[];
  className: string;
}

const Calendar = ({ days, timeblocks, className }: CalendarProps) => {
  const { pickedMatakuliah } = usePickedMataKuliahContext();
  const matakuliah: PickedMatakuliah[] = [];

  // console.log(pickedMatakuliah);

  // Split all matakuliah by jadwal
  pickedMatakuliah.forEach((pmk) => {
    const jadwal = pmk.matakuliah.jadwal;
    jadwal &&
      jadwal.forEach((el) => {
        matakuliah.push({
          ...pmk,
          matakuliah: {
            ...pmk.matakuliah,
            jadwal: [el]
          }
        });
      });
  });

  return (
    <div className={`bg-white shadow-lg py-4 overflow-x-scroll ${className}`}>
      <div className="flex flex-row flex-auto h-[600px]  ">
        <CalendarColumnLabel fill={timeblocks} />

        {days.map((day, index) => (
          <CalendarColumn
            key={index}
            id={day}
            matakuliah={matakuliah.filter(
              (mk) =>
                mk.matakuliah.jadwal &&
                mk.matakuliah.jadwal[0].start.hari === day
            )}
            timeblockLength={timeblocks.length}
            isLeftmost={index == 0}
            isRightmost={index == days.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const CalendarColumn = ({
  id,
  timeblockLength,
  matakuliah,
  isLeftmost = false,
  isRightmost = false
}: {
  id: string;
  timeblockLength: number;
  matakuliah?: PickedMatakuliah[];
  isLeftmost?: boolean;
  isRightmost?: boolean;
}) => {
  return (
    <div id={id} className="relative flex flex-col flex-auto min-h-[1000px]">
      <div className="h-[40px] flex items-center justify-center border-b">
        {/* Label */}
        <h3 className="text-center text-sm font-semibold">{id}</h3>
      </div>

      <div className="relative flex-1 flex flex-col">
        {Array.from({ length: timeblockLength }, (_, index) => (
          <div
            key={index}
            className={`flex-1 border-b min-w-[150px] ${
              isRightmost ? '' : 'border-r'
            } ${isLeftmost ? '' : 'border-l'}`}
          ></div>
        ))}

        {/* Calendar Contents */}
        {matakuliah?.map((mk, index) => (
          <Agenda key={index} matakuliahTerpilih={mk} />
        ))}
      </div>
    </div>
  );
};

const CalendarColumnLabel = ({ fill }: { fill?: string[] }) => {
  return (
    <div className="flex flex-col grow-[0.2] min-h-[1000px] sticky z-10 left-0">
      <div className="h-[40px] border-b sticky z-10 left-0"></div>

      <div className="bg-white flex-1 flex flex-col">
        {fill &&
          Array.from({ length: fill.length }, (_, index) => (
            <div
              key={index}
              className={`flex-1 border-r text-right text-xs font-semibold text-slate-400 pl-10 pr-2 pt-1 sticky z-10 left-0`}
            >
              {fill?.[index]}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Calendar;
