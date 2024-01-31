import { Matakuliah } from '@/models/JSONData';
import { useCallback, useEffect, useState } from 'react';
import useJSONData from './useJSONData';
import useQueryString from './useQueryString';
import { checkMatch, parseSearchString } from '@/utils/searchText';

const useSearch = () => {
  const [result, setResult] = useState<Matakuliah[]>([]);
  const [count, setCount] = useState(0);

  const { matakuliahData } = useJSONData();
  const { queryString } = useQueryString();
  const { fakultas, prodi, q } = queryString;

  const showMore = () => {
    setCount(
      (prev) => prev + (result.length - count < 20 ? result.length - count : 20)
    );
  };

  const searchMatakuliah = useCallback(() => {
    let filteredMatakuliah = matakuliahData;

    if (fakultas) {
      filteredMatakuliah = filteredMatakuliah.filter(
        (matakuliah) => matakuliah.fakultas === fakultas
      );
    }

    if (prodi) {
      filteredMatakuliah = filteredMatakuliah.filter(
        (matakuliah) => matakuliah.prodi === prodi
      );
    }

    if (q) {
      const { kode, kelas, nama } = parseSearchString(q);
      console.log({ kode, kelas, nama });

      if (kode) {
        filteredMatakuliah = filteredMatakuliah.filter((matakuliah) =>
          matakuliah.kode.toLowerCase().includes(kode.toLowerCase())
        );
      }

      if (kelas > 0) {
        filteredMatakuliah = filteredMatakuliah.filter(
          (matakuliah) => matakuliah.no_kelas === kelas
        );
      }

      if (nama) {
        nama.split(' ').forEach((item) => {
          filteredMatakuliah = filteredMatakuliah.filter((matakuliah) =>
            checkMatch(matakuliah.nama, item)
          );
        });
      }
    }

    setCount(filteredMatakuliah.length > 20 ? 20 : filteredMatakuliah.length);
    setResult(filteredMatakuliah);
  }, [fakultas, prodi, q, matakuliahData]);

  useEffect(() => {
    searchMatakuliah();
  }, [fakultas, prodi, q, searchMatakuliah]);

  return { result, count, showMore };
};

export default useSearch;
