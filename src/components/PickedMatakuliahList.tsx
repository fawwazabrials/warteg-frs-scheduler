import usePickedMataKuliahContext from '@/hooks/usePickedMataKuliahContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import MatakuliahItem from './MatakuliahItem';

interface PickedMatakuliahListProps {
  className?: string;
}

const PickedMatakuliahList = ({ className }: PickedMatakuliahListProps) => {
  const { pickedMatakuliah, removePickedMatakuliah } =
    usePickedMataKuliahContext();

  return (
    <Card
      className={`w-0 min-w-full overflow-auto overscroll-none ${className}`}
    >
      <CardHeader className="bg-primary rounded-t-md py-2 overflow-none">
        <CardTitle className="text-secondary text-md">
          Mata Kuliah Diambil
        </CardTitle>
      </CardHeader>
      {/* here */}
      <CardContent className="p-2 flex flex-col gap-2 max-h-full overflow-auto">
        {pickedMatakuliah.length == 0 && (
          <p className="text-sm text-muted-foreground px-4">
            Kamu belum mengambil mata kuliah apapun D:
          </p>
        )}

        {pickedMatakuliah.map((mk) => (
          <div
            key={`${mk.matakuliah.kode}${mk.matakuliah.no_kelas}`}
            onClick={(e) => {
              e.preventDefault();
              removePickedMatakuliah(
                mk.matakuliah.kode,
                mk.matakuliah.no_kelas
              );
            }}
          >
            <MatakuliahItem
              className="hover:scale-[1.01] cursor-pointer transition-transform duration-200"
              matakuliah={mk.matakuliah}
              color={mk.color}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PickedMatakuliahList;
