import { useState, useEffect, useContext } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const breeds = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const results = await response.json();

    setPets(results.pets);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            disabled
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds[0].map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
