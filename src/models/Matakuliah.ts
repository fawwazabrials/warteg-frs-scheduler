export interface IMatakuliah {
  fakultas: string;
  prodi: string;
  kode: string;
  nama: string;
  sks: number;
  no_kelas: number;
  dosen: string[] | null;
  jadwal: IJadwal[] | IJadwal | null;
}

export interface IJadwal {
  start: ITimestamp;
  end: ITimestamp;
  ruang: string;
}

export interface ITimestamp {
  hari: string;
  jam: string;
  menit: string;
}
