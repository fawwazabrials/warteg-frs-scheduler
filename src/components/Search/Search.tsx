import SearchResults from './SearchResults';
import Searchbar from './Searchbar';

interface SearchProps {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = ({ setIsDialogOpen }: SearchProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Searchbar />
      <SearchResults setIsDialogOpen={setIsDialogOpen} />
    </div>
  );
};

export default Search;
