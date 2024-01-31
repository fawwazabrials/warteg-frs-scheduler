import useSearch from '@/hooks/useSearch';
import MatakuliahItem from '../MatakuliahItem';
import { Button } from '../ui/button';
import { ColorVariants } from '@/models/PickedMatakuliah';
import usePickedMataKuliahContext from '@/hooks/usePickedMataKuliahContext';
import { getRandomColorVariant } from '@/utils/getRandom';
import { Fade } from 'react-awesome-reveal';

interface SearchResultsProps {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchResults = ({ setIsDialogOpen }: SearchResultsProps) => {
  const { result, count, showMore } = useSearch();
  const { addPickedMatakuliah } = usePickedMataKuliahContext();

  return (
    <div className="transition">
      <div className="mb-2 flex flex-col sm:flex-row sm:justify-center items-center">
        <p className="text-sm text-muted-foreground text-center italic">
          Menunjukan {count} dari {result.length} hasil yang ditemukan.{' '}
        </p>
        {count < result.length && (
          <Button variant={'link'} onClick={showMore}>
            Tampilkan lebih
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[500px] overflow-auto p-2">
        {result.slice(0, count).map((matakuliah) => (
          <div
            key={`${matakuliah.kode}${matakuliah.no_kelas}`}
            onClick={(e) => {
              e.preventDefault();
              addPickedMatakuliah(matakuliah, true, getRandomColorVariant());
              setIsDialogOpen(false);
            }}
          >
            <Fade cascade damping={0.1} duration={500}>
              <MatakuliahItem
                className="hover:scale-[1.05] cursor-pointer transition-transform duration-200"
                showHour={true}
                matakuliah={matakuliah}
                color={ColorVariants.primary}
              />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
