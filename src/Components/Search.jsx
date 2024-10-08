/* eslint-disable react/prop-types */
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input onChange={(e)=> {handleSearchNote(e.target.value)}} type="text" placeholder="Type To Search In Notes ..." />
    </div>
  );
}

export default Search;
