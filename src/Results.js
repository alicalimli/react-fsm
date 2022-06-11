import Pet from "./Pet";
import notFound from "./assets/notFound.svg";

const Results = ({ pets, isPending, errorMsg }) => {
  return (
    <div className="pets-container">
      {isPending && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {errorMsg && (
        <div className="not-found-container">
          <img className="not-found-img" src={notFound} alt="" />
          <h1 className="not-found-title">Pet Not Found.</h1>
        </div>
      )}
      {pets &&
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
        ))}
    </div>
  );
};

export default Results;
