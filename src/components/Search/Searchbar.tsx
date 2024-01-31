import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import useQueryString from '@/hooks/useQueryString';
import useJSONData from '@/hooks/useJSONData';

const Searchbar = () => {
  const { fakultasData, prodiData } = useJSONData();
  const { queryString, setSearch, setSelectedFakultas, setSelectedProdi } =
    useQueryString();

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex flex-row gap-4 flex-1">
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-sm font-semibold">Fakultas</p>
          <Select
            onValueChange={(e) =>
              setSelectedFakultas(e === 'unassigned' ? '' : e)
            }
            value={queryString.fakultas}
          >
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Pilih Fakultas" className="h-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unassigned">Semua Fakultas</SelectItem>
              {fakultasData.map((fakultas) => (
                <SelectItem key={fakultas.kode} value={`${fakultas.kode}`}>
                  {fakultas.kode}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-sm font-semibold">Prodi</p>
          <Select
            onValueChange={(e) => setSelectedProdi(e === 'unassigned' ? '' : e)}
            value={queryString.prodi}
          >
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Pilih Prodi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unassigned">Semua Prodi</SelectItem>

              {prodiData
                .filter((p) =>
                  queryString.fakultas === ''
                    ? true
                    : p.fakultas === queryString.fakultas
                )
                .map((prodi) => (
                  <SelectItem key={prodi.kode} value={`${prodi.kode}`}>
                    {prodi.nama}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-1 flex-1 grow-[2]">
        <p className="text-sm font-semibold">Search</p>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={queryString.q}
        ></Input>
      </div>
    </div>
  );
};

export default Searchbar;
