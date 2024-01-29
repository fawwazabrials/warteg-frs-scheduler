interface Prodi {
  kode: string;
  fakultas: string;
  nama: string;
}

interface Fakultas {
  kode: string;
  nama: string;
}

interface Matakuliah {
  fakultas: string;
  prodi: string;
  kode: string;
  nama: string;
  sks: number;
  no_kelas: number;
  dosen: string[] | null;
  jadwal: MKJadwal[] | null;
}

interface MKJadwal {
  start: MKTimestamp;
  end: MKTimestamp;
  ruang: string;
}

interface MKTimestamp {
  hari: string;
  jam: string;
  menit: string;
}

export type { Prodi, Fakultas, Matakuliah, MKJadwal, MKTimestamp };
