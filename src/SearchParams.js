const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form action="#">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
