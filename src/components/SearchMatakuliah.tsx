import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';
import { Input } from './ui/input';
import listFakultas from '../json/list_fakultas.json';
import listProdi from '../json/list_prodi.json';

const SearchMatakuliah = () => {
  console.log(listFakultas);

  return (
    <div className="flex flex-row gap-4">
      <IoSearchOutline className="w-8 h-8" />
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <Input className="flex-auto border-black border-0 border-b rounded-none" />
        <div className="flex flex-row gap-2">
          <Select>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Fakultas" />
            </SelectTrigger>
            <SelectContent>
              {listFakultas.map((fakultas) => (
                <SelectItem key={fakultas.kode} value={`${fakultas.kode}`}>
                  {fakultas.kode}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Prodi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchMatakuliah;
