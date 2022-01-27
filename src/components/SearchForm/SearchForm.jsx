import { useState } from "react";
import { useDispatch } from 'react-redux'

function SearchForm() {
    const dispatch = useDispatch(); 
    const [search, setSearch] = useState("");

  const handleSubmit = () => {
    console.log("gif submitted to search");
   
  };

  return (
    <>
      <h4>Input image search</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="giphy img here"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default SearchForm;
