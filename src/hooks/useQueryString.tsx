import { useSearchParams } from 'react-router-dom';

const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryString = {
    q: searchParams.get('q') || '',
    fakultas: searchParams.get('fakultas') || '',
    prodi: searchParams.get('prodi') || ''
  };

  const setSelectedFakultas = (kodeFakultas: string) => {
    setSearchParams({ fakultas: kodeFakultas });
  };

  const setSelectedProdi = (kodeProdi: string) => {
    setSearchParams({
      prodi: kodeProdi,
      fakultas: queryString.fakultas
    });
  };

  const setSearch = (search: string) => {
    setSearchParams((prev) => {
      prev.set('q', search);
      return prev;
    });
  };

  return { queryString, setSearch, setSelectedFakultas, setSelectedProdi };
};

//   const [queryString, setQueryString] = useState<QueryString>({
//     q: searchParams.get('q') || '',
//     fakultas: searchParams.get('fakultas') || '',
//     prodi: searchParams.get('prodi') || ''
//   });

//   // If there is change in state, update the search params
//   useEffect(() => {
//     if (
//       searchParams.get('q') !== queryString.q ||
//       searchParams.get('fakultas') !== queryString.fakultas ||
//       searchParams.get('prodi') !== queryString.prodi
//     ) {
//       setSearchParams({
//         q: queryString.q,
//         fakultas: queryString.fakultas,
//         prodi: queryString.prodi
//       });
//     }
//   }, [queryString, searchParams, setSearchParams]);

//   const setSelectedFakultas = (kodeFakultas: string) => {
//     setQueryString({ ...queryString, fakultas: kodeFakultas });
//   };

//   const setSelectedProdi = (kodeProdi: string) => {
//     setQueryString({ ...queryString, prodi: kodeProdi });
//   };

//   const setSearch = (search: string) => {
//     setQueryString({ ...queryString, q: search });
//   };

export default useQueryString;
