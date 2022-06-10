import Pet from "./Pet";
import notFound from "./assets/notFound.svg";

const Results = ({ pets }) => {
  return (
    <div className="pets-container">
      {!pets.length ? (
        <div className="not-found-container">
          <img className="not-found-img" src={notFound} alt="" />
          <h1 className="not-found-title">Pet Not Found.</h1>
        </div>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
