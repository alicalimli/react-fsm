const SearchParams = () => {
  return (
    <div className="search-params">
      <form action="#">
        <label htmlFor="location">
          <input type="text" id="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
