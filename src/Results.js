import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>pets not found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet name={pet.name} breed={pet.breed} key={pet.id} />
        ))
      )}
    </div>
  );
};

export default Results;
