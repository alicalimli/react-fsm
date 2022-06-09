import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form action="#">
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            placeholder="location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
