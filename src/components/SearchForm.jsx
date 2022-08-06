import { useGlobalContext } from "../contexts/CocktailContext";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <p>searchForm</p>
    </div>
  );
};
export default SearchForm;
